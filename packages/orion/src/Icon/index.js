import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon as SemanticIcon } from '@inloco/semantic-ui-react'

import { CUSTOM_ICONS_MAP } from './custom'
import { createShorthandFactory } from '../utils/factories'

const Icon = ({ as: AsElementType, className, color, name, ...otherProps }) => {
  const isCustomIcon = !!CUSTOM_ICONS_MAP[name] || !!AsElementType
  const ElementType = AsElementType || CUSTOM_ICONS_MAP[name] || 'i'
  const classes = cx(className, 'orion icon', {
    'material-icons': !isCustomIcon,
    [`text-${color}`]: !isCustomIcon && color,
    [`fill-${color}`]: isCustomIcon && color
  })
  return (
    <ElementType className={classes} name={name} role="img" {...otherProps}>
      {name}
    </ElementType>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  as: PropTypes.elementType
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticIcon.create = createShorthandFactory(Icon, value => ({ name: value }))

Icon.create = SemanticIcon.create

export default Icon
