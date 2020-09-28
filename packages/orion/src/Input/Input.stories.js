import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import Input from './'
import { sizeKnob } from '../utils/stories'

export default {
  title: 'Input'
}

export const defaultStory = () => {
  return (
    <Input
      placeholder={text('Placeholder', 'Type here')}
      size={sizeKnob()}
      error={boolean('error', false)}
      warning={boolean('warning', false)}
      disabled={boolean('disabled', false)}
      fluid={boolean('fluid', false)}
      icon={text('Icon')}
    />
  )
}

defaultStory.storyName = 'default'

export const labeled = () => {
  return (
    <Input
      label={text('Label', 'https://')}
      placeholder={text('Placeholder', 'Type an URL')}
      size={sizeKnob()}
      error={boolean('error', false)}
      warning={boolean('warning', false)}
      disabled={boolean('disabled', false)}
      fluid={boolean('fluid', false)}
      icon={text('Icon')}
    />
  )
}
