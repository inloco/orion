import React from 'react'
import { text } from '@storybook/addon-knobs'

import screenshot from './images/screenshot.png'
import { ZoomImage } from '..'

export default {
  title: 'ZoomImage'
}

export const basic = () => (
  <ZoomImage
    src={text('src', screenshot)}
    alt="storybook-image"
    className={text('className', '')}
  />
)
