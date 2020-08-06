import React from 'react'
import cx from 'classnames'
import _ from 'lodash'
import { boolean, color, withKnobs } from '@storybook/addon-knobs/react'

import { Colors } from '.'

export default {
  title: 'Colors',
  decorators: [withKnobs]
}

function ColorCard({ className, colorName, colorText }) {
  const color = Colors[colorName]
  return (
    <div
      className={cx(
        className,
        'grid rounded overflow-hidden border border-gray-400 leading text-center text-sm leading-18'
      )}
      style={{ width: 112, ...(colorText && { color }) }}>
      <div className="h-40" style={{ backgroundColor: color }} />
      {colorName}
    </div>
  )
}

export const basic = () => {
  const keys = _.keys(Colors)
  const groups = _.groupBy(keys, key => _.head(_.split(key, '_')))

  const backgroundColor = color('Background color', 'transparent')
  const colorText = boolean('Apply colors to text', false)
  return (
    <div className="space-y-8" style={{ backgroundColor }}>
      {_.values(groups).map(group => (
        <div className="flex flex-wrap">
          {group.map(color => (
            <ColorCard
              colorName={color}
              className="mr-8 mb-8"
              colorText={colorText}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
