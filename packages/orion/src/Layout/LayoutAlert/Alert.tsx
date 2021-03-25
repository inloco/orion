import React from 'react'
import cx from 'classnames'

import Icon from '../../Icon'

enum Type {
  WARNING = 'warning',
  INFO = 'info'
}

const TypeToIconName: Record<Type, string> = {
  [Type.WARNING]: 'warning',
  [Type.INFO]: 'info_outline'
}

const Alert: React.FC<AlertProps> = ({ content, type = Type.WARNING }) => {
  return (
    <div className={cx('layout-alert', type)}>
      <Icon name={TypeToIconName[type]} />
      {content}
    </div>
  )
}

export interface AlertProps {
  content: React.ElementType
  type?: Type.WARNING | Type.INFO
}

export default Alert
