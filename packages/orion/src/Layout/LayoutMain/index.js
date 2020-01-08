import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LayoutCenter from '../LayoutCenter'

const LayoutMain = ({ className, ...otherProps }) => {
  const classes = cx('layout-main', className)
  return <LayoutCenter as="main" className={classes} {...otherProps} />
}

LayoutMain.propTypes = {
  className: PropTypes.string
}

export default LayoutMain
