import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { Loading } from '../'
import { sizeKnob } from '../utils/stories'

const storyMetadata = {
  title: 'Loading'
}

export default storyMetadata

export const defaultStory = () => (
  <div className="h-screen">
    <Loading size={sizeKnob()} inline={boolean('Inline', false)} />
  </div>
)

defaultStory.storyName = 'Default'
