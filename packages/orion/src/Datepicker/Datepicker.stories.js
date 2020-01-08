import React from 'react'
import { action } from '@storybook/addon-actions'
import { number, withKnobs } from '@storybook/addon-knobs'

import { Datepicker } from '../'

const actions = {
  onDateChange: action('onDateChange')
}

export default {
  title: 'Datepicker',
  decorators: [withKnobs]
}

export const basic = () => (
  <Datepicker numberOfMonths={number('Number of months', 1)} {...actions} />
)

export const twoMonths = () => <Datepicker numberOfMonths={2} {...actions} />

export const disabledDates = () => {
  const isDayBlocked = date => {
    const dayOfWeek = date.format('dddd')
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
  }
  return <Datepicker isDayBlocked={isDayBlocked} {...actions} />
}
