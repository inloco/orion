import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Sizes, sizePropType } from '../utils/sizes'
import Button from '../Button'
import Tooltip from '../Tooltip'

const SUCCESS_MESSAGE_MOUSE_OUT_DELAY = 1000

const CopyIcon = ({
  value,
  content,
  successContent,
  tooltipPosition,
  size,
  ...otherProps
}) => {
  const [copied, setCopied] = useState(false)

  return (
    <Tooltip
      trigger={
        <CopyToClipboard
          text={value}
          onCopy={(value, success) => success && setCopied(true)}>
          <Button
            subtle
            icon={{
              name: 'file_copy',
              className: cx({ 'text-icon-sm': size === Sizes.SMALL })
            }}
            size={size}
            {...otherProps}
          />
        </CopyToClipboard>
      }
      content={copied ? successContent : content}
      position={tooltipPosition}
      onClose={() => copied && setCopied(false)}
      {...(copied && { mouseLeaveDelay: SUCCESS_MESSAGE_MOUSE_OUT_DELAY })}
    />
  )
}

CopyIcon.propTypes = {
  value: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  successContent: PropTypes.string.isRequired,
  tooltipPosition: PropTypes.string,
  size: sizePropType
}

CopyIcon.defaultProps = {
  tooltipPosition: 'top center'
}

export default CopyIcon
