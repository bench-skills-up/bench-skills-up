import React from 'react'
import { ButtonProps } from './Button.types'
import { buttonStyles } from './Button.styles'

export interface ButtonWithClickProps extends ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({ children, onClick }: ButtonWithClickProps) {
  return <button style={buttonStyles} onClick={onClick}>{children}</button>
}

export type { ButtonProps } from './Button.types'
