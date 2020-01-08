import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LayoutCenter from '../LayoutCenter'
import Logo from '../../Logo'

const LayoutTopbar = ({ className, children, logo, ...otherProps }) => {
  const classes = cx('layout-topbar', className)
  return (
    <LayoutCenter className={classes} {...otherProps}>
      {logo || <Logo className="mb-4" />}
      {children}
    </LayoutCenter>
  )
}

LayoutTopbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  logo: PropTypes.node
}

export default LayoutTopbar
