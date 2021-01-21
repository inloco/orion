import React from 'react'
import { action } from '@storybook/addon-actions'
import { object, text } from '@storybook/addon-knobs'

import MultiSelectFilter from './'
import { Menu } from '..'

const actions = {
  onApply: action('onApply'),
  onClear: action('onClear')
}

const storyMetadata = {
  title: 'MultiSelectFilter'
}

export default storyMetadata

export const basic = () => {
  const options = object('Options', [
    { text: 'Strawberry', description: 'Red', value: 1 },
    { text: 'Banana', description: 'Yellow', value: 2 },
    { text: 'Watermelon', description: 'Green', value: 3 }
  ])
  return (
    <MultiSelectFilter
      text={text('text', 'Fruits')}
      placeholder={text('Placeholder', 'Pick your fruits')}
      options={options}
      {...actions}
    />
  )
}

export const withChildren = () => {
  const options = object('Options', [
    { text: 'Strawberry', description: 'Red', value: 1 },
    { text: 'Banana', description: 'Yellow', value: 2 },
    { text: 'Watermelon', description: 'Green', value: 3 }
  ])
  const switcherOptions = [
    {
      name: 'Show Only',
      key: 'show-only'
    },
    {
      name: 'Show All Except',
      key: 'except'
    }
  ]
  return (
    <MultiSelectFilter
      text={text('text', 'Fruits')}
      placeholder={text('Placeholder', 'Pick your fruits')}
      options={options}
      {...actions}>
      <Menu
        className="mb-8"
        switcher
        items={switcherOptions}
        defaultActiveIndex={0}
      />
    </MultiSelectFilter>
  )
}
