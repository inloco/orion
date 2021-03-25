import React from 'react'
import cx from 'classnames'

import Icon from '../../Icon'

enum Type {
  WARNING = 'warning',
  INFO = 'info'
}

const Alert: React.FC<AlertProps> = ({ content, type = Type.WARNING }) => {
  let iconName
  switch (type) {
    case Type.INFO:
      iconName = 'info_outline'
      break
    case Type.WARNING:
    default:
      iconName = 'warning'
      break
  }
  return (
    <div className={cx('layout-alert', type)}>
      <Icon name={iconName} />
      {content}
    </div>
  )
}

export interface AlertProps {
  content: React.ElementType
  type?: Type.WARNING | Type.INFO
}

export default Alert
