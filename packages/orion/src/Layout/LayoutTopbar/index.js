import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import TopbarDivider from './TopbarDivider'
import LayoutCenter from '../LayoutCenter'
import Logo from '../../Logo'
import { Alert, useAlert } from '../LayoutAlert'

const LayoutTopbar = ({ className, children, logo, dimmed, ...otherProps }) => {
  const classes = cx('layout-topbar', { dimmed }, className)
  const alertProps = useAlert()

  return (
    <LayoutCenter className={classes} {...otherProps}>
      {logo || <Logo className="mb-4" />}
      {children}
      {!!alertProps && <Alert {...alertProps} />}
    </LayoutCenter>
  )
}

LayoutTopbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  logo: PropTypes.node,
  dimmed: PropTypes.bool
}

LayoutTopbar.Divider = TopbarDivider

export default LayoutTopbar
