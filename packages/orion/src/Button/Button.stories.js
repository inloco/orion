import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react'

import Button from './'
import { sizeKnob } from '../utils/stories'

const actions = {
  onClick: action('onClick')
}

export default {
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: ['actions']
}

export const primary = () => {
  const disabled = boolean('Disabled')
  const sizeValue = sizeKnob()
  return (
    <React.Fragment>
      <Button
        fluid={boolean('Fluid', false)}
        primary
        content={text('Content', 'Click Me')}
        disabled={disabled}
        icon={text('First Icon', '') || null}
        size={sizeValue}
        {...actions}
      />
      <br />
      <br />
      <Button
        fluid={boolean('Fluid', false)}
        primary
        disabled={disabled}
        icon={text('Second Icon', 'cloud')}
        size={sizeValue}
        {...actions}
      />
    </React.Fragment>
  )
}

export const secondary = () => {
  const disabled = boolean('Disabled')
  const sizeValue = sizeKnob()
  return (
    <React.Fragment>
      <Button
        fluid={boolean('Fluid', false)}
        secondary
        content={text('Content', 'Click Me')}
        disabled={disabled}
        icon={text('First Icon', '') || null}
        size={sizeValue}
        {...actions}
      />
      <br />
      <br />
      <Button
        fluid={boolean('Fluid', false)}
        secondary
        disabled={disabled}
        icon={text('Second Icon', 'cloud')}
        size={sizeValue}
        {...actions}
      />
    </React.Fragment>
  )
}

export const ghost = () => {
  const disabled = boolean('Disabled')
  const sizeValue = sizeKnob()
  return (
    <React.Fragment>
      <Button
        fluid={boolean('Fluid', false)}
        ghost
        content={text('Content', 'Click Me')}
        disabled={disabled}
        icon={text('First Icon', '') || null}
        size={sizeValue}
        {...actions}
      />
      <br />
      <br />
      <Button
        fluid={boolean('Fluid', false)}
        ghost
        disabled={disabled}
        icon={text('Second Icon', 'cloud')}
        size={sizeValue}
        {...actions}
      />
    </React.Fragment>
  )
}

export const subtlePrimary = () => {
  const disabled = boolean('Disabled')
  const sizeValue = sizeKnob()
  return (
    <React.Fragment>
      <Button
        fluid={boolean('Fluid', false)}
        primary
        subtle
        content={text('Content', 'Click Me')}
        disabled={disabled}
        icon={text('First Icon', '') || null}
        size={sizeValue}
        {...actions}
      />
      <br />
      <br />
      <Button
        fluid={boolean('Fluid', false)}
        primary
        subtle
        disabled={disabled}
        icon={text('Second Icon', 'apps')}
        size={sizeValue}
        {...actions}
      />
    </React.Fragment>
  )
}

export const subtleSecondary = () => {
  const disabled = boolean('Disabled')
  const sizeValue = sizeKnob()
  return (
    <React.Fragment>
      <Button
        fluid={boolean('Fluid', false)}
        secondary
        subtle
        content={text('Content', 'Click Me')}
        disabled={disabled}
        icon={text('First Icon', '') || null}
        size={sizeValue}
        {...actions}
      />
      <br />
      <br />
      <Button
        fluid={boolean('Fluid', false)}
        secondary
        subtle
        disabled={disabled}
        icon={text('Second Icon', 'apps')}
        size={sizeValue}
        {...actions}
      />
    </React.Fragment>
  )
}

export const multiple = () => {
  return (
    <React.Fragment>
      <Button primary content="Button 1" />
      <Button primary content="Button 2" />
      <Button primary content="Button 3" />
    </React.Fragment>
  )
}
