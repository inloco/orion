import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Icon from '../Icon'

const FullscreenContainer = ({ children, title, className }) => {
  return (
    <div className={cx('orion fullscreen-container', className)}>
      <Icon name="close" />
      <div className="fullscreen-container-title">{title}</div>
      <div className="fullscreen-container-content">{children}</div>
    </div>
  )
}

FullscreenContainer.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string,
  className: PropTypes.string
}

export default FullscreenContainer
