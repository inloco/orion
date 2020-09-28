import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Flag } from '../'

export default {
  title: 'Flag'
}

export const basic = () => <Flag name={text('Name', 'br')} />

basic.storyName = 'Flag'
