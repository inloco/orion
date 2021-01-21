import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Flag } from '../'

const storyMetadata = {
  title: 'Flag'
}

export default storyMetadata

export const basic = () => <Flag name={text('Name', 'br')} />

basic.storyName = 'Flag'
