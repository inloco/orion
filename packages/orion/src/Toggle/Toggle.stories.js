import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { Toggle } from '../'

const storyMetadata = {
  title: 'Toggle'
}

export default storyMetadata

export const regular = () => (
  <React.Fragment>
    <Toggle
      label={boolean('No label', false) ? null : text('Label', 'Click Me')}
      defaultChecked
      disabled={boolean('Disabled', false)}
    />
  </React.Fragment>
)
