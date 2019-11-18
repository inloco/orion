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

const StatusTag = ({ className, type, size, filled, bordered, children }) => {
  const classes = cx('status-tag', className, type, size, { filled, bordered })

  return <Label className={classes}>{children}</Label>
}

StatusTag.defaultProps = {
  size: Sizes.DEFAULT,
  bordered: true,
  filled: false
}

StatusTag.propTypes = {
  size: sizePropType,
  type: PropTypes.oneOf(Object.values(types)),
  bordered: PropTypes.bool,
  filled: PropTypes.bool
}

export default StatusTag
