import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

import Label from './'
import { sizeKnob } from '../utils/stories'

const storyMetadata = {
  title: 'Label'
}

export default storyMetadata

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
