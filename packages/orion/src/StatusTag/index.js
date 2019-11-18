import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Label } from '@inloco/semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'

export const types = {
  CANCELLED: 'cancelled',
  WAITING: 'waiting',
  PENDING: 'pending',
  ERROR: 'error',
  RUNNING: 'running'
}

const StatusTag = ({ className, type, size, children }) => {
  const classes = cx('status-tag', className, type, size)

  return <Label className={classes}>{children}</Label>
}

StatusTag.defaultProps = {
  size: Sizes.DEFAULT
}

StatusTag.propTypes = {
  size: sizePropType,
  type: PropTypes.oneOf(Object.values(types))
}

export default StatusTag
