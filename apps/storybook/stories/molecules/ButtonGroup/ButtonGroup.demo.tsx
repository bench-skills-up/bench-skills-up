import React from 'react'
import { Button } from '@bench-skills-up/ui-components'

export const ButtonGroupDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button>Cancel</Button>
      <Button>Save</Button>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '200px' }}>
      <Button>Edit</Button>
      <Button>Delete</Button>
      <Button>Archive</Button>
    </div>
  </div>
)
