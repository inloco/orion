import React from 'react'
import { storiesOf } from '@storybook/react'
import { array, number, withKnobs } from '@storybook/addon-knobs'

import { StepsNav } from '../'

storiesOf('StepsNav', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <StepsNav
      steps={array('Steps', [
        'The Initial Step',
        'A Long Step',
        'The Longeeeest Step',
        'Final Step'
      ])}
      currentStep={number('Current Step', 1)}
    />
  ))
