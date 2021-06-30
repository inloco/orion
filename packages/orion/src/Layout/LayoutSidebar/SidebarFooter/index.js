import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const SidebarFooter = ({ className, ...otherProps }) => {
  return <div className={cx('sidebar-footer', className)} {...otherProps} />
}

SidebarFooter.propTypes = {
  className: PropTypes.string
}

export default SidebarFooter
