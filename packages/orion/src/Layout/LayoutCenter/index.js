import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const LayoutCenter = ({
  as: ElementType,
  className,
  children,
  ...otherProps
}) => {
  const classes = cx('layout-center', className)
  return (
    <ElementType className={classes} {...otherProps}>
      <div className="layout-center-content">{children}</div>
    </ElementType>
  )
}

LayoutCenter.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node
}

LayoutCenter.defaultProps = {
  as: 'div'
}

export default LayoutCenter
