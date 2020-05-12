import React, { FunctionComponent } from 'react'
import {
  Image as SemanticImage,
  ImageProps as SemanticImageProps
} from '@inloco/semantic-ui-react'

import { ImageProps } from './ImageProps'

const Image: FunctionComponent<ImageProps & SemanticImageProps> = ({
  ...otherProps
}) => {
  return <SemanticImage {...otherProps} />
}

export default Image
