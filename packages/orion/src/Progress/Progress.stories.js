import React from 'react'
import { number, text } from '@storybook/addon-knobs'

import { Progress } from '../'
import { sizeKnob } from '../utils/stories'

export default {
  title: 'Progress'
}

export const basic = () => (
  <Progress
    color={text('Color', 'wave-500')}
    percent={number('Percent', 50)}
    size={sizeKnob()}
  />
)
