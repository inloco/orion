import React from 'react'
import PropTypes from 'prop-types'
import { Modal as SemanticModal } from '@inloco/semantic-ui-react'
import cx from 'classnames'

const Dialog = ({ className, warning, danger, ...otherProps }) => (
  <SemanticModal
    className={cx(className, 'dialog', {
      warning: warning,
      danger: danger
    })}
    {...otherProps}
  />
)

Dialog.propTypes = {
  className: PropTypes.string,
  danger: PropTypes.bool,
  warning: PropTypes.bool
}

Dialog.Actions = SemanticModal.Actions
Dialog.Content = SemanticModal.Content
Dialog.Description = SemanticModal.Description
Dialog.Header = SemanticModal.Header

export default Dialog
