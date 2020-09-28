import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'

import { Button, Card } from '../'

export default {
  title: 'Card'
}

export const basic = () => {
  const header = text('Header', 'Header Title')
  const mainContent = text('Main content', 'Card content here')
  const center = boolean('Center', false)
  const disabled = boolean('Disabled', false)
  const readOnly = boolean('Read Only', false)
  const icon = text('Icon', 'home')
  return (
    <Card
      center={center}
      fluid={boolean('Fluid', false)}
      disabled={disabled}
      icon={icon}
      readOnly={readOnly}>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        {mainContent}
      </Card.Content>
    </Card>
  )
}

export const withFooter = () => {
  const center = boolean('Center', false)
  const header = text('Header', 'Header Title')
  const icon = text('Icon', 'map')
  const mainContent = text('Main content', 'Card content here')
  const extra = text('Footer', '')
  const disabled = boolean('Disabled', false)
  const readOnly = boolean('Read Only', false)
  return (
    <Card
      center={center}
      fluid={boolean('Fluid', false)}
      disabled={disabled}
      icon={icon}
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
  const center = boolean('Center', false)
  const disabled = boolean('Disabled', false)
  const icon = text('Icon', 'code')
  const readOnly = boolean('Read Only', false)
  const selected = boolean(`Selected`, false)
  const title = text('Title', 'Integrate SDK')
  return (
    <Card
      center={center}
      disabled={disabled}
      fluid={boolean('Fluid', false)}
      icon={icon}
      readOnly={readOnly}
      selectable
      selected={selected}
      withCheckbox={boolean('With Checkbox', false)}>
      <Card.Content>{title}</Card.Content>
    </Card>
  )
}
