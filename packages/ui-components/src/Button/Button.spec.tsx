import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './index'

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders with children text', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('renders without children', () => {
    render(<Button />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.textContent).toBe('')
  })

  it('applies correct styles', () => {
    const { container } = render(<Button>Styled</Button>)
    const button = container.querySelector('button')
    const styles = window.getComputedStyle(button!)
    expect(styles.color).toBe('rgb(255, 255, 255)')
    expect(styles.padding).toBe('8px 12px')
    expect(button).toHaveStyle({ borderRadius: '6px' })
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    const button = screen.getByRole('button')
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders React nodes as children', () => {
    render(
      <Button>
        <span data-testid="child-span">Icon Button</span>
      </Button>
    )
    expect(screen.getByTestId('child-span')).toBeInTheDocument()
  })
})
