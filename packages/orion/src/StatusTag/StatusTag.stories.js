import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { sizeKnob } from '../utils/stories'
import { Sizes } from '../utils/sizes'
import { StatusTag } from '..'
import { types } from './'

export default {
  title: 'StatusTag',
  decorators: [withKnobs]
}

export const cancelled = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={types.CANCELLED}>
      {text('Label', 'Cancelled')}
    </StatusTag>
  )
}

export const waiting = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={types.WAITING}>
      {text('Label', 'Waiting')}
    </StatusTag>
  )
}

export const pending = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={types.PENDING}>
      {text('Label', 'Pending')}
    </StatusTag>
  )
}

export const error = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={types.ERROR}>
      {text('Label', 'Error')}
    </StatusTag>
  )
}

export const running = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={types.RUNNING}>
      {text('Label', 'Running')}
    </StatusTag>
  )
}
