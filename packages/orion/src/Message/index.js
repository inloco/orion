import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Message as SemanticMessage } from '@inloco/semantic-ui-react'

import Icon from '../Icon'

const Message = ({
  error,
  success,
  warning,
  fluid,
  className,
  onDismiss,
  ...otherProps
}) => {
  const { header } = otherProps

  const orionMessageClasses = cx('orion-message', {
    'orion-message--shadow': onDismiss,
    fluid
  })

  const semanticMessageClasses = cx(className, {
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

  return (
    <div className={orionMessageClasses}>
      {onDismiss && (
        <Icon
          name="close"
          className="orion-message__close-icon"
          onClick={onDismiss}
        />
      )}
      <SemanticMessage
        icon={icon}
        className={semanticMessageClasses}
        {...otherProps}
      />
    </div>
  )
}

Message.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  fluid: PropTypes.bool
}

Message.defaultProps = {
  success: true
}

Message.Content = SemanticMessage.Content
Message.Header = SemanticMessage.Header

export default Message
