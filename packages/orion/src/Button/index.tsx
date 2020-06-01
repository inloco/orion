import cx from 'classnames'
import React from 'react'
import {
  Button as SemanticButton,
  ButtonProps as SemanticButtonProps
} from '@inloco/semantic-ui-react'

import { Sizes } from '../utils/sizes'
import { createShorthandFactory } from '../utils/factories'

const Button = ({
  className,
  ghost,
  icon,
  secondary,
  size,
  subtle,
  ...otherProps
}: ButtonProps) => {
  const { loading, primary } = otherProps
  const classes = cx(className, size, { ghost, subtle })
  return (
    <SemanticButton
      className={classes}
      icon={loading ? 'loading' : icon}
      secondary={secondary || (!primary && !ghost)}
      {...otherProps}
    />
  )
}

interface ButtonProps extends SemanticButtonProps {
  className?: string
  ghost?: boolean
  subtle?: boolean
}

Button.defaultProps = {
  size: Sizes.DEFAULT
}

// See src/utils/factories.js for more details.
Button.create = createShorthandFactory(Button, (value: React.ReactNode) => ({
  content: value
}))

export default Button
