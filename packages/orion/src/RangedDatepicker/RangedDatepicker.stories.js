import moment from 'moment'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { number, text } from '@storybook/addon-knobs'

import { RangedDatepicker } from '../'

const actions = {
  onDatesChange: action('onDatesChange')
}

export default {
  title: 'RangedDatepicker'
}

export const basic = () => {
  const startDate = text('Start Date') || null
  const endDate = text('End Date') || null
  return (
    <RangedDatepicker
      numberOfMonths={number('Number of months', 1)}
      dates={startDate || endDate ? { startDate, endDate } : null}
      {...actions}
    />
  )
}

export const twoMonths = () => {
  return <RangedDatepicker numberOfMonths={2} {...actions} />
}

export const disabledMonths = () => {
  return (
    <RangedDatepicker
      minDate={moment().subtract(2, 'months')}
      maxDate={moment().add(2, 'months')}
    />
  )
}

export const disabledDates = () => {
  const isOutsideRange = date => {
    const dayOfWeek = date.format('dddd')
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday'
  }
  return <RangedDatepicker isOutsideRange={isOutsideRange} {...actions} />
}
