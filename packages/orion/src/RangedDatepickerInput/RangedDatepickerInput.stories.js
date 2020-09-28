import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, number } from '@storybook/addon-knobs'

import { Form, RangedDatepickerInput } from '../'
import { sizeKnob } from '../utils/stories'

const actions = {
  onChange: action('onChange')
}

export default {
  title: 'RangedDatepickerInput'
}

export const basic = () => (
  <RangedDatepickerInput
    pickerProps={{
      numberOfMonths: number('Number of months', 1)
    }}
    startPlaceholder={text('Start placeholder', 'Start')}
    endPlaceholder={text('End placeholder', 'End')}
    size={sizeKnob()}
    error={boolean('error', false)}
    warning={boolean('warning', false)}
    disabled={boolean('disabled', false)}
    fluid={boolean('fluid', false)}
    {...actions}
  />
)

const ControlledRangedDatepickerInput = props => {
  const [value, setValue] = React.useState()
  return (
    <RangedDatepickerInput
      {...props}
      onChange={(event, { value }) => setValue(value)}
      value={value}
    />
  )
}

export const controlled = () => (
  <ControlledRangedDatepickerInput
    pickerProps={{
      numberOfMonths: number('Number of months', 1)
    }}
    startPlaceholder={text('Start placeholder', 'Start')}
    endPlaceholder={text('End placeholder', 'End')}
    size={sizeKnob()}
    error={boolean('error', false)}
    warning={boolean('warning', false)}
    disabled={boolean('disabled', false)}
    fluid={boolean('fluid', false)}
    {...actions}
  />
)

export const insideForm = () => (
  <Form>
    <Form.Field>
      <label htmlFor="date">{text('Label', 'Date Range')}</label>
      <RangedDatepickerInput
        id="date"
        pickerProps={{
          numberOfMonths: number('Number of months', 1)
        }}
        startPlaceholder={text('Start placeholder', 'Start')}
        endPlaceholder={text('End placeholder', 'End')}
        size={sizeKnob()}
        error={boolean('error', false)}
        warning={boolean('warning', false)}
        disabled={boolean('disabled', false)}
        fluid={boolean('fluid', false)}
        {...actions}
      />
    </Form.Field>
  </Form>
)
