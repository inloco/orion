import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import ReactDOM from 'react-dom'

import { Icon } from '../'

const FullscreenContainer = ({
  title,
  children,
  className,
  open,
  onOpen,
  onClose,
  trigger
}) => {
  const [isOpen, setOpen] = useState(open)

  const openContainer = () => {
    setOpen(true)
    onOpen && onOpen()
  }

  const closeContainer = () => {
    setOpen(false)
    onClose && onClose()
  }

  return (
    <React.Fragment>
      {trigger && <div onClick={openContainer}>{trigger}</div>}
      {isOpen &&
        ReactDOM.createPortal(
          <div className={cx('orion fullscreen-container', className)}>
            <Icon name="close" onClick={closeContainer} />
            {title && <div className="fullscreen-container-title">{title}</div>}
            <div className="fullscreen-container-content">{children}</div>
          </div>,
          document.body
        )}
    </React.Fragment>
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
