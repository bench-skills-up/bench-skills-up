import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './index'

describe('Input Component', () => {
  it('renders an input element', () => {
    render(<Input />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('applies correct default styles', () => {
    const { container } = render(<Input />)
    const input = container.querySelector('input')
    expect(input).toHaveStyle({
      padding: '8px',
      borderRadius: '6px',
      border: '1px solid #ccc',
    })
  })

  it('accepts placeholder prop', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('accepts value prop', () => {
    render(<Input value="test" readOnly />)
    expect(screen.getByRole('textbox')).toHaveValue('test')
  })

  it('accepts and handles onChange event', async () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'a')
    expect(handleChange).toHaveBeenCalled()
  })

  it('accepts disabled prop', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  it('accepts type prop', () => {
    const { container } = render(<Input type="password" />)
    const input = container.querySelector('input')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('merges custom styles with default styles', () => {
    const { container } = render(<Input style={{ fontSize: '16px' }} />)
    const input = container.querySelector('input')
    expect(input).toHaveStyle('fontSize: 16px')
    expect(input).toHaveStyle('padding: 8px')
  })
})
