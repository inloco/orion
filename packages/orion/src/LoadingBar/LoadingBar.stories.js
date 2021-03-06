import React from 'react'
import { text } from '@storybook/addon-knobs'

import { LoadingBar } from '../'

const storyMetadata = {
  title: 'LoadingBar'
}

export default storyMetadata

export const defaultStory = () => (
  <div className="h-screen">
    <LoadingBar color={text('Color', 'robinblue-500')} />
  </div>
)

defaultStory.storyName = 'Default'
