import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LoadingIcon = ({ className, ...otherProps }) => (
  <i className={cx('orion loading', className)} {...otherProps} />
)

LoadingIcon.propTypes = {
  className: PropTypes.string
}

export default LoadingIcon
