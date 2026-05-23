import React from 'react'
import { Card } from '@bench-skills-up/ui-components'
import { Badge } from '@bench-skills-up/ui-components'
import { H1, P } from '@bench-skills-up/ui-components'

export default { title: 'Organisms/Card' }

export const Default = () => (
  <Card>
    <div style={{ padding: '16px' }}>
      <H1>Card Title</H1>
      <P>Card content goes here with any child elements</P>
    </div>
  </Card>
)

export const WithBadge = () => (
  <Card>
    <div style={{ padding: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
        <H1>Featured Item</H1>
        <Badge>New</Badge>
      </div>
      <P>This card combines the Card organism with Badge atoms for rich content.</P>
    </div>
  </Card>
)

export const Grid = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
    {[1, 2, 3].map((i) => (
      <Card key={i}>
        <div style={{ padding: '16px' }}>
          <H1>Card {i}</H1>
          <P>Content for card {i}</P>
        </div>
      </Card>
    ))}
  </div>
)
