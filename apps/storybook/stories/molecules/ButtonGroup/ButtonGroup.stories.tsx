import React from 'react'
import { Button } from '@bench-skills-up/ui-components'

export default { title: 'Molecules/ButtonGroup' }

export const Horizontal = () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Button>Cancel</Button>
    <Button>Save</Button>
  </div>
)

export const Vertical = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '200px' }}>
    <Button>Edit</Button>
    <Button>Delete</Button>
    <Button>Archive</Button>
  </div>
)

export const ActionBar = () => (
  <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
    <Button>Discard</Button>
    <div style={{ display: 'flex', gap: '8px' }}>
      <Button>Draft</Button>
      <Button>Publish</Button>
    </div>
  </div>
)
