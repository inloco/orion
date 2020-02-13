import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'

import { Toggle } from '../'

export default {
  title: 'Toggle',
  decorators: [withKnobs]
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
