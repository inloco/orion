import React from 'react'
import { withKnobs, radios, boolean } from '@storybook/addon-knobs'

import { Placeholder } from '../'

export default {
  title: 'Placeholder',
  decorators: [withKnobs]
}

const sizeKnob = (defaultValue = 'full', groupId) =>
  radios(
    'Length',
    {
      Full: 'full',
      'Very long': 'very long',
      Long: 'long',
      Medium: 'medium',
      Short: 'short',
      'Very short': 'very short'
    },
    defaultValue,
    groupId
  )

export const defaultStory = () => {
  const fluid = boolean('Fluid', false)
  const length = sizeKnob()
  return (
    <Placeholder fluid={fluid}>
      <Placeholder.Line length={length} />
      <Placeholder.Line length={length} />
      <Placeholder.Line length={length} />
      <Placeholder.Line length={length} />
    </Placeholder>
  )
}

defaultStory.story = {
  name: 'default'
}
