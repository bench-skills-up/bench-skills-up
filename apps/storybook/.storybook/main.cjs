const svgr = require('vite-plugin-svgr')
const path = require('path')


const config = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-onboarding',
    '@storybook/addon-viewport'
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../public', '../../../public'],
  viteFinal: async (config) => {
    config.plugins = config.plugins ?? [];
    if (typeof svgr === 'function') {
      config.plugins.push(svgr());
    } else if (svgr.default && typeof svgr.default === 'function') {
      config.plugins.push(svgr.default());
    }
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      '@bench-skills-up/ui-components': path.resolve(__dirname, '../../../packages/ui-components/src'),
      '@bench-skills-up/theme-tokens': path.resolve(__dirname, '../../../packages/theme-tokens/src'),
    };
    config.server = config.server ?? {};
    config.server.watch = {
      ...(config.server.watch ?? {}),
      ignored: ['**/node_modules/**', '**/.git/**', '**/dist/**']
    };
    return config
  }
}

module.exports = config;
