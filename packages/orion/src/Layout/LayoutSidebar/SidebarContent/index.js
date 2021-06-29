import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const SidebarContent = ({ className, ...otherProps }) => {
  return <div className={cx('sidebar-content', className)} {...otherProps} />
}

SidebarContent.propTypes = {
  className: PropTypes.string
}

export default SidebarContent
