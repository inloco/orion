import React from 'react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'
import cx from 'classnames'

import { Button, Card, Icon } from '../'

export default {
  title: 'Card',
  decorators: [withKnobs]
}

export const basic = () => {
  const header = text('Header', 'Header Title')
  const mainContent = text('Main content', 'Card content here')
  const extra = text('Footer', '')
  const disabled = boolean('Disabled', false)
  const readOnly = boolean('Read Only', false)
  return (
    <Card
      fluid={boolean('Fluid', false)}
      disabled={disabled}
      readOnly={readOnly}>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        {mainContent}
      </Card.Content>
      <Card.Content extra>
        {extra || (
          <React.Fragment>
            Footer content here
            <Button className="ml-16" ghost>
              Button Label
            </Button>
          </React.Fragment>
        )}
      </Card.Content>
    </Card>
  )
}

export const selectable = () => {
  const title = text('Title', 'Integrate SDK')
  const selected = boolean(`Selected`, false)
  const disabled = boolean('Disabled', false)
  const readOnly = boolean('Read Only', false)
  return (
    <Card
      fluid={boolean('Fluid', false)}
      disabled={disabled}
      readOnly={readOnly}
      selectable
      selected={selected}
      withCheckbox={boolean('With Checkbox', false)}>
      <Card.Content className="flex flex-col items-center">
        <Icon
          name="code"
          className={cx('text-gray-700', { 'text-wave-500': selected })}
        />
        <div className="mt-8">{title}</div>
      </Card.Content>
    </Card>
  )
}
