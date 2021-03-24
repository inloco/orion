import React from 'react'
import { number, text } from '@storybook/addon-knobs'

import { Progress } from '../'
import { sizeKnob } from '../utils/stories'

const storyMetadata = {
  title: 'Progress'
}

export default storyMetadata

export const basic = () => (
  <Progress
    color={text('Color', 'robinblue-500')}
    percent={number('Percent', 50)}
    size={sizeKnob()}
  />
)
