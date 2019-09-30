import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { array, withKnobs } from '@storybook/addon-knobs'

import { Button, Wizard } from '../'

export const actions = {
  onStepIndexChange: action('onStepIndexChange'),
  onFinish: action('onFinish')
}

const buttons = {
  [Wizard.Buttons.NEXT]: <Button>Next</Button>,
  [Wizard.Buttons.BACK]: <Button>Return</Button>,
  [Wizard.Buttons.FINISH]: <Button onClick={actions.onFinish}>Complete</Button>
}

storiesOf('Wizard', module)
  .addDecorator(withKnobs)
  .add('basic', () => {
    return (
      <Wizard
        steps={array('Steps', ['Step 1', 'Step 2', 'Step 3'])}
        buttons={buttons}
        {...actions}>
        <div>
          Step 1 Content
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
            veniam at, maxime adipisci sunt non voluptatum architecto quisquam
            sapiente eligendi natus nisi totam, incidunt, asperiores minus alias
            accusantium! Quis, aliquid.
          </div>
        </div>
        <div>
          Step 2 Content
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
            quidem quae ex deserunt commodi dolor vel rerum optio quos sunt
            quibusdam aspernatur sequi dolorum illum totam, non, dicta voluptate
            odit.
          </div>
        </div>
        <div>
          Step 3 Content
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
            laboriosam laudantium quam possimus esse, excepturi commodi ex
            cumque tenetur id ipsa in, est rerum sed fugit omnis incidunt
            provident! At!
          </div>
        </div>
      </Wizard>
    )
  })
