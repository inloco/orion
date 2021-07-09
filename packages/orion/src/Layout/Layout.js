import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { useAlert } from './LayoutAlert'

const Layout = ({ className, sidebar, children, ...otherProps }) => {
  const alert = useAlert()
  const classes = cx('orion layout', className, {
    'with-alert': !!alert,
    'with-sidebar': sidebar
  })
  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  sidebar: PropTypes.bool
}

Layout.defaultProps = {
  sidebar: true
}

export default Layout
