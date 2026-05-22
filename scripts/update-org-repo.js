#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');

function usage() {
  console.log('Usage: node scripts/update-org-repo.js --new-org newOrg --new-repo owner/repo');
  process.exit(1);
}

function parseArgs() {
  const args = process.argv.slice(2);
  const out = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--new-org') out.newOrg = args[++i];
    else if (args[i] === '--new-repo') out.newRepo = args[++i];
  }
  return out;
}

async function findPackageJsonFiles(dir) {
  const results = [];
  async function walk(current) {
    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        if (e.name === 'node_modules' || e.name === '.git') continue;
        await walk(full);
      } else if (e.isFile() && e.name === 'package.json') {
        results.push(full);
      }
    }
  }
  await walk(dir);
  return results;
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch (e) {
    return false;
  }
}

async function main() {
  const { newOrg, newRepo } = parseArgs();
  if (!newOrg || !newRepo) usage();

  const root = process.cwd();
  const npmrc = path.join(root, '.npmrc');
  if (!(await fileExists(npmrc))) {
    console.error('Error: .npmrc not found in repo root. Cannot detect current org/scope.');
    process.exit(1);
  }

  const npmrcContent = await fs.readFile(npmrc, 'utf8');
  const scopeMatch = npmrcContent.match(/^@([^:]+):registry=/m);
  if (!scopeMatch) {
    console.error('Error: could not find scope in .npmrc (expected a line like @org:registry=...)');
    process.exit(1);
  }
  const oldOrg = scopeMatch[1];

  console.log(`Detected current scope: @${oldOrg}`);
  console.log(`Updating scope -> @${newOrg}, and changeset repo -> ${newRepo}`);

  // Update .npmrc
  const newNpmrc = npmrcContent.replace(new RegExp('@' + oldOrg + ':registry=', 'g'), '@' + newOrg + ':registry=');
  await fs.writeFile(npmrc, newNpmrc, 'utf8');
  console.log('Updated .npmrc');

  // Update .changeset/config.json repo field if exists
  const changesetPath = path.join(root, '.changeset', 'config.json');
  if (await fileExists(changesetPath)) {
    const csRaw = await fs.readFile(changesetPath, 'utf8');
    let cs;
    try {
      cs = JSON.parse(csRaw);
    } catch (e) {
      console.warn('Warning: .changeset/config.json is not valid JSON; skipping repo update');
    }
    if (cs) {
      cs.repo = newRepo;
      await fs.writeFile(changesetPath, JSON.stringify(cs, null, 2) + '\n', 'utf8');
      console.log('Updated .changeset/config.json repo');
    }
  } else {
    console.log('No .changeset/config.json found; skipping changeset repo update');
  }

  // Update package.json files
  const pkgFiles = await findPackageJsonFiles(root);
  for (const p of pkgFiles) {
    const raw = await fs.readFile(p, 'utf8');
    let json;
    try {
      json = JSON.parse(raw);
    } catch (e) {
      console.warn(`Skipping non-JSON package file: ${p}`);
      continue;
    }

    let changed = false;
    // Update package name if scoped with oldOrg
    if (typeof json.name === 'string' && json.name.startsWith('@' + oldOrg + '/')) {
      json.name = '@' + newOrg + '/' + json.name.slice(oldOrg.length + 2);
      changed = true;
    }

    // helper to update dependency maps
    function replaceDeps(depMap) {
      if (!depMap) return false;
      let localChanged = false;
      for (const k of Object.keys(depMap)) {
        if (k.startsWith('@' + oldOrg + '/')) {
          const newKey = '@' + newOrg + '/' + k.slice(oldOrg.length + 2);
          depMap[newKey] = depMap[k];
          delete depMap[k];
          localChanged = true;
        }
        // also update values like "@oldOrg/pkg": "workspace:*"
        const v = depMap[k];
        if (typeof v === 'string' && v.includes('@' + oldOrg + '/')) {
          depMap[k] = v.replace(new RegExp('@' + oldOrg + '/', 'g'), '@' + newOrg + '/');
          localChanged = true;
        }
      }
      return localChanged;
    }

    if (replaceDeps(json.dependencies)) changed = true;
    if (replaceDeps(json.devDependencies)) changed = true;
    if (replaceDeps(json.peerDependencies)) changed = true;
    if (replaceDeps(json.optionalDependencies)) changed = true;

    if (changed) {
      await fs.writeFile(p, JSON.stringify(json, null, 2) + '\n', 'utf8');
      console.log(`Updated ${path.relative(root, p)}`);
    }
  }

  console.log('Done. Review changes and run `pnpm install` to refresh the lockfile.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
