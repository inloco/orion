import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Input as SemanticInput } from '@inloco/semantic-ui-react'

import { createShorthandFactory } from '../utils/factories'
import { Sizes, sizePropType } from '../utils/sizes'

const Input = React.forwardRef(
  ({ className, warning, size, ...otherProps }, ref) => {
    const { fluid } = otherProps
    const classes = cx(className, size, {
      warning,
      'w-full': fluid
    })
    return <SemanticInput className={classes} ref={ref} {...otherProps} />
  }
)

Input.propTypes = {
  className: PropTypes.string,
  size: sizePropType,
  warning: PropTypes.bool
}

Input.defaultProps = {
  size: Sizes.DEFAULT
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticInput.create = createShorthandFactory(Input, type => ({ type }))

Input.create = SemanticInput.create

export default Input
