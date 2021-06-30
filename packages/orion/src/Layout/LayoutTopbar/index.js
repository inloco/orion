import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import TopbarDivider from './TopbarDivider'
import { Alert, useAlert } from '../LayoutAlert'

const LayoutTopbar = ({ className, children, dimmed, ...otherProps }) => {
  const classes = cx('layout-topbar', { dimmed }, className)
  const alertProps = useAlert()

  return (
    <div className={classes} {...otherProps}>
      {children}
      {!!alertProps && <Alert {...alertProps} />}
    </div>
  )
}

LayoutTopbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dimmed: PropTypes.bool
}

LayoutTopbar.Divider = TopbarDivider

export default LayoutTopbar
