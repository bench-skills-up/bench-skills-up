import React from 'react'

export function Card({ children }: { children?: React.ReactNode }) {
  return (
    <div style={{ padding: 16, borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', background: '#fff' }}>
      {children}
    </div>
  )
}
