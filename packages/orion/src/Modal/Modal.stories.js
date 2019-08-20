import React from 'react'
import { storiesOf } from '@storybook/react'
import { radios, withKnobs } from '@storybook/addon-knobs'

import { Button, Modal } from '../'

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('standard', () => {
    const size = radios(
      'Size',
      {
        Mini: 'mini',
        Tiny: 'tiny',
        Small: 'small',
        Large: 'large',
        'Full Screen': 'fullscreen'
      },
      'small'
    )
    return (
      <Modal trigger={<Button>Open Modal</Button>} closeIcon size={size}>
        <Modal.Header icon="archive" content="Modal Title" />
        <Modal.Content>
          <Modal.Description
            content="Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?"
          />
        </Modal.Content>
        <Modal.Actions>
          <Button>Cancel</Button>
          <Button primary>Yes</Button>
        </Modal.Actions>
      </Modal>
    )
  })
