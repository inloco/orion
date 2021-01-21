import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'

import { Button, Dialog } from '../'

const storyMetadata = {
  title: 'Dialog'
}

export default storyMetadata

export const standard = () => {
  return (
    <Dialog
      trigger={<Button>Open Dialog</Button>}
      warning={boolean('Warning', false)}
      danger={boolean('Danger', false)}>
      <Dialog.Header>{text('Title', 'Dialog Title')}</Dialog.Header>
      <Dialog.Content>
        {text(
          'Content',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        )}
      </Dialog.Content>
      <Dialog.Actions>
        <Button>Cancel</Button>
        <Button primary>Continue</Button>
      </Dialog.Actions>
    </Dialog>
  )
}
