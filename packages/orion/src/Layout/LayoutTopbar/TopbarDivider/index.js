import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const TopbarDivider = ({ className, ...otherProps }) => {
  return <div className={cx('topbar-divider', className)} {...otherProps} />
}

TopbarDivider.propTypes = {
  className: PropTypes.string
}

export default TopbarDivider
