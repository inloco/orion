import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LoadingIcon = ({ className }) => (
  <i className={cx('orion loading', className)} />
)

LoadingIcon.propTypes = {
  className: PropTypes.string
}

export default LoadingIcon
