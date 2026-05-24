import React from 'react'
import { Input } from '@bench-skills-up/ui-components'

export default { title: 'Molecules/InputField' }

export const WithLabel = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '300px' }}>
    <label htmlFor="username" style={{ fontSize: '14px', fontWeight: '500' }}>Username</label>
    <Input id="username" placeholder="Enter your username" />
  </div>
)

export const WithHint = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '300px' }}>
    <label htmlFor="email" style={{ fontSize: '14px', fontWeight: '500' }}>Email</label>
    <Input id="email" type="email" placeholder="Enter your email" />
    <small style={{ color: '#666' }}>We'll never share your email.</small>
  </div>
)

export const WithError = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '300px' }}>
    <label htmlFor="password" style={{ fontSize: '14px', fontWeight: '500' }}>Password</label>
    <Input id="password" type="password" placeholder="Enter password" />
    <small style={{ color: '#d32f2f' }}>Password must be at least 8 characters.</small>
  </div>
)
