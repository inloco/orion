import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { Checkbox } from '../'

const storyMetadata = {
  title: 'Checkbox'
}

export default storyMetadata

export const regular = () => (
  <React.Fragment>
    <Checkbox
      label={boolean('No label', false) ? null : text('Label', 'Click Me')}
      defaultChecked
      indeterminate={boolean('Indeterminate', false)}
      disabled={boolean('Disabled', false)}
    />
  </React.Fragment>
)

export const multiple = () => (
  <React.Fragment>
    <Checkbox label="First" />
    <Checkbox label="Second" />
    <Checkbox label="Third" />
  </React.Fragment>
)
