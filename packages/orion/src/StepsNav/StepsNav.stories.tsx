import React from 'react'
import { object, number, withKnobs } from '@storybook/addon-knobs'

import { StepsNav } from '../'

export default {
  title: 'StepsNav',
  decorators: [withKnobs]
}

export const defaultStory = () => (
  <StepsNav
    steps={object('Steps', [
      { text: 'The Initial Step' },
      'This can be just a string too',
      { text: 'The Longeeeest Step', description: 'An optional description' },
      { text: 'Final Step' }
    ])}
    currentStep={number('Current Step', 1)}
  />
)

defaultStory.storyName = 'Default'
