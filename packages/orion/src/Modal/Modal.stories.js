import React from 'react'
import { text } from '@storybook/addon-knobs'

import { Button, Modal } from '../'

export default {
  title: 'Modal'
}

export const standard = () => {
  return (
    <Modal trigger={<Button>Open Modal</Button>} closeIcon>
      <Modal.Header content={text('Title', 'Modal Title')} />
      <Modal.Content>
        {text(
          'Content',
          'Your inbox is getting full, would you like us to enable automatic archiving of old messages?'
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button>Cancel</Button>
        <Button primary>Yes</Button>
      </Modal.Actions>
    </Modal>
  )
}

export const scrolling = () => {
  return (
    <Modal trigger={<Button>Open Long Modal</Button>} closeIcon>
      <Modal.Header content={text('Title', 'Modal Title')} />
      <Modal.Content>
        <div className="my-64">A very long modal content</div>
        <div className="my-64">A very loong modal content</div>
        <div className="my-64">A very looong modal content</div>
        <div className="my-64">A very loooong modal content</div>
        <div className="my-64">A very looooong modal content</div>
        <div className="my-64">A very loooooong modal content</div>
        <div className="my-64">A very looooooong modal content</div>
        <div className="my-64">A very loooooooong modal content</div>
        <div className="my-64">A very looooooooong modal content</div>
        <div className="my-64">A very loooooooooong modal content</div>
      </Modal.Content>
      <Modal.Actions>
        <Button>Cancel</Button>
        <Button primary>Yes</Button>
      </Modal.Actions>
    </Modal>
  )
}
