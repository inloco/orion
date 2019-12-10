import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { LoadingBar } from '../'

export default {
  title: 'LoadingBar',
  decorators: [withKnobs]
}

export const defaultStory = () => (
  <div className="h-screen">
    <LoadingBar color={text('Color', 'wave-500')} />
  </div>
)

defaultStory.story = {
  name: 'Default'
}
