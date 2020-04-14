import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { sizeKnob } from '../utils/stories'
import { Sizes } from '../utils/sizes'
import { StatusTag, Icon } from '..'

export default {
  title: 'StatusTag',
  decorators: [withKnobs]
}

export const inactive = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)
  const icon = text('Icon', 'remove_circle')

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.INACTIVE}>
      {icon && <Icon name={icon} />}
      {text('Label', 'Cancelled')}
    </StatusTag>
  )
}

export const neutral = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)
  const icon = text('Icon', 'info')

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.NEUTRAL}>
      {icon && <Icon name={icon} />}
      {text('Label', 'Waiting')}
    </StatusTag>
  )
}

export const warning = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)
  const icon = text('Icon', 'warning')

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.WARNING}>
      {icon && <Icon name={icon} />}
      {text('Label', 'Pending')}
    </StatusTag>
  )
}

export const error = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)
  const icon = text('Icon', 'error')

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.ERROR}>
      {icon && <Icon name={icon} />}
      {text('Label', 'Error')}
    </StatusTag>
  )
}

export const success = () => {
  const size = sizeKnob(Sizes.SMALL)
  const bordered = boolean('Bordered', true)
  const filled = boolean('Filled', false)
  const icon = text('Icon', 'check_circle')

  return (
    <StatusTag
      size={size}
      bordered={bordered}
      filled={filled}
      type={StatusTag.Types.SUCCESS}>
      {icon && <Icon name={icon} />}
      {text('Label', 'Running')}
    </StatusTag>
  )
}
