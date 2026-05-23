import React from 'react'
import { Button } from '@bench-skills-up/ui-components'

export const ButtonDemo = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button>Default</Button>
    <Button>Hover me</Button>
    <Button>Click me</Button>
  </div>
)
