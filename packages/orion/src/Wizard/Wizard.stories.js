import React from 'react'
import { action } from '@storybook/addon-actions'
import { array, boolean } from '@storybook/addon-knobs'

import { Button, Wizard } from '../'

const actions = {
  onStepIndexChange: action('onStepIndexChange'),
  onFinish: action('onFinish')
}

const buttons = {
  [Wizard.Buttons.CANCEL]: <Button>Cancel</Button>,
  [Wizard.Buttons.SAVE]: <Button>Save</Button>,
  [Wizard.Buttons.NEXT]: <Button>Next</Button>,
  [Wizard.Buttons.BACK]: <Button>Return</Button>,
  [Wizard.Buttons.FINISH]: <Button onClick={actions.onFinish}>Complete</Button>
}

const storyMetadata = {
  title: 'Wizard',
  excludeStories: ['actions']
}

export default storyMetadata

export const basic = () => {
  return (
    <Wizard
      steps={array('Steps', ['Step 1', 'Step 2', 'Step 3'])}
      buttons={buttons}
      {...actions}
      scrollToTopOnStepChange={boolean('ScrollToTopOnStepChange', true)}>
      <div>
        Step 1 Content
        <div className="mb-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam
          at, maxime adipisci sunt non voluptatum architecto quisquam sapiente
          eligendi natus nisi totam, incidunt, asperiores minus alias
          accusantium! Quis, aliquid.
        </div>
        <div className="mb-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam
          at, maxime adipisci sunt non voluptatum architecto quisquam sapiente
          eligendi natus nisi totam, incidunt, asperiores minus alias
          accusantium! Quis, aliquid.
        </div>
        <div className="mb-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam
          at, maxime adipisci sunt non voluptatum architecto quisquam sapiente
          eligendi natus nisi totam, incidunt, asperiores minus alias
          accusantium! Quis, aliquid.
        </div>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam
          at, maxime adipisci sunt non voluptatum architecto quisquam sapiente
          eligendi natus nisi totam, incidunt, asperiores minus alias
          accusantium! Quis, aliquid.
        </div>
      </div>
      <div>
        Step 2 Content
        <div className="mb-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam
          at, maxime adipisci sunt non voluptatum architecto quisquam sapiente
          eligendi natus nisi totam, incidunt, asperiores minus alias
          accusantium! Quis, aliquid.
        </div>
        <div className="mb-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam
          at, maxime adipisci sunt non voluptatum architecto quisquam sapiente
          eligendi natus nisi totam, incidunt, asperiores minus alias
          accusantium! Quis, aliquid.
        </div>
        <div className="mb-24">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam
          at, maxime adipisci sunt non voluptatum architecto quisquam sapiente
          eligendi natus nisi totam, incidunt, asperiores minus alias
          accusantium! Quis, aliquid.
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia quidem
          quae ex deserunt commodi dolor vel rerum optio quos sunt quibusdam
          aspernatur sequi dolorum illum totam, non, dicta voluptate odit.
        </div>
      </div>
      <div>
        Step 3 Content
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          laboriosam laudantium quam possimus esse, excepturi commodi ex cumque
          tenetur id ipsa in, est rerum sed fugit omnis incidunt provident! At!
        </div>
      </div>
    </Wizard>
  )
}
