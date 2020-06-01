import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import screenshot from './images/screenshot.png'
import { ZoomImage } from '..'

export default {
  title: 'ZoomImage',
  decorators: [withKnobs]
}

export const basic = () => (
  <ZoomImage
    src={text('src', screenshot)}
    alt="storybook-image"
    className={text('className', '')}
  />
)
