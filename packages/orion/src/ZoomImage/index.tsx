import React, { FunctionComponent, useState } from 'react'
import cx from 'classnames'

import { Button } from '..'
import ImageModal from './ImageModal'

const ZoomImage: FunctionComponent<ZoomImageProps> = ({
  src,
  alt,
  className,
  modalClassName
}) => {
  const [zoom, setZoom] = useState(false)

  return (
    <div className={cx('orion-zoom-image', className, { zoom })}>
      {zoom && (
        <ImageModal
          className={modalClassName}
          src={src}
          alt={alt}
          onClose={() => setZoom(false)}
        />
      )}
      <img src={src} alt={alt} />
      <Button
        subtle
        secondary
        icon="zoom_in"
        onClick={() => setZoom(true)}
        type="button"
      />
    </div>
  )
}

type ZoomImageProps = {
  src: string
  alt: string
  className?: string
  modalClassName?: string
}

export default ZoomImage
