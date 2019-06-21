import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from '../Button'
import NotificationCenter from '.'

const NotificationCenterDecorator = storyFn => (
  <>
    <NotificationCenter />
    {storyFn()}
  </>
)

storiesOf('NotificationCenter', module)
  .addDecorator(withKnobs)
  .addDecorator(NotificationCenterDecorator)
  .add('Error', () => (
    <>
      <div className="mb-16">
        <Button
          onClick={() => {
            NotificationCenter.error("Everything is wrong, isn't it?")
          }}>
          Notify Error
        </Button>
      </div>
      <div className="mb-16">
        <Button
          onClick={() => {
            NotificationCenter.success("Everything is awesome, isn't it?")
          }}>
          Notify Success
        </Button>
      </div>
      <div>
        <Button
          onClick={() => {
            NotificationCenter.warning("DON'T TOUCH IT!!!")
          }}>
          Notify Warning
        </Button>
      </div>
    </>
  ))
