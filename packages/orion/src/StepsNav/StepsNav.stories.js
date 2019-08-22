import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import { StepsNav } from '../'

storiesOf('StepsNav', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <StepsNav
      stepNames={[
        'The Initial Step',
        'A Long Step',
        'The Longeeeest Step',
        'Final Step'
      ]}
      currentStep={1}
    />
  ))
