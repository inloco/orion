import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const SidebarDivider = ({ className, ...otherProps }) => {
  return <div className={cx('sidebar-divider', className)} {...otherProps} />
}

SidebarDivider.propTypes = {
  className: PropTypes.string
}

export default SidebarDivider
