import React, { useState } from 'react'
import { Input } from '@bench-skills-up/ui-components'
import { Button } from '@bench-skills-up/ui-components'
import { H1 } from '@bench-skills-up/ui-components'

export const FormDemo = () => {
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

      <div style={{ display: 'flex', gap: '8px' }}>
        <Button>Cancel</Button>
        <Button>Sign In</Button>
      </div>
    </form>
  )
}
