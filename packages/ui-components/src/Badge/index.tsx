import React from 'react'
import { BadgeProps } from './Badge.types'
import { getBadgeStyle } from './Badge.styles'

export function Badge({ 
  children, 
  badgeContent, 
  variant = 'default',
  color,
  showZero = true 
}: BadgeProps) {
  const content = badgeContent !== undefined ? badgeContent : children
  
  // Don't show badge if content is 0 and showZero is false
  if (content === 0 && !showZero) {
    return null
  }

  return <span style={getBadgeStyle(variant, color)}>{content}</span>
}

export type { BadgeProps } from './Badge.types'
