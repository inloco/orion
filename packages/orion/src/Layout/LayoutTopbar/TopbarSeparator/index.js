import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const TopbarSeparator = ({ className, ...otherProps }) => {
  const classes = cx('topbar-separator', className)
  return <div className={classes} {...otherProps} />
}

TopbarSeparator.propTypes = {
  className: PropTypes.string
}

export default TopbarSeparator
