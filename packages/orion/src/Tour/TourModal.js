import React from 'react'
import PropTypes from 'prop-types'

import { Button, Modal } from '..'

function TourModal({ content, buttonTitle, open, onContinue }) {
  return (
    <Modal className="orion-tour-modal" open={open}>
      <Modal.Content>{content}</Modal.Content>
      <Modal.Actions>
        <Button primary onClick={onContinue} content={buttonTitle} />
      </Modal.Actions>
    </Modal>
  )
}

TourModal.propTypes = {
  content: PropTypes.node,
  buttonTitle: PropTypes.string,
  open: PropTypes.bool,
  onContinue: PropTypes.func
}

export default TourModal
