import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Button, Modal } from '../'

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('standard', () => {
    return (
      <Modal trigger={<Button>Show Modal</Button>}>
        <Modal.Header>Archival of old messages</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>We've found that you've reached your limit of messages.</p>
            <p>Older messages will be automatically archived.</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  })
  .add('basic', () => {
    return (
      <Modal trigger={<Button>Show Modal</Button>} basic>
        <Modal.Header>Archival of old messages</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>We've found that you've reached your limit of messages.</p>
            <p>Older messages will be automatically archived.</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  })
  .add('close', () => {
    return (
      <Modal trigger={<Button>Show Modal</Button>} closeIcon>
        <Modal.Header>Archival of old messages</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <p>We've found that you've reached your limit of messages.</p>
            <p>Older messages will be automatically archived.</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  })
