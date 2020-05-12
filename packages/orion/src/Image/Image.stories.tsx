import React from 'react'
import { text, radios, withKnobs } from '@storybook/addon-knobs'

import image from '../../storyImages/computer.jpg'

import Image from './'

export default {
  title: 'Image',
  decorators: [withKnobs]
}

export const defaultStory = () => {
  return (
    <Image
      src={text('src', image)}
      size={radios(
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
      )}
    />
  )
}

defaultStory.story = {
  name: 'Default'
}
