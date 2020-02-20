import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, number, withKnobs } from '@storybook/addon-knobs'

import { Form, RangedDatepickerInput } from '../'
import { sizeKnob } from '../utils/stories'

const actions = {
  onChange: action('onChange')
}

export default {
  title: 'RangedDatepickerInput',
  decorators: [withKnobs]
}

export const basic = () => (
  <RangedDatepickerInput
    placeholder={text('Placeholder', 'Type here')}
    size={sizeKnob()}
    error={boolean('error', false)}
    warning={boolean('warning', false)}
    disabled={boolean('disabled', false)}
    fluid={boolean('fluid', false)}
    pickerProps={{
      numberOfMonths: number('Number of months', 1)
    }}
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
    placeholder={text('Placeholder', 'Type here')}
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
      <label htmlFor="date">
        {text('RangedDatepickerInput label', 'Date Range')}
      </label>
      <RangedDatepickerInput
        id="date"
        placeholder={text('Placeholder', 'Type here')}
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
