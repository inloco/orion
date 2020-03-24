import React from 'react'
import { text, withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { ListInput } from '../'
import Form from '../Form'
import { Sizes } from '../utils/sizes'

export default {
  title: 'ListInput',
  decorators: [withKnobs]
}

export const basic = () => (
  <ListInput
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
        <ListInput
          id="colors"
          defaultValue={['Red', 'Yellow']}
          error={error}
          fluid={fluid}
          size={Sizes.DEFAULT}
          onChange={action('onChange')}
        />
      </Form.Field>
      <Form.Field>
        <label htmlFor="something">
          {text('Second Dropdown label', 'Something')}
        </label>
        <ListInput
          id="something"
          error={error}
          fluid={fluid}
          size={Sizes.DEFAULT}
          onChange={action('onChange')}
          placeholder="Type something"
        />
      </Form.Field>
    </Form>
  )
}
