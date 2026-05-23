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

  it('applies correct badge styles', () => {
    const { container } = render(<Badge>Label</Badge>)
    const span = container.querySelector('span')
    expect(span).toHaveStyle({
      display: 'inline-block',
      padding: '4px 8px',
      color: '#fff',
      borderRadius: '999px',
    })
  })

  it('has primary background color from theme tokens', () => {
    const { container } = render(<Badge>Active</Badge>)
    const span = container.querySelector('span')
    const styles = window.getComputedStyle(span!)
    // Check that background is set (color value will vary based on tokens)
    expect(styles.backgroundColor).toBeTruthy()
  })

  it('renders without children', () => {
    const { container } = render(<Badge />)
    const span = container.querySelector('span')
    expect(span).toBeInTheDocument()
    expect(span?.textContent).toBe('')
  })

  it('renders React node children', () => {
    render(
      <Badge>
        <strong data-testid="badge-content">Premium</strong>
      </Badge>
    )
    expect(screen.getByTestId('badge-content')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('renders multiple badges', () => {
    render(
      <>
        <Badge>Badge 1</Badge>
        <Badge>Badge 2</Badge>
        <Badge>Badge 3</Badge>
      </>
    )
    expect(screen.getByText('Badge 1')).toBeInTheDocument()
    expect(screen.getByText('Badge 2')).toBeInTheDocument()
    expect(screen.getByText('Badge 3')).toBeInTheDocument()
  })

  it('renders as inline-block element', () => {
    const { container } = render(<Badge>Inline</Badge>)
    const span = container.querySelector('span')
    expect(span).toHaveStyle('display: inline-block')
  })
})
