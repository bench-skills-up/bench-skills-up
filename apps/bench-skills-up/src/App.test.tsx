import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /bench skills up/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<App />)
    const message = screen.getByText(/welcome to the corporate onboarding demo app/i)
    expect(message).toBeInTheDocument()
  })

  it('renders the Get Started button', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /get started/i })
    expect(button).toBeInTheDocument()
  })

  it('has correct padding styles', () => {
    const { container } = render(<App />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper).toHaveStyle('padding: 24px')
  })
})
