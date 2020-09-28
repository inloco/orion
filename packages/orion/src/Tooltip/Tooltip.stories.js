import React from 'react'
import { radios, text } from '@storybook/addon-knobs'

import { Button, Tooltip } from '../'

export default {
  title: 'Tooltip'
}

export const basic = () => (
  <Tooltip
    trigger={<Button content="Hover here" />}
    content={text('Content', 'Hello Tooltip!')}
  />
)

export const positions = () => {
  const position = radios(
    'Positon',
    {
      'Top Left': 'top left',
      'Top Center': 'top center',
      'Top Right': 'top right',
      'Center Left': 'left center',
      'Center Right': 'right center',
      'Bottom Left': 'bottom left',
      'Bottom Center': 'bottom center',
      'Bottom Right': 'bottom right'
    },
    'left center'
  )
  return (
    <div className="flex items-center justify-center h-screen">
      <Tooltip
        trigger={<Button content="Hover here" />}
        content={text('Content', 'Hello Tooltip!')}
        position={position}
      />
    </div>
  )
}
