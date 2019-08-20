import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Button, Modal, Icon, Header } from '../'

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('standard', () => {
    return (
      <Modal trigger={<Button>Open Modal</Button>} closeIcon>
        <Modal.Header icon="archive" content="Modal Title" />
        <Modal.Content>
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button>Cancel</Button>
          <Button primary>Yes</Button>
        </Modal.Actions>
      </Modal>
    )
  })
