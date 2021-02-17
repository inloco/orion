import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'

import Message from '../Message'

const DEFAULTS = {
  errorTitle: 'Error',
  errorMessage: 'Unexpected Error',
  warningTitle: 'Warning',
  successTitle: 'Success'
}
const NotificationCenter = ({ defaults, ...props }) => {
  NotificationCenter.defaults = { ...DEFAULTS, ...defaults }
  return <ToastContainer {...props} />
}

NotificationCenter.propTypes = {
  defaults: PropTypes.shape({
    errorTitle: PropTypes.any,
    errorMessage: PropTypes.any,
    successTitle: PropTypes.any,
    successMessage: PropTypes.any,
    warningTitle: PropTypes.any,
    warningMessage: PropTypes.any
  })
}

NotificationCenter.defaultProps = {
  autoClose: false,
  closeButton: false,
  hideProgressBar: true,
  position: toast.POSITION.TOP_CENTER,
  className: 'orion-notification-center',
  toastClassName: 'orion-notification-center__toast'
}

export default NotificationCenter

const NotificationTypes = {
  ERROR: 'error',
  SUCCESS: 'success',
  WARNING: 'warning'
}

const buildNotification = ({ options, type, inline = false }) => (
  message,
  title
) => {
  const content = message || NotificationCenter.defaults[`${type}Message`]
  const header = inline
    ? null
    : title || NotificationCenter.defaults[`${type}Title`]

  const toastId = `${type}-${header}-${content}`
  if (toast.isActive(toastId)) return

  const messageType = { [type]: true }

  toast(
    ({ closeToast }) => (
      <Message
        className="orion-notification-center-message"
        content={content}
        header={header}
        {...messageType}
        onDismiss={closeToast}
      />
    ),
    { ...options, toastId }
  )
}

NotificationCenter.error = buildNotification({
  type: NotificationTypes.ERROR
})

NotificationCenter.success = buildNotification({
  options: {
    autoClose: 5000
  },
  type: NotificationTypes.SUCCESS
})

NotificationCenter.warning = buildNotification({
  type: NotificationTypes.WARNING
})

NotificationCenter.inlineError = buildNotification({
  type: NotificationTypes.ERROR,
  inline: true
})

NotificationCenter.inlineSuccess = buildNotification({
  options: {
    autoClose: 5000
  },
  type: NotificationTypes.SUCCESS,
  inline: true
})

NotificationCenter.inlineWarning = buildNotification({
  type: NotificationTypes.WARNING,
  inline: true
})
