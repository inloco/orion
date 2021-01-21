import React from 'react'
import { boolean } from '@storybook/addon-knobs'

import { Button, Dimmer } from '../'

const storyMetadata = {
  title: 'Dimmer'
}

export default storyMetadata

export const basic = () => {
  return (
    <div className="h-screen p-24">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        repudiandae a provident, temporibus doloremque voluptatibus, officia
        corporis soluta dolores porro nihil quisquam veniam! Reprehenderit,
        adipisci! Dolorum aspernatur laborum sapiente aliquid.
      </div>
      <div className="py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        repudiandae a provident, temporibus doloremque voluptatibus, officia
        corporis soluta dolores porro nihil quisquam veniam! Reprehenderit,
        adipisci! Dolorum aspernatur laborum sapiente aliquid.
      </div>
      <Button primary>Lorem Lorem</Button>
      <Dimmer
        active={boolean('Active', true)}
        inverted={boolean('Inverted', false)}
      />
    </div>
  )
}
