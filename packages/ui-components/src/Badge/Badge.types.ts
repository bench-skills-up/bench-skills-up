import React from 'react'

export type BadgeVariant = 'default' | 'success' | 'error' | 'warning' | 'info'

export interface BadgeProps {
  children?: React.ReactNode
  badgeContent?: React.ReactNode
  variant?: BadgeVariant
  color?: string
  showZero?: boolean
}
