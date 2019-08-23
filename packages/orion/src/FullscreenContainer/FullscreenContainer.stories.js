import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { FullscreenContainer } from '../'

storiesOf('FullscreenContainer', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <FullscreenContainer title="My Title">
      <div>My Content!</div>
    </FullscreenContainer>
  ))
