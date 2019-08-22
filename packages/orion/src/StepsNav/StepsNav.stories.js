import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { StepsNav } from '../'

storiesOf('StepsNav', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <StepsNav
      stepNames={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
      currentStep={1}
    />
  ))
