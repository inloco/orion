import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import SidebarDivider from './SidebarDivider'
import Logo from '../../Logo'

const LayoutSidebar = ({ className, children, logo, ...otherProps }) => (
  <div className={cx('layout-sidebar', className)} {...otherProps}>
    {logo || <Logo className="mb-24" />}
    {children}
  </div>
)

LayoutSidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  logo: PropTypes.node
}

LayoutSidebar.Divider = SidebarDivider

export default LayoutSidebar
