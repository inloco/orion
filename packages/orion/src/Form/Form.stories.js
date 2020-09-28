import React from 'react'
import { boolean, object, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Button, Checkbox, DatepickerInput, Input, Dropdown, Form } from '../'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

export default {
  title: 'Form'
}

export const subcomponents = () => (
  <Form>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="fullName">{text('Label', 'Full Name', 'Input')}</label>
      <Input
        fluid={boolean('Fluid', false)}
        id="fullName"
        placeholder={text('Placeholder', 'Enter your full name', 'Input')}
        size={sizeKnob()}
        warning={boolean('Warning', false)}
        error={boolean('Error', false)}
        onChange={action('onChange')}
      />
    </Form.Field>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="buddy">{text('Label', 'Buddy', 'Dropdown')}</label>
      <Dropdown
        selection
        id="buddy"
        fluid={boolean('Fluid', false)}
        search={boolean('Search', false, 'Dropdown')}
        placeholder={text('Placeholder', 'Choose your buddy', 'Dropdown')}
        options={object('Options', developerOptions, 'Dropdown')}
        warning={boolean('Warning', false)}
        error={boolean('Error', false)}
        size={sizeKnob()}
      />
    </Form.Field>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="date">{text('Label', 'Date', 'Datepicker')}</label>
      <DatepickerInput
        id="date"
        fluid={boolean('Fluid', false)}
        message={text('Message', '')}
        placeholder={text('Placeholder', 'Choose a date', 'Datepicker')}
        warning={boolean('Warning', false)}
        error={boolean('Error', false)}
        size={sizeKnob()}
      />
    </Form.Field>
    <Form.Field message={text('Message', '')}>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit" primary>
      Submit
    </Button>
  </Form>
)

export const formShorthands = () => (
  <Form>
    <Form.Input
      fluid={boolean('Fluid', false)}
      id="fullname"
      label={text('Input label', 'Full Name')}
      message={text('Message', '')}
      placeholder={text('Input placeholder', 'Enter your full name')}
      size={sizeKnob()}
      warning={boolean('Warning', false)}
      onChange={action('onChange')}
    />
    <Form.Dropdown
      selection
      fluid={boolean('Fluid', false)}
      id="buddy"
      label={text('Dropdown label', 'Buddy')}
      message={text('Message', '')}
      placeholder={text('Dropdown placeholder', 'Choose your buddy')}
      options={object('Dropdown options', developerOptions)}
      warning={boolean('Warning', false)}
      size={sizeKnob()}
    />
    <Form.Field
      control={DatepickerInput}
      fluid={boolean('Fluid', false)}
      label={text('Date picker label', 'Date')}
      message={text('Message', '')}
      placeholder={text('Date picker placeholder', 'Choose a date')}
      warning={boolean('Warning', false)}
    />
    <Form.Checkbox
      label="I agree to the Terms and Conditions"
      message={text('Message', '')}
    />
    <Button type="submit" primary>
      Submit
    </Button>
  </Form>
)

export const checkboxes = () => {
  return (
    <Form>
      <Form.Group inline={boolean('Inline', false)}>
        <label>Job</label>
        <Form.Checkbox label="Backend Engineer" />
        <Form.Checkbox label="Frontend Engineer" />
        <Form.Checkbox label="Mobile Engineer" />
      </Form.Group>
    </Form>
  )
}
