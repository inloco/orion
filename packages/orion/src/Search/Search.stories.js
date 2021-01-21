import React from 'react'
import { boolean, object, text } from '@storybook/addon-knobs'

import { Search } from '../'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { title: 'Francisco Gileno', value: 1 },
  {
    title: 'Rafael Nunes',
    description: 'This item has a description',
    value: 2
  },
  { title: 'Maira Bello', value: 3 }
]

const storyMetadata = {
  title: 'Search'
}

export default storyMetadata

export const basic = () => {
  return (
    <Search
      placeholder={text('Placeholder', 'Search Developer')}
      results={object('Results', developerOptions)}
      size={sizeKnob()}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      warning={boolean('Warning', false)}
      loading={boolean('Loading', false)}
      fluid={boolean('Fluid', false)}
    />
  )
}
