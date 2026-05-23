import React from 'react'
import { render, screen } from '@testing-library/react'
import { H1, P } from './index'

describe('Typography Components', () => {
  describe('H1', () => {
    it('renders h1 element', () => {
      render(<H1>Heading</H1>)
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    })

    it('renders with text content', () => {
      render(<H1>Main Title</H1>)
      expect(screen.getByText('Main Title')).toBeInTheDocument()
    })

    it('applies correct h1 styles', () => {
      const { container } = render(<H1>Styled H1</H1>)
      const h1 = container.querySelector('h1')
      expect(h1).toHaveStyle({
        fontSize: '24px',
        margin: '0px',
      })
    })

    it('renders React node children', () => {
      render(
        <H1>
          <span data-testid="h1-child">Bold Title</span>
        </H1>
      )
      expect(screen.getByTestId('h1-child')).toBeInTheDocument()
    })

    it('renders without children', () => {
      const { container } = render(<H1 />)
      const h1 = container.querySelector('h1')
      expect(h1).toBeInTheDocument()
      expect(h1?.textContent).toBe('')
    })
  })

  describe('P', () => {
    it('renders paragraph element', () => {
      render(<P>Paragraph text</P>)
      expect(screen.getByText('Paragraph text')).toBeInTheDocument()
    })

    it('applies correct p styles', () => {
      const { container } = render(<P>Styled P</P>)
      const p = container.querySelector('p')
      expect(p).toHaveStyle({
        margin: '8px 0',
      })
    })

    it('renders with text content', () => {
      render(<P>This is a paragraph</P>)
      expect(screen.getByText('This is a paragraph')).toBeInTheDocument()
    })

    it('renders React node children', () => {
      render(
        <P>
          <em data-testid="p-child">Emphasized text</em>
        </P>
      )
      expect(screen.getByTestId('p-child')).toBeInTheDocument()
    })

    it('renders without children', () => {
      const { container } = render(<P />)
      const p = container.querySelector('p')
      expect(p).toBeInTheDocument()
      expect(p?.textContent).toBe('')
    })

    it('renders multiple paragraphs', () => {
      render(
        <>
          <P>First paragraph</P>
          <P>Second paragraph</P>
        </>
      )
      expect(screen.getByText('First paragraph')).toBeInTheDocument()
      expect(screen.getByText('Second paragraph')).toBeInTheDocument()
    })
  })
})
