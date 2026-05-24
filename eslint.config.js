const js = require('@eslint/js')
const typescriptEslint = require('typescript-eslint')
const globals = require('globals')

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      '.turbo/**',
      'coverage/**',
      'storybook-static/**',
      '*.min.js',
      '.next/**',
      '.vercel/**',
    ],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: js.configs.recommended.rules,
  },
  ...typescriptEslint.configs.recommended.map(config => ({
    ...config,
    files: config.files || ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      ...config.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...config.languageOptions?.globals,
      },
    },
  })),
]
