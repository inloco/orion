import React from 'react'
import { action } from '@storybook/addon-actions'
import { object, withKnobs } from '@storybook/addon-knobs'

import appImage from '../../storyImages/app.png'
import { AppsDropdown } from '../'

const actions = {
  onChange: action('onChange')
}

export default {
  title: 'AppsDropdown',
  decorators: [withKnobs]
}

export const basic = () => {
  const options = [
    {
      text: 'Engage',
      value: 'engage',
      image: { src: appImage },
      selected: true
    },
    {
      text: 'Integrations',
      value: 'integrations',
      image: { src: appImage }
    },
    {
      text: 'Places',
      value: 'places',
      image: { src: appImage }
    }
  ]

  return (
    <div className="flex justify-center">
      <AppsDropdown options={object('Menu options', options)} {...actions} />
    </div>
  )
}
