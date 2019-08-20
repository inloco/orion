import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Icon as SemanticIcon } from '@inloco/semantic-ui-react'

import { CUSTOM_ICONS_MAP } from './custom'
import { createShorthandFactory } from '../utils/factories'

const Icon = ({ className, color, name, ...otherProps }) => {
  const isCustomIcon = !!CUSTOM_ICONS_MAP[name]
  const ElementType = CUSTOM_ICONS_MAP[name] || 'i'
  const classes = cx(className, 'icon', [name], {
    'material-icons': !isCustomIcon,
    [`text-${color}`]: !isCustomIcon && color,

    [`fill-${color}`]: isCustomIcon && color
  })
  return (
    <ElementType className={classes} {...otherProps}>
      {name}
    </ElementType>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticIcon.create = createShorthandFactory(Icon, value => ({ name: value }))

export default Icon
