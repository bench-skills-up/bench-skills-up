import React, { useState } from 'react'
import { Input } from '@bench-skills-up/ui-components'
import { Button } from '@bench-skills-up/ui-components'
import { H1 } from '@bench-skills-up/ui-components'

export default { title: 'Organisms/Form' }

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <H1>Login</H1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: '500' }}>Email</label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="password" style={{ fontSize: '14px', fontWeight: '500' }}>Password</label>
        <Input 
          id="password" 
          type="password" 
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button onClick={() => alert('Login clicked')}>Sign In</Button>
    </form>
  )
}

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <form style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <H1>Create Account</H1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="name" style={{ fontSize: '14px', fontWeight: '500' }}>Full Name</label>
        <Input 
          id="name" 
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: '500' }}>Email</label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="password" style={{ fontSize: '14px', fontWeight: '500' }}>Password</label>
        <Input 
          id="password" 
          type="password" 
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <label htmlFor="confirm" style={{ fontSize: '14px', fontWeight: '500' }}>Confirm Password</label>
        <Input 
          id="confirm" 
          type="password" 
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={(e) => handleChange('confirmPassword', e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <Button onClick={() => alert('Cancel clicked')}>Cancel</Button>
        <Button onClick={() => alert('Create account clicked')}>Create Account</Button>
      </div>
    </form>
  )
}
