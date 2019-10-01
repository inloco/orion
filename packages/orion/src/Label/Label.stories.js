import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'

import Label from './'
import { sizeKnob } from '../utils/stories'

export default {
  title: 'Label',
  decorators: [withKnobs]
}

export const basic = () => (
  <Label
    content={text('Text', 'Label text')}
    icon={text('Icon')}
    size={sizeKnob()}
  />
)

export const removable = () => (
  <Label
    content={text('Text', 'Label text')}
    size={sizeKnob()}
    onRemove={action('onRemove')}
  />
)
