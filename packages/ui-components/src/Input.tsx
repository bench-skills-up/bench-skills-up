import React from 'react'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
}
