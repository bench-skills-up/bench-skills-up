import React from 'react'
import { Input } from '@bench-skills-up/ui-components'

export default { title: 'Atoms/Input' }

export const Default = () => <Input placeholder="Enter text" />

export const Types = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}>
    <Input placeholder="Text input" />
    <Input type="email" placeholder="Email input" />
    <Input type="password" placeholder="Password input" />
    <Input disabled placeholder="Disabled input" />
  </div>
)
