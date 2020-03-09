import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const TopbarSeparator = ({ className, ...otherProps }) => {
  return <div className={cx('topbar-separator', className)} {...otherProps} />
}

TopbarSeparator.propTypes = {
  className: PropTypes.string
}

export default TopbarSeparator
