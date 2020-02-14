import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import TextArea from './'

export default {
  title: 'TextArea',
  decorators: [withKnobs]
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

defaultStory.story = {
  name: 'default'
}
