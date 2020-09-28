import React from 'react'
import { text } from '@storybook/addon-knobs'

import { LoadingBar } from '../'

export default {
  title: 'LoadingBar'
}

export const defaultStory = () => (
  <div className="h-screen">
    <LoadingBar color={text('Color', 'wave-500')} />
  </div>
)

defaultStory.storyName = 'Default'
