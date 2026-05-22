const fs = require('fs')
const path = require('path')

function pascalCase(name) {
  return name
    .replace(/(^|[-_\s]+)([a-z])/g, (_, __, ch) => ch.toUpperCase())
}

const name = process.argv[2]
if (!name) {
  console.error('Usage: pnpm run generate-component <ComponentName>')
  process.exit(1)
}

const compName = pascalCase(name)
const componentsDir = path.join(__dirname, '..', 'packages', 'ui-components', 'src')
const filePath = path.join(componentsDir, `${compName}.tsx`)
const indexPath = path.join(componentsDir, 'index.ts')

if (!fs.existsSync(componentsDir)) {
  console.error('Components directory not found:', componentsDir)
  process.exit(1)
}

if (fs.existsSync(filePath)) {
  console.error('Component already exists:', filePath)
  process.exit(1)
}

const contents = `import React from 'react'

export interface ${compName}Props {
  children?: React.ReactNode
}

export const ${compName}: React.FC<${compName}Props> = ({ children }) => {
  return (
    <div className="${compName}">
      {children}
    </div>
  )
}

export default ${compName}
`

fs.writeFileSync(filePath, contents, { encoding: 'utf8' })

// Append export to index.ts
let index = fs.readFileSync(indexPath, 'utf8')
const exportLine = `export * from './${compName}'\n`
if (!index.includes(exportLine)) {
  index = index + exportLine
  fs.writeFileSync(indexPath, index, 'utf8')
}

console.log('Generated component:', filePath)
