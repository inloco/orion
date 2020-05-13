import React, { FunctionComponent, useState } from 'react'
import cx from 'classnames'
import {
  Image as SemanticImage,
  ImageProps as SemanticImageProps
} from '@inloco/semantic-ui-react'

import { Dimmer } from '..'

import { ImageProps } from './ImageProps'

const Image: FunctionComponent<ImageProps & SemanticImageProps> = ({
  className,
  allowZoom,
  ...otherProps
}) => {
  const [zoomed, setZoomed] = useState(false)

  return (
    <>
      <SemanticImage
        src={otherProps.src}
        size={otherProps.size}
        className={cx(className, { hidden: !zoomed }, 'opacity-0')}
      />

      <SemanticImage
        className={cx(className, { zoomed })}
        onClick={() => {
          if (allowZoom) setZoomed(prev => !prev)
        }}
        {...otherProps}
      />

      {<Dimmer active={zoomed} />}
    </>
  )
}

Image.defaultProps = {
  allowZoom: false
}

export default Image
