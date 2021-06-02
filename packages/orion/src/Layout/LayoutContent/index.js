import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LayoutContent = ({ className, ...otherProps }) => (
  <div className={cx('layout-content', className)} {...otherProps} />
)

LayoutContent.propTypes = {
  className: PropTypes.string
}

export default LayoutContent
