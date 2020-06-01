import React, { FunctionComponent } from 'react'
import { Modal } from '@inloco/semantic-ui-react'

import { Button } from '..'

const ImageModal: FunctionComponent<ImageModalProps> = ({
  src,
  alt,
  onClose
}) => {
  return (
    <Modal open className="orion-zoom-image-modal">
      <Button subtle secondary icon="close" onClick={onClose} />
      <div className="image-wrapper">
        <img src={src} alt={alt} />
      </div>
    </Modal>
  )
}

type ImageModalProps = {
  src: string
  alt: string
  onClose: () => void
}

export default ImageModal
