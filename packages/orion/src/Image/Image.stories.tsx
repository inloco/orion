import React from 'react'
import { text, radios, withKnobs } from '@storybook/addon-knobs'

import image from '../../storyImages/computer.jpg'
import image2 from '../../storyImages/app.png'

import Image from './'

export default {
  title: 'Image',
  decorators: [withKnobs]
}

const sizeRadios = radios(
  'Size',
  {
    DEFAULT: undefined,
    MINI: 'mini',
    TINY: 'tiny',
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
    BIG: 'big',
    HUGE: 'huge',
    MASSIVE: 'massive'
  },
  'small'
)

export const defaultStory = () => {
  return (
    <>
      <Image src={text('src', image)} size={sizeRadios} allowZoom={true} />
      <Image src={image2} size={sizeRadios} allowZoom={true} />
      <Image src={text('src', image)} size={sizeRadios} allowZoom={true} />
    </>
  )
}

defaultStory.story = {
  name: 'Default'
}
