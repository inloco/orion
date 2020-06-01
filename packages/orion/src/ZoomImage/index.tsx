import React, { useState } from 'react'
import cx from 'classnames'

import { Button } from '..'
import ImageModal from './ImageModal'

function ZoomImage({ src, alt, className }: ZoomImageProps) {
  const [zoom, setZoom] = useState(false)

  return (
    <div className={cx('orion-zoom-image', className, { zoom })}>
      {zoom && (
        <ImageModal src={src} alt={alt} onClose={() => setZoom(false)} />
      )}
      <img src={src} alt={alt} />
      <Button subtle secondary icon="zoom_in" onClick={() => setZoom(true)} />
    </div>
  )
}

type ZoomImageProps = {
  src: string
  alt: string
  className?: string
}

export default ZoomImage
