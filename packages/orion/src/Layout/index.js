import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import LayoutCenter from './LayoutCenter'
import LayoutMain from './LayoutMain'
import LayoutTopbar from './LayoutTopbar'

const Layout = ({ className, children, ...otherProps }) => {
  const classes = cx('orion layout', className)
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

Layout.Center = LayoutCenter
Layout.Main = LayoutMain
Layout.Topbar = LayoutTopbar

export default Layout
