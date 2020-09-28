import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { Toggle } from '../'

export default {
  title: 'Toggle'
}

export const regular = () => (
  <React.Fragment>
    <Toggle
      label={boolean('No label', false) ? null : text('Label', 'Click Me')}
      defaultChecked
      disabled={boolean('Disabled', false)}
    />
  </React.Fragment>
)
