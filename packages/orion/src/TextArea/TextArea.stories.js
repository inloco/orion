import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import TextArea from './'

export default {
  title: 'TextArea'
}

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
