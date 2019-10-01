import React from 'react'
import {
  boolean,
  object,
  radios,
  text,
  withKnobs
} from '@storybook/addon-knobs'

import { Search } from '../'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { title: 'Francisco Gileno', value: 1 },
  { title: 'Rafael Nunes', value: 2 },
  { title: 'Maira Bello', value: 3 }
]

export default {
  title: 'Search',
  decorators: [withKnobs]
}

export const basic = () => {
  return (
    <Search
      placeholder={text('Placeholder', 'Search Developer')}
      results={object('Results', developerOptions)}
      size={sizeKnob()}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      warning={boolean('Warning', false)}
    />
  )
}
