import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { Radio } from '../'

const storyMetadata = {
  title: 'Radio'
}

export default storyMetadata

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
