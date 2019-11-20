import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { sizeKnob } from '../utils/stories'
import { Sizes } from '../utils/sizes'
import { StatusTag } from '..'

export default {
  title: 'StatusTag',
  decorators: [withKnobs]
}

export const inactive = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.INACTIVE}>
      {text('Label', 'Cancelled')}
    </StatusTag>
  )
}

export const neutral = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.NEUTRAL}>
      {text('Label', 'Waiting')}
    </StatusTag>
  )
}

export const warning = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.WARNING}>
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
      type={StatusTag.Types.ERROR}>
      {text('Label', 'Error')}
    </StatusTag>
  )
}

export const success = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.SUCCESS}>
      {text('Label', 'Running')}
    </StatusTag>
  )
}
