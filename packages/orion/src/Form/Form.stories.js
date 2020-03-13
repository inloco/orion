import React from 'react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Button, Checkbox, DatepickerInput, Input, Dropdown, Form } from '../'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maira Bello', value: 3 }
]

export default {
  title: 'Form',
  decorators: [withKnobs]
}

export const subcomponents = () => (
  <Form>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="fullName">{text('Input label', 'Full Name')}</label>
      <Input
        fluid={boolean('Fluid', false)}
        id="fullName"
        placeholder={text('Input placeholder', 'Enter your full name')}
        size={sizeKnob()}
        warning={boolean('Warning', false)}
        error={boolean('Error', false)}
        onChange={action('onChange')}
      />
    </Form.Field>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="buddy">{text('Dropdown label', 'Buddy')}</label>
      <Dropdown
        selection
        id="buddy"
        fluid={boolean('Fluid', false)}
        placeholder={text('Dropdown placeholder', 'Choose your buddy')}
        options={object('Dropdown options', developerOptions)}
        warning={boolean('Warning', false)}
        error={boolean('Error', false)}
        size={sizeKnob()}
      />
    </Form.Field>
    <Form.Field message={text('Message', '')}>
      <label htmlFor="date">{text('DatepickerInput label', 'Date')}</label>
      <DatepickerInput
        id="date"
        fluid={boolean('Fluid', false)}
        message={text('Message', '')}
        placeholder={text('Date picker placeholder', 'Choose a date')}
        warning={boolean('Warning', false)}
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

export const dropdowns = () => {
  const label = text('Dropdown label', 'Buddy')
  const fluid = boolean('Fluid', false)
  const placeholder = text('Dropdown placeholder', 'Choose your buddy')
  const options = object('Dropdown options', developerOptions)
  const warning = boolean('Warning', false)
  const error = boolean('Error', false)
  const size = sizeKnob()

  return (
    <Form>
      <Form.Dropdown
        selection
        label={label}
        fluid={fluid}
        placeholder={placeholder}
        options={options}
        warning={warning}
        error={error}
        size={size}
        defaultValue={developerOptions[1].value}
      />
      <Form.Dropdown
        selection
        label={label}
        fluid={fluid}
        placeholder={placeholder}
        options={options}
        warning={warning}
        error={error}
        size={size}
        value={developerOptions[1].value}
      />
      <Form.Dropdown
        selection
        label={label}
        fluid={fluid}
        placeholder={placeholder}
        options={options}
        warning={warning}
        error={error}
        size={size}
      />
    </Form>
  )
}
