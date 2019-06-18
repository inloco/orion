import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Message as SemanticMessage } from 'semantic-ui-react'

import Icon from '../Icon'

const Message = ({
  error,
  success,
  warning,
  className,
  onDismiss,
  ...otherProps
}) => {
  const { header } = otherProps

  const classes = cx(className, {
    error,
    success,
    warning,
    header
  })

  const icon = warning ? (
    <Icon name="warning" className="text-yellow-500" />
  ) : error ? (
    <Icon name="error" className="text-magenta-500" />
  ) : (
    <Icon name="check" className="text-green-500" />
  )

  const dismissIcon = onDismiss && (
    <Icon
      name="close"
      className="orion-message__close-icon"
      onClick={onDismiss}
    />
  )

  return (
    <div className="orion-message">
      {dismissIcon}
      <SemanticMessage icon={icon} className={classes} {...otherProps} />
    </div>
  )
}

Message.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool
}

Message.defaultProps = {
  success: true
}

export default Message
