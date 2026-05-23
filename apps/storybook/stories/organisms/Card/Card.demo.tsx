import React from 'react'
import { Card } from '@bench-skills-up/ui-components'
import { Badge } from '@bench-skills-up/ui-components'
import { H1, P } from '@bench-skills-up/ui-components'

export const CardDemo = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
    <Card>
      <div style={{ padding: '16px' }}>
        <H1>Card 1</H1>
        <P>Simple card with content</P>
      </div>
    </Card>
    <Card>
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
          <H1>Featured</H1>
          <Badge>New</Badge>
        </div>
        <P>Card with badge decoration</P>
      </div>
    </Card>
  </div>
)
