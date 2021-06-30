import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import SidebarDivider from './SidebarDivider'
import SidebarContent from './SidebarContent'
import SidebarFooter from './SidebarFooter'
import Logo from '../../Logo'

const LayoutSidebar = ({ className, children, logo, ...otherProps }) => (
  <div className={cx('layout-sidebar', className)} {...otherProps}>
    {logo || <Logo className="sidebar-logo" />}
    {children}
  </div>
)

LayoutSidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  logo: PropTypes.node
}

LayoutSidebar.Divider = SidebarDivider
LayoutSidebar.Content = SidebarContent
LayoutSidebar.Footer = SidebarFooter

export default LayoutSidebar
