import React from 'react'
import { TypographyProps } from './Typography.types'
import { h1Styles, pStyles } from './Typography.styles'

export function H1({ children }: TypographyProps) {
  return <h1 style={h1Styles}>{children}</h1>
}

export function P({ children }: TypographyProps) {
  return <p style={pStyles}>{children}</p>
}

export type { TypographyProps } from './Typography.types'
