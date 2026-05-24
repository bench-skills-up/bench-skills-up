import React from 'react'
import { Badge as BadgeComponent } from '@bench-skills-up/ui-components'
import type { BadgeProps } from '@bench-skills-up/ui-components'

export const DefaultProps: BadgeProps = {
  badgeContent: 'New',
  variant: 'default',
}
export const Badge = (props: BadgeProps) => {
  return <BadgeComponent {...props} />
}

export default () => {
    return (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Badge badgeContent="New" variant="default" />
        </div>
    )
}

