import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { useAlert } from './LayoutAlert'

const Layout = ({ className, children, ...otherProps }) => {
  const alert = useAlert()
  const classes = cx('orion layout', className, {
    'with-alert': !!alert
  })
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

export default Layout
