import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Modal from '../Modal'

const Dialog = ({ className, warning, danger, ...otherProps }) => (
  <Modal
    className={cx(className, 'dialog', {
      warning,
      danger
    })}
    {...otherProps}
  />
)

Dialog.propTypes = {
  className: PropTypes.string,
  danger: PropTypes.bool,
  warning: PropTypes.bool
}

Dialog.Actions = Modal.Actions
Dialog.Content = Modal.Content
Dialog.Description = Modal.Description
Dialog.Header = Modal.Header

export default Dialog
