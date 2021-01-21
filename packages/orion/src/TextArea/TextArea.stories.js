import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import TextArea from './'

const storyMetadata = {
  title: 'TextArea'
}

export default storyMetadata

export const defaultStory = () => {
  return (
    <TextArea
      placeholder={text('Placeholder', 'Type here')}
      fluid={boolean('fluid', false)}
      error={boolean('error', false)}
      warning={boolean('warning', false)}
      disabled={boolean('disabled', false)}
    />
  )
}

defaultStory.storyName = 'default'
