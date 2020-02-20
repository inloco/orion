import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import { DatepickerInput } from '../'
import { sizeKnob } from '../utils/stories'

const actions = {
  onChange: action('onChange')
}

export default {
  title: 'DatepickerInput',
  decorators: [withKnobs]
}

export const basic = () => (
  <DatepickerInput
    placeholder={text('Placeholder', 'Type here')}
    size={sizeKnob()}
    error={boolean('error', false)}
    warning={boolean('warning', false)}
    disabled={boolean('disabled', false)}
    fluid={boolean('fluid', false)}
    {...actions}
  />
)

const ControlledDatepickerInput = props => {
  const [value, setValue] = React.useState()
  return (
    <DatepickerInput
      {...props}
      onChange={(event, { value }) => setValue(value)}
      value={value}
    />
  )
}

export const controlled = () => (
  <ControlledDatepickerInput
    placeholder={text('Placeholder', 'Type here')}
    size={sizeKnob()}
    error={boolean('error', false)}
    warning={boolean('warning', false)}
    disabled={boolean('disabled', false)}
    fluid={boolean('fluid', false)}
    {...actions}
  />
)
