import React from 'react'
import { action } from '@storybook/addon-actions'
import { object, text, withKnobs } from '@storybook/addon-knobs'

import MultiSelectFilter from './'

const actions = {
  onApply: action('onApply'),
  onClear: action('onClear')
}

export default {
  title: 'MultiSelectFilter',
  decorators: [withKnobs]
}

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
