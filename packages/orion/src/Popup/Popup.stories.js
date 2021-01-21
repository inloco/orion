import React from 'react'
import { text, optionsKnob, radios } from '@storybook/addon-knobs'

import { Button, Popup } from '../'
import { sizeKnob } from '../utils/stories'

const onKnob = () =>
  optionsKnob(
    'On',
    { hover: 'hover', click: 'click', focus: 'focus' },
    'hover',
    {
      display: 'inline-radio'
    }
  )

const storyMetadata = {
  title: 'Popup'
}

export default storyMetadata

export const basic = () => (
  <Popup
    basic
    trigger={<Button content="Open" />}
    content={text('Content', 'Hello Popup!')}
    on={onKnob()}
    size={sizeKnob()}
  />
)

export const pointing = () => (
  <Popup
    trigger={<Button content="Hello" />}
    content={text('Content', 'Hello Popup!')}
    on={onKnob()}
    size={sizeKnob()}
  />
)

export const pointingPositions = () => {
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
      <Popup
        trigger={<Button content="Hello" />}
        content={text('Content', 'Hello Popup!')}
        position={position}
        on={onKnob()}
        size={sizeKnob()}
      />
    </div>
  )
}

pointingPositions.storyName = 'Pointing - Positions'
