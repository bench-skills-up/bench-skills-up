import React from 'react'
import { Input } from '@bench-skills-up/ui-components'

export const InputFieldDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '300px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor="username" style={{ fontSize: '14px', fontWeight: '500' }}>Username</label>
      <Input id="username" placeholder="Enter your username" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <label htmlFor="email" style={{ fontSize: '14px', fontWeight: '500' }}>Email</label>
      <Input id="email" type="email" placeholder="Enter your email" />
      <small style={{ color: '#666' }}>We'll never share your email.</small>
    </div>
  </div>
)
