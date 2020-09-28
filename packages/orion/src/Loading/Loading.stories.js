import React from 'react'
import { boolean, withKnobs } from '@storybook/addon-knobs'

import { Loading } from '../'
import { sizeKnob } from '../utils/stories'

export default {
  title: 'Loading',
  decorators: [withKnobs]
}

export const defaultStory = () => (
  <div className="h-screen">
    <Loading size={sizeKnob()} inline={boolean('Inline', false)} />
  </div>
)

defaultStory.storyName = 'Default'
