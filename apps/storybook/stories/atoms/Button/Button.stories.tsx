import React from 'react'
import { Button } from '@bench-skills-up/ui-components'

export default { title: 'Atoms/Button' }

export const Primary = () => <Button>Primary</Button>

export const States = () => (
  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
    <Button>Default</Button>
    <Button>Hover me</Button>
    <Button>Click me</Button>
  </div>
)
