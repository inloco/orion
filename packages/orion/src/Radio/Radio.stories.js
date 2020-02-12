import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'

import { Radio } from '../'

export default {
  title: 'Radio',
  decorators: [withKnobs]
}

export const regular = () => (
  <React.Fragment>
    <Radio
      label={boolean('No label', false) ? null : text('Label', 'Click Me')}
      defaultChecked
      disabled={boolean('Disabled', false)}
    />
  </React.Fragment>
)

export const multiple = () => (
  <React.Fragment>
    <Radio label="First" />
    <Radio label="Second" />
    <Radio label="Third" />
  </React.Fragment>
)
