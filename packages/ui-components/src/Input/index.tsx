import React from 'react'
import { InputProps } from './Input.types'
import { inputStyles } from './Input.styles'

export function Input(props: InputProps) {
  return <input {...props} style={{ ...inputStyles, ...props.style }} />
}

export type { InputProps } from './Input.types'
