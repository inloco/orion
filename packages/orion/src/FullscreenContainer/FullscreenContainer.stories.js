import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { FullscreenContainer, Button } from '../'

storiesOf('FullscreenContainer', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <FullscreenContainer
        title={text('Title', 'My Title')}
        trigger={<Button>Open Container</Button>}>
        <div className="text-center">{text('Content', 'My Content!')}</div>
      </FullscreenContainer>
    )
  })
