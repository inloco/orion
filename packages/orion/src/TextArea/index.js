import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { TextArea as SemanticTextArea } from '@inloco/semantic-ui-react'

const TextArea = React.forwardRef(
  ({ className, error, fluid, warning, ...otherProps }, ref) => {
    const classes = cx('orion textarea', className, { error, fluid, warning })
    return (
      <div className={classes}>
        <SemanticTextArea ref={ref} {...otherProps} />
      </div>
    )
  }
)

TextArea.propTypes = {
  className: PropTypes.string,
  error: PropTypes.bool,
  fluid: PropTypes.bool,
  warning: PropTypes.bool
}

export default TextArea
