import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Form, Button, TagsInput } from '..'
import { Sizes } from '../utils/sizes'

const storyMetadata = {
  title: 'TagsInput'
}

export default storyMetadata

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
  const selectOnBlur = boolean('selectOnBlur', false)

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
          selectOnBlur={selectOnBlur}
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
          selectOnBlur={selectOnBlur}
        />
      </Form.Field>
    </Form>
  )
}

export const Controlled = () => {
  const [value, setValue] = React.useState(['tag1', 'tag2'])

  return (
    <div className="flex items-center purple-x-8">
      <TagsInput
        placeholder={text('Placeholder', 'Type here')}
        error={boolean('error', false)}
        fluid={boolean('fluid', false)}
        selectOnBlur={boolean('selectOnBlur', true)}
        value={value || []}
        onChange={(_, { value }) => setValue(value)}
      />
      <Button onClick={() => setValue(null)}>Clear All</Button>
    </div>
  )
}
