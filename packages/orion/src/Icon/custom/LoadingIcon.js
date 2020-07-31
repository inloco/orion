import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import _ from 'lodash'

const LoadingIcon = ({ className, ...otherProps }) => (
  <i
    className={cx('orion loading', className)}
    {..._.omit(otherProps, 'children')}
  />
)

LoadingIcon.propTypes = {
  className: PropTypes.string
}

export default LoadingIcon
