import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { sizeKnob } from '../utils/stories'
import { Sizes } from '../utils/sizes'
import { StatusTag } from '..'
import { types } from './'

export default {
  title: 'StatusTag',
  decorators: [withKnobs]
}

export const cancelled = () => (
  <StatusTag size={sizeKnob(Sizes.SMALL)} type={types.CANCELLED}>
    {text('Label', 'Cancelled')}
  </StatusTag>
)

export const waiting = () => (
  <StatusTag size={sizeKnob(Sizes.SMALL)} type={types.WAITING}>
    {text('Label', 'Waiting')}
  </StatusTag>
)

export const pending = () => (
  <StatusTag size={sizeKnob(Sizes.SMALL)} type={types.PENDING}>
    {text('Label', 'Pending')}
  </StatusTag>
)

export const error = () => (
  <StatusTag size={sizeKnob(Sizes.SMALL)} type={types.ERROR}>
    {text('Label', 'Error')}
  </StatusTag>
)

export const running = () => (
  <StatusTag size={sizeKnob(Sizes.SMALL)} type={types.RUNNING}>
    {text('Label', 'Running')}
  </StatusTag>
)
