import React from 'react'
import { BadgeProps } from './Badge.types'
import { badgeStyles } from './Badge.styles'

export function Badge({ children }: BadgeProps) {
  return <span style={badgeStyles}>{children}</span>
}

export type { BadgeProps } from './Badge.types'
