import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { FullscreenContainer, Button } from '../'

storiesOf('FullscreenContainer', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <FullscreenContainer
        title="My Title"
        trigger={<Button>Open Container</Button>}>
        <div>My Content!</div>
      </FullscreenContainer>
    )
  })
