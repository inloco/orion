import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Button as SemanticButton } from '@inloco/semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'
import { createShorthandFactory } from '../utils/factories'

const Button = ({
  className,
  ghost,
  secondary,
  size,
  subtle,
  ...otherProps
}) => {
  const { primary } = otherProps
  const classes = cx(className, size, { ghost, subtle })
  return (
    <SemanticButton
      className={classes}
      secondary={secondary || (!primary && !ghost)}
      {...otherProps}
    />
  )
}

Button.propTypes = {
  className: PropTypes.string,
  ghost: PropTypes.bool,
  secondary: PropTypes.bool,
  size: sizePropType,
  subtle: PropTypes.bool
}

Button.defaultProps = {
  size: Sizes.DEFAULT
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticButton.create = createShorthandFactory(Button, value => ({
  content: value
}))

Button.create = SemanticButton.create

export default Button
