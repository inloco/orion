import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Message from './'

storiesOf('Message', module)
  .addDecorator(withKnobs)
  .add('Basic', () => (
    <Message
      content={text('Content', 'Your account was created')}
      header={text('Header', 'Success')}
      error={boolean('Error', false)}
      success={boolean('Success', false)}
      warning={boolean('Warning', false)}
      fluid={boolean('Fluid', false)}
    />
  ))
  .add('Inline', () => (
    <Message
      content={text('Content', 'Your account was created')}
      error={boolean('Error', false)}
      success={boolean('Success', false)}
      warning={boolean('Warning', false)}
      fluid={boolean('Fluid', false)}
    />
  ))
  .add('Dismissible', () => (
    <Message
      content={text('Content', 'Your account was created')}
      header={text('Header', 'Success')}
      error={boolean('Error', false)}
      success={boolean('Success', false)}
      warning={boolean('Warning', false)}
      fluid={boolean('Fluid', false)}
      onDismiss={action('onDimiss')}
    />
  ))
