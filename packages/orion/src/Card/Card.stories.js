import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'
import cx from 'classnames'

import { Button, Card, Icon } from '../'

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    const header = text('Header', 'Header Title')
    const mainContent = text('Main content', 'Card content here')
    const extra = text('Footer', '')
    return (
      <Card fluid={boolean('Fluid', false)}>
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
  })
  .add('selectable', () => {
    const title = text('Title', 'Integrate SDK')
    const selected = boolean(`Selected`, false)
    return (
      <Card
        fluid={boolean('Fluid', false)}
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
  })
