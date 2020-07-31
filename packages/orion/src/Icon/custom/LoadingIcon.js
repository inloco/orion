import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LoadingIcon = ({ className, children, ...otherProps }) => (
  <i className={cx('orion loading', className)} {...otherProps} />
)

LoadingIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
}

export default LoadingIcon
