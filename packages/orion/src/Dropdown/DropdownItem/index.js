import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Dropdown as SemanticDropdown, Image } from '@inloco/semantic-ui-react'

import { createShorthandFactory } from '../../utils/factories'

const DropdownItem = ({
  children,
  content,
  description,
  image,
  text,
  ...otherProps
}) => {
  if (!children) {
    children = (
      <div className="flex items-center">
        {image && (
          <div className="flex-shrink-0">
            {Image.create(image, { autoGenerateKey: false })}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="text">{_.isNil(content) ? text : content}</div>
          {!_.isNil(description) && (
            <div className="description">{description}</div>
          )}
        </div>
      </div>
    )
  }
  return (
    <SemanticDropdown.Item {...otherProps}>{children}</SemanticDropdown.Item>
  )
}

DropdownItem.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  text: PropTypes.node
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticDropdown.Item.create = createShorthandFactory(
  DropdownItem,
  opts => opts
)

DropdownItem.create = SemanticDropdown.Item.create

export default DropdownItem
