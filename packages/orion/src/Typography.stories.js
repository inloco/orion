import React from 'react'
import { text, number } from '@storybook/addon-knobs'

const storyMetadata = {
  title: 'Typography'
}

export default storyMetadata

export const basic = () => {
  const customText = text('Text', 'The quick brown fox jumps over 42 lazy dogs')
  const fontSize = number('Font size', 16, { range: true, min: 12, max: 56 })
  return (
    <div style={{ fontSize, lineHeight: `${fontSize + 6}px` }}>
      <div className="font-normal">{customText}</div>
      <div className="font-medium">{customText}</div>

      <div className="font-display font-thin">{customText}</div>
      <div className="font-display font-normal">{customText}</div>
      <div className="font-display font-medium">{customText}</div>
    </div>
  )
}
