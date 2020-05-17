import React, { ReactElement } from 'react'

import { AnchorProps } from './Tour.d'

function Anchor({ className, position }: AnchorProps): ReactElement {
  const { top, left } = position

  return (
    <i
      className={className}
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`
      }}
    />
  )
}

export default Anchor
