import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Message from './'

const storyMetadata = {
  title: 'Message'
}

export default storyMetadata

export const basic = () => (
  <Message
    content={text('Content', 'Your account was created')}
    header={text('Header', 'Success')}
    error={boolean('Error', false)}
    success={boolean('Success', false)}
    warning={boolean('Warning', false)}
    info={boolean('Info', false)}
    fluid={boolean('Fluid', false)}
  />
)

export const inline = () => (
  <Message
    content={text('Content', 'Your account was created')}
    error={boolean('Error', false)}
    success={boolean('Success', false)}
    warning={boolean('Warning', false)}
    info={boolean('Info', false)}
    fluid={boolean('Fluid', false)}
  />
)

export const dismissible = () => (
  <Message
    content={text('Content', 'Your account was created')}
    header={text('Header', 'Success')}
    error={boolean('Error', false)}
    success={boolean('Success', false)}
    warning={boolean('Warning', false)}
    fluid={boolean('Fluid', false)}
    info={boolean('Info', false)}
    onDismiss={action('onDimiss')}
  />
)
