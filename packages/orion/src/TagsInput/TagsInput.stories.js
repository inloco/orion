import React from 'react'
import { text, withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Form, TagsInput } from '..'
import { Sizes } from '../utils/sizes'

export default {
  title: 'TagsInput',
  decorators: [withKnobs]
}

export const basic = () => (
  <TagsInput
    placeholder={text('Placeholder', 'Type here')}
    error={boolean('error', false)}
    fluid={boolean('fluid', false)}
  />
)

export const insideForm = () => {
  const error = boolean('error', false)
  const fluid = boolean('fluid', true)

  return (
    <Form>
      <Form.Field>
        <label htmlFor="colors">{text('Dropdown label', 'Colors')}</label>
        <TagsInput
          id="colors"
          defaultValue={['Red', 'Yellow']}
          error={error}
          fluid={fluid}
          size={Sizes.DEFAULT}
          onChange={action('onChange')}
          onSearchChange={action('onSearchChange')}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="something">
          {text('Second Dropdown label', 'Something')}
        </label>
        <TagsInput
          id="something"
          error={error}
          fluid={fluid}
          size={Sizes.DEFAULT}
          onChange={action('onChange')}
          onSearchChange={action('onSearchChange')}
          placeholder="Type something"
        />
      </Form.Field>
    </Form>
  )
}
