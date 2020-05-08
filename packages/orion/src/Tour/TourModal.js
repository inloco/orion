import React from 'react'
import PropTypes from 'prop-types'

import { Button, Modal } from '..'

function TourModal({ content, buttonContent, open, onAction }) {
  return (
    <Modal className="orion-tour-modal" open={open}>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onAction} content={buttonContent} />
      </Modal.Actions>
    </Modal>
  )
}

TourModal.propTypes = {
  content: PropTypes.node,
  buttonContent: PropTypes.string,
  open: PropTypes.bool,
  onAction: PropTypes.func
}

export default TourModal
