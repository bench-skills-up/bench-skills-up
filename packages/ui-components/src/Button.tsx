import React from 'react'
import tokens from '@bench-skills-up/theme-tokens'

export function Button({ children }: { children?: React.ReactNode }) {
  return (
    <button style={{ background: tokens.colors.primary, color: '#fff', padding: '8px 12px', border: 'none', borderRadius: 6 }}>
      {children}
    </button>
  )
}
