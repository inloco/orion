import React from 'react'
import { withKnobs, number } from '@storybook/addon-knobs'

import { Slider } from '..'
import './Slider.stories.css'

export default {
  title: 'Slider',
  decorators: [withKnobs]
}

export const basic = () => {
  return <Slider />
}

export const MinMaxAndStep = () => {
  return (
    <Slider
      min={number('Min', 10)}
      max={number('Max', 50)}
      step={number('Step', 5)}
      labelsMask={value => 'R$ ' + value}
    />
  )
}

export const CustomTrackColor = () => {
  return <Slider className="custom-slider" />
}
