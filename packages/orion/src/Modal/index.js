import React from 'react'
import { Modal as SemanticModal } from '@inloco/semantic-ui-react'

const Modal = props => <SemanticModal {...props} />

Modal.defaultProps = {
  dimmer: 'inverted'
}

Modal.Actions = SemanticModal.Actions
Modal.Content = SemanticModal.Content
Modal.Description = SemanticModal.Description
Modal.Header = SemanticModal.Header

export default Modal
