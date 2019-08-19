import _ from 'lodash'
import cx from 'classnames'
import React from 'react'
import { Label as SemanticLabel } from '@inloco/semantic-ui-react'

import Icon from '../Icon'
import { createShorthandFactory } from '../utils/factories'
import { Sizes, sizePropType } from '../utils/sizes'

const Label = ({
  className,
  children,
  content,
  onRemove,
  size,
  ...otherProps
}) => {
  if (onRemove) {
    children = (
      <React.Fragment>
        <div className="label-remove" onClick={e => onRemove(e, otherProps)}>
          <Icon name="clear" size="big" />
        </div>
        {children || content}
      </React.Fragment>
    )
  }
  return (
    <SemanticLabel
      className={cx(className, size)}
      content={children ? null : content}
      {...otherProps}>
      {children}
    </SemanticLabel>
  )
}

Label.propTypes = {
  size: sizePropType
}

Label.defaultProps = {
  size: Sizes.DEFAULT
}

// Overriding original factory. See src/utils/factories.js for more details.
SemanticLabel.create = createShorthandFactory(Label, value => ({
  content: value
}))

export default Label
