import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LayoutMain = ({ className, ...otherProps }) => {
  const classes = cx('layout-main', className)
  return <div className={classes} {...otherProps} />
}

LayoutMain.propTypes = {
  className: PropTypes.string
}

export default LayoutMain
