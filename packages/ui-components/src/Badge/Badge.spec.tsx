import React from 'react'
import { render, screen } from '@testing-library/react'
import { Badge } from './index'

describe('Badge Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Badge />)
    expect(container.querySelector('span')).toBeInTheDocument()
  })

  it('renders with children text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('renders with badgeContent prop', () => {
    render(<Badge badgeContent="Active" />)
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('prefers badgeContent over children', () => {
    render(<Badge badgeContent="Badge Content">Children</Badge>)
    expect(screen.getByText('Badge Content')).toBeInTheDocument()
    expect(screen.queryByText('Children')).not.toBeInTheDocument()
  })

  it('applies correct default styles', () => {
    const { container } = render(<Badge>Label</Badge>)
    const span = container.querySelector('span')
    expect(span).toHaveStyle({
      display: 'inline-block',
      padding: '4px 8px',
      color: '#fff',
      borderRadius: '999px',
    })
  })

  it('applies variant styles', () => {
    const { container } = render(<Badge variant="success">Success</Badge>)
    const span = container.querySelector('span')
    const styles = window.getComputedStyle(span!)
    expect(styles.backgroundColor).toBe('rgb(76, 175, 80)')
  })

  it('applies custom color', () => {
    const { container } = render(<Badge color="#ff0000">Custom</Badge>)
    const span = container.querySelector('span')
    const styles = window.getComputedStyle(span!)
    expect(styles.backgroundColor).toBe('rgb(255, 0, 0)')
  })

  it('hides zero value when showZero is false', () => {
    const { container } = render(<Badge badgeContent={0} showZero={false} />)
    expect(container.querySelector('span')).not.toBeInTheDocument()
  })

  it('shows zero value when showZero is true', () => {
    render(<Badge badgeContent={0} showZero={true} />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders multiple badge variants', () => {
    const { container } = render(
      <>
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </>
    )
    expect(container.querySelectorAll('span')).toHaveLength(5)
  })

  it('renders without children', () => {
    const { container } = render(<Badge />)
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
    expect(span?.textContent).toBe('')
  })
})
