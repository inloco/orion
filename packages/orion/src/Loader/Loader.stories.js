import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import { Loader } from '../'

export default {
  title: 'Loader',
  decorators: [withKnobs]
}

export const basic = () => <Loader />

export const indeterminate = () => <Loader indeterminate />
