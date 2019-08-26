import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import _ from 'lodash'

import { Icon, Portal } from '../'

const FullscreenContainer = ({
  title,
  children,
  className,
  open: openProp,
  onOpen,
  onClose,
  trigger
}) => {
  const [isOpen, setOpen] = useState(false)
  const open = _.isNil(openProp) ? isOpen : openProp

  const handleOpen = () => {
    onOpen && onOpen()
    setOpen(true)
  }

  const handleClose = () => {
    onClose && onClose()
    setOpen(false)
  }

  return (
    <Portal
      trigger={trigger}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}>
      <div className={cx('orion fullscreen-container', className)}>
        <Icon name="close" onClick={handleClose} />
        {title && <div className="fullscreen-container-title">{title}</div>}
        <div className="fullscreen-container-content">{children}</div>
      </div>
    </Portal>
  )
}

FullscreenContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  trigger: PropTypes.node
}

export default FullscreenContainer
