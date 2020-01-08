import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Sizes, sizePropType } from '../utils/sizes'

const Progress = ({ className, color, percent, size, ...otherProps }) => {
  return (
    <div
      className={cx(className, size, 'orion progress')}
      data-percent={percent}
      {...otherProps}>
      <div className={`bar bg-${color}`} style={{ width: `${percent}%` }} />
    </div>
  )
}

Progress.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  percent: PropTypes.number.isRequired,
  size: sizePropType
}

Progress.defaultProps = {
  color: 'wave-500',
  size: Sizes.DEFAULT
}

export default Progress
