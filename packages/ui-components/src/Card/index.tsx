import React from 'react'
import { CardProps } from './Card.types'
import { cardStyles } from './Card.styles'

export function Card({ children }: CardProps) {
  return <div style={cardStyles}>{children}</div>
}

export type { CardProps } from './Card.types'
