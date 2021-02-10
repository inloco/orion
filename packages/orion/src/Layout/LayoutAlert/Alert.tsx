import React from 'react'

import Icon from '../../Icon'

const Alert: React.FC<AlertProps> = ({ alert }) => {
  return (
    <div className="layout-alert">
      <Icon name="warning" />
      {alert}
    </div>
  )
}

interface AlertProps {
  alert: string
}

export default Alert
