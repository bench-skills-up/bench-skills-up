import tokens from '@bench-skills-up/theme-tokens'

export const baseBadgeStyles: React.CSSProperties = {
  display: 'inline-block',
  padding: '4px 8px',
  color: '#fff',
  borderRadius: 999,
  fontSize: '12px',
  fontWeight: '500',
}

export const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    ...baseBadgeStyles,
    background: tokens.colors.primary,
  },
  success: {
    ...baseBadgeStyles,
    background: '#4caf50',
  },
  error: {
    ...baseBadgeStyles,
    background: '#d32f2f',
  },
  warning: {
    ...baseBadgeStyles,
    background: '#ff9800',
  },
  info: {
    ...baseBadgeStyles,
    background: '#2196f3',
  },
}

export const getBadgeStyle = (variant: string = 'default', customColor?: string): React.CSSProperties => {
  const style = variantStyles[variant] || variantStyles.default
  return customColor ? { ...style, background: customColor } : style
}
