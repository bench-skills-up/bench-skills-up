import React from 'react'

export function H1({ children }: { children?: React.ReactNode }) {
  return <h1 style={{ fontSize: 24, margin: 0 }}>{children}</h1>
}

export function P({ children }: { children?: React.ReactNode }) {
  return <p style={{ margin: '8px 0' }}>{children}</p>
}
