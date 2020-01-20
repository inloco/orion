import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { Slider } from '..'

export default {
  title: 'Slider',
  decorators: [withKnobs]
}

export const basic = () => {
  return <Slider value={30} />
}

export const MinMaxAndStep = () => {
  return (
    <Slider
      min={number('Min', 10)}
      max={number('Max', 50)}
      step={number('Step', 5)}
      value={number('Value', 30)}
      labelsMask={value => 'R$ ' + value}
    />
  )
}
