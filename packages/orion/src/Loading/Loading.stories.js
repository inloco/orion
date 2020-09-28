import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { Loading } from '../'
import { sizeKnob } from '../utils/stories'

export default {
  title: 'Loading'
}

export const defaultStory = () => (
  <div className="h-screen">
    <Loading size={sizeKnob()} inline={boolean('Inline', false)} />
  </div>
)

defaultStory.storyName = 'Default'
