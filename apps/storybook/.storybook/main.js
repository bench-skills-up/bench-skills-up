export default {
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  stories: ['../stories/**/*.stories.@(tsx|ts)'],
  addons: ['@storybook/addon-links', '@storybook/addon-interactions']
}
