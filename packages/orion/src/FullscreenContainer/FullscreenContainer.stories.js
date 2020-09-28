import React from 'react'
import { text } from '@storybook/addon-knobs'

import { FullscreenContainer, Button } from '../'

export default {
  title: 'FullscreenContainer'
}

export const defaultStory = () => {
  return (
    <FullscreenContainer
      title={text('Title', 'My Title')}
      trigger={<Button>Open Container</Button>}>
      <div className="text-center">{text('Content', 'My Content!')}</div>
    </FullscreenContainer>
  )
}

defaultStory.storyName = 'Default'
