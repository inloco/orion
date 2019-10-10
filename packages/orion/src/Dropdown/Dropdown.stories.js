import React from 'react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

import Dropdown from './'
import { Sizes } from '../utils/sizes'
import { Directions } from '../utils/directions'
import { sizeKnob } from '../utils/stories'

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2 },
  { text: 'Maíra Bello', value: 3 }
]

export default {
  title: 'Dropdown',
  decorators: [withKnobs]
}

export const basic = () => {
  const menuOptions = [{ text: 'Account' }, { text: 'Logout' }]
  return (
    <Dropdown
      text={text('Label', 'Maira Bello')}
      options={object('Menu options', menuOptions)}
      compact={boolean('Compact', true)}
      size={sizeKnob('small')}
    />
  )
}

export const direction = () => {
  return (
    <div className="flex justify-between" style={{ width: '300px' }}>
      <Dropdown
        text={text('Left Label', 'Left menu')}
        options={object('Menu options', developerOptions)}
        compact={boolean('Compact', true)}
        size={sizeKnob('small')}
        direction={Directions.LEFT}
      />
      <Dropdown
        text={text('Right Label', 'Right menu')}
        options={object('Menu options', developerOptions)}
        compact={boolean('Compact', true)}
        size={sizeKnob('small')}
        direction={Directions.RIGHT}
      />
    </div>
  )
}

export const selection = () => {
  const icon = text('Icon', '', 'Content')
  return (
    <Dropdown
      placeholder={text('Placeholder', 'Select Developer', 'Content')}
      selection
      options={object('Options', developerOptions, 'Content')}
      icon={icon || Dropdown.ICON}
      fluid={boolean('Fluid', false, 'Size')}
      compact={boolean('Compact', false, 'Size')}
      search={boolean('Search', false, 'Type')}
      multiple={boolean('Multiple', false, 'Type')}
      inlineMenu={boolean('Inline Menu', false, 'Type')}
      size={sizeKnob(Sizes.DEFAULT, 'Size')}
      disabled={boolean('Disabled', false, 'State')}
      loading={boolean('Loading', false, 'State')}
      error={boolean('Error', false, 'State')}
      warning={boolean('Warning', false, 'State')}
    />
  )
}

export const multipleSelectionKeepingSelected = () => {
  return (
    <div style={{ width: '400px' }}>
      <Dropdown
        placeholder="Select Developer"
        selection
        icon="search"
        search
        multiple="keep"
        inlineMenu
        fluid
        options={object('Options', developerOptions)}
      />
    </div>
  )
}

multipleSelectionKeepingSelected.story = {
  name: 'Multiple Selection, Keeping Selected'
}

export const detailedItems = () => (
  <div style={{ width: '400px' }}>
    <Dropdown
      placeholder="Select Developer"
      selection
      search
      multiple="keep"
      fluid>
      <Dropdown.Menu>
        <Dropdown.Item text="Strawberry" description="Red" value="1" />
        <Dropdown.Divider />
        <Dropdown.Item text="Banana" description="Yellow" value="2" />
        <Dropdown.Item text="Banana" description="Yellow" value="3" />
      </Dropdown.Menu>
    </Dropdown>
  </div>
)
