import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Label } from '@inloco/semantic-ui-react'

import { Sizes, threeSizesPropType } from '../utils/sizes'

const Types = {
  INACTIVE: 'inactive',
  NEUTRAL: 'neutral',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success'
}

const StatusTag = ({
  className,
  type,
  size,
  filled,
  bordered,
  children,
  ...otherProps
}) => {
  const classes = cx('status-tag', className, type, size, { filled, bordered })

  return (
    <Label className={classes} {...otherProps}>
      {children}
    </Label>
  )
}

StatusTag.Types = Types

StatusTag.defaultProps = {
  size: Sizes.DEFAULT,
  bordered: true,
  filled: false
}

StatusTag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: threeSizesPropType,
  type: PropTypes.oneOf(Object.values(Types)),
  bordered: PropTypes.bool,
  filled: PropTypes.bool
}

export default StatusTag
