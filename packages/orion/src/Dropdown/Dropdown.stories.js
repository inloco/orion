import _ from 'lodash'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, object, text } from '@storybook/addon-knobs'

import appImage from '../../storyImages/app.png'

import Dropdown from './'
import { Sizes } from '../utils/sizes'
import { Directions } from '../utils/directions'
import { sizeKnob } from '../utils/stories'

const actions = {
  onChange: action('onChange')
}

const developerOptions = [
  { text: 'Francisco Gileno', value: 1 },
  { text: 'Rafael Nunes', value: 2, disabled: true },
  { text: 'Maíra Bello', value: 3, disabled: true }
]

export default {
  title: 'Dropdown'
}

export const basic = () => {
  const menuOptions = [
    { text: 'Account', value: 1 },
    { text: 'Logout', value: 2 }
  ]
  return (
    <Dropdown
      text={text('Label', 'Maira Bello')}
      options={object('Menu options', menuOptions)}
      compact={boolean('Compact', true)}
      size={sizeKnob('small')}
      {...actions}
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
        {...actions}
      />
      <Dropdown
        text={text('Right Label', 'Right menu')}
        options={object('Menu options', developerOptions)}
        compact={boolean('Compact', true)}
        size={sizeKnob('small')}
        direction={Directions.RIGHT}
        {...actions}
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
      noSelectedLabels={boolean('No Selected Labels', false, 'Type')}
      inlineMenu={boolean('Inline Menu', false, 'Type')}
      size={sizeKnob(Sizes.DEFAULT, 'Size')}
      disabled={boolean('Disabled', false, 'State')}
      loading={boolean('Loading', false, 'State')}
      error={boolean('Error', false, 'State')}
      warning={boolean('Warning', false, 'State')}
      {...actions}
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
        noSelectedLabels={boolean('No Selected Labels', false)}
        inlineMenu
        fluid
        options={object('Options', developerOptions)}
        {...actions}
      />
    </div>
  )
}

multipleSelectionKeepingSelected.storyName =
  'Multiple Selection, Keeping Selected'

export const detailedItems = () => (
  <div style={{ width: '400px' }}>
    <Dropdown
      placeholder="Select Developer"
      selection
      search
      loading={boolean('Loading', false)}
      multiple="keep"
      size={sizeKnob()}
      fluid
      {...actions}>
      <Dropdown.Menu>
        <Dropdown.Item text="Strawberry" description="Red" value="1" />
        <Dropdown.Divider />
        <Dropdown.Item text="Banana" description="Yellow" value="2" />
        <Dropdown.Item text="Banana" description="Yellow" value="3" />
      </Dropdown.Menu>
    </Dropdown>
  </div>
)

export const withImages = () => {
  const optionsWithImages = _.map(developerOptions, option => ({
    ...option,
    image: appImage
  }))
  return (
    <Dropdown
      placeholder="Select Developer"
      selection
      multiple="keep"
      options={object('Options', optionsWithImages)}
      {...actions}
    />
  )
}
