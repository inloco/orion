import React from 'react'
import { text } from '@storybook/addon-knobs'

import { sizeKnob } from '../utils/stories'

import { CopyIcon } from '..'

const storyMetadata = {
  title: 'CopyIcon'
}

export default storyMetadata

export const basic = () => (
  <CopyIcon
    value={text('Value', 'Drink water folks!')}
    content={text('Content', 'Copy a fun message')}
    successContent={text('Success Content', 'Copied!')}
    tooltipPosition={text('Position', 'bottom left')}
    size={sizeKnob()}
  />
)
