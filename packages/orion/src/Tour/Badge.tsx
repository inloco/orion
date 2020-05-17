import React, { ReactElement } from 'react'

import { BadgeProps } from './Tour.d'

function Badge({ position }: BadgeProps): ReactElement | null {
  if (!position) return null

  const { top, left } = position

  return (
    <i
      className="orion-tour-badge"
      style={{
        top: `${top}px`,
        left: `${left}px`
      }}
    />
  )
}

export default Badge
