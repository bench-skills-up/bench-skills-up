import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from './index'

describe('Card Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Card />)
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('renders with children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('applies correct styles', () => {
    const { container } = render(<Card />)
    const cardDiv = container.querySelector('div')
    expect(cardDiv).toHaveStyle({
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      background: '#fff',
    })
  })

  it('renders multiple children', () => {
    render(
      <Card>
        <h1>Title</h1>
        <p>Description</p>
      </Card>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders React node children', () => {
    render(
      <Card>
        <div data-testid="card-inner">
          <span>Nested content</span>
        </div>
      </Card>
    )
    expect(screen.getByTestId('card-inner')).toBeInTheDocument()
    expect(screen.getByText('Nested content')).toBeInTheDocument()
  })

  it('renders empty card without children', () => {
    const { container } = render(<Card />)
    const cardDiv = container.querySelector('div')
    expect(cardDiv).toBeInTheDocument()
    expect(cardDiv?.textContent).toBe('')
  })
})
