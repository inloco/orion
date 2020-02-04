import React from 'react'
import { text, withKnobs, boolean, radios } from '@storybook/addon-knobs'

import { InfoIcon } from '../'

export default {
  title: 'InfoIcon',
  decorators: [withKnobs]
}

export const basic = () => (
  <div className="mt-24">
    <InfoIcon content={text('Content', 'Some info text here.')} />
  </div>
)

export const customPopup = () => {
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
    'bottom left'
  )
  return (
    <div className="flex items-center justify-center h-screen">
      <InfoIcon
        popupProps={{
          hoverable: boolean('hoverable', false),
          on: text('On', 'click'),
          position
        }}
        content={text('Content', 'Some info text here.')}
      />
    </div>
  )
}
