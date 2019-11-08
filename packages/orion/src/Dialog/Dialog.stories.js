import React from 'react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

import { Button, Dialog, Icon } from '../'

export default {
  title: 'Dialog',
  decorators: [withKnobs]
}

export const standard = () => {
  return (
    <Dialog
      trigger={<Button>Open Dialog</Button>}
      warning={boolean('Warning', false)}
      danger={boolean('Danger', false)}>
      <Dialog.Header>
        <Icon name="warning" className="mb-8" />
        {text('Title', 'Dialog Title')}
      </Dialog.Header>
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
