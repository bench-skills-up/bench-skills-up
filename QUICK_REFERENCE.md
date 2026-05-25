# Quick Reference Guide

## 🏃 Quick Start

```bash
# Install and verify
pnpm install
pnpm verify

# Start development
pnpm dev

# Build for production
pnpm build
```

## 🧪 Testing Commands

```bash
# Unit tests
pnpm test                   # Run all tests
pnpm test:coverage          # With coverage report
pnpm test:watch             # Watch mode

# E2E tests
pnpm e2e                    # All browsers
pnpm e2e:ui                 # Interactive UI
pnpm e2e:debug              # Debug mode
pnpm e2e:report             # View HTML report

# Type checking
pnpm type-check             # TypeScript check
```

## 📦 Release Management

```bash
# Create & manage releases
pnpm changeset              # Create new changeset
pnpm changeset:status       # View pending changes
pnpm changeset:version      # Update versions locally
pnpm changeset:publish      # Publish to registry

# Workflow
1. Create feature branch
2. Make changes
3. Run pnpm quality:check   # Ensure passing
4. pnpm changeset            # Document change
5. Create PR
6. Merge to main
7. Auto-release (Changesets handles it)
```

## ✅ Quality Checks

```bash
# Full quality check
pnpm quality:check          # lint → type-check → test

# Individual checks
pnpm lint                   # ESLint
pnpm lint:fix               # Auto-fix
pnpm format                 # Prettier
pnpm type-check             # TypeScript
pnpm test                   # Jest tests
pnpm e2e                    # Playwright E2E

# Full verification
pnpm verify                 # install → quality:check → build
```

## 📝 Common Workflows

### Creating a New Component

```bash
pnpm generate-component

# Follow prompts for:
# - Component name
# - Component type (atom/molecule/organism)
# - Component description

# Then add tests and stories
```

### Making a Change

```bash
# 1. Create branch
git checkout -b feature/my-feature

# 2. Make changes and test
pnpm quality:check

# 3. Create changeset
pnpm changeset

# 4. Choose:
#    - Affected packages
#    - Semver type (major/minor/patch)
#    - Description

# 5. Commit
git add .
git commit -m "feat: add my feature"
git push

# 6. Create PR and merge
# Action auto-publishes on merge to main
```

### Deploying an Update

```bash
# Manual deployment (if needed)
pnpm build                  # Build all packages
pnpm changeset:publish      # Publish to npm

# Automatic deployment
# Just merge to main and Changesets handles everything!
```

## 🔍 Debugging

```bash
# Debug E2E tests
pnpm e2e:debug

# Debug tests with console logs
pnpm test --verbose

# Check TypeScript errors
pnpm type-check

# View coverage details
pnpm test:coverage          # Then open coverage/lcov-report/index.html

# See Storybook
pnpm storybook              # http://localhost:6006

# View build output
pnpm build
# Check dist/ folders in apps and packages
```

## 🚨 Troubleshooting

### Tests failing?
```bash
pnpm test:watch             # Check what's breaking
pnpm test:coverage          # See coverage gaps
```

### Type errors?
```bash
pnpm type-check             # Get detailed errors
```

### Lint issues?
```bash
pnpm lint:fix               # Auto-fix most issues
```

### E2E tests timing out?
```bash
pnpm e2e:debug              # Step through tests
# Or increase timeout in playwright.config.ts
```

### Build failing?
```bash
pnpm build                  # Check each package output
pnpm turbo run build --no-cache  # Force rebuild
```

## 📚 Documentation

- **README.md** - Project overview
- **ARCHITECTURE.md** - Detailed architecture guide
- **IMPROVEMENTS.md** - List of improvements made
- **this file** - Quick reference

## 🔗 Useful Links

- Playwright: https://playwright.dev
- Changesets: https://github.com/changesets/changesets
- Turbo: https://turbo.build
- Storybook: https://storybook.js.org
- Jest: https://jestjs.io
- TypeScript: https://www.typescriptlang.org

## 📊 Project Status

- ✅ Tests: 46 passing
- ✅ Coverage: 100% app, 83%+ components
- ✅ Linting: All passing
- ✅ Types: All passing
- ✅ Build: All successful
- ✅ E2E: Ready

---

**Happy coding! 🚀**
