import React from 'react'
import '../.storybook/preview.css'
import tokens from '@bench-skills-up/theme-tokens'

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'default',
    toolbar: { icon: 'paintbrush' }
  }
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const style: React.CSSProperties = {
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    padding: 20,
    background: '#f6f8fa',
    ['--color-primary' as any]: tokens.colors.primary
  }
  return <div style={style as any}>{children}</div>
}

export const decorators = [Story => <ThemeWrapper><Story /></ThemeWrapper>]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } }
}
