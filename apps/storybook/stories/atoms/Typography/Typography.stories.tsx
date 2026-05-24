import React from 'react'
import { H1, P } from '@bench-skills-up/ui-components'

export default { title: 'Atoms/Typography' }

export const Headings = () => <H1>Heading</H1>

export const Paragraphs = () => <P>Paragraph text</P>

export const Combined = () => (
  <div>
    <H1>Main Heading</H1>
    <P>This is a paragraph with some text content.</P>
    <P>This is another paragraph showing typography combinations.</P>
  </div>
)
