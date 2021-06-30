import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Divider from '../../../Divider'

const SidebarDivider = ({ className, ...otherProps }) => {
  return (
    <Divider className={cx('sidebar-divider', className)} {...otherProps} />
  )
}

SidebarDivider.propTypes = {
  className: PropTypes.string
}

export default SidebarDivider
