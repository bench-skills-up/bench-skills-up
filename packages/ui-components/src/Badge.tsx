import React from 'react'
import tokens from '@bench-skills-up/theme-tokens'

export function Badge({ children }: { children?: React.ReactNode }) {
  return (
    <span style={{ display: 'inline-block', padding: '4px 8px', background: tokens.colors.primary, color: '#fff', borderRadius: 999 }}>
      {children}
    </span>
  )
}
