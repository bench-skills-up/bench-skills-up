
import type { StorybookConfig } from '@storybook/react-vite'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
    '@storybook/addon-a11y',
    '@storybook/addon-theme',
    '@storybook/addon-coverage',
    '@storybook/addon-viewport'
  ],
  framework: '@storybook/react-vite',
  staticDirs: ['../../../public'],
  viteFinal: async (config) => {
    config.plugins = config.plugins ?? [];
    config.plugins.push(svgr());
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string> ?? {}),
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

export default config;
