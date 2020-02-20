import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { Popup } from '@inloco/semantic-ui-react'

import Input from '../../Input'

const DatepickerSharedInput = ({
  className,
  disabled,
  fluid,
  input,
  onChange,
  picker,
  popupProps,
  value,
  ...otherProps
}) => {
  const [opening, setOpening] = useState()

  useEffect(() => {
    if (opening) {
      const timeout = setTimeout(() => setOpening(false))
      return () => clearTimeout(timeout)
    }
  }, [opening])

  // We add a special CSS class for a short time after opening the
  // popup. That's because react dates takes a while to render, so
  // we wait a little bit until it's done to avoid flickering.
  const handleTriggerClick = () => setOpening(true)

  return (
    <Popup
      className={cx('datepicker-input-popup', { opening })}
      basic
      on="click"
      trigger={
        <div
          className={cx('datepicker-input-trigger', { disabled, fluid })}
          data-testid="datepicker-trigger"
          onClick={handleTriggerClick}>
          {input || (
            <Input
              className={cx('datepicker-input', className)}
              disabled={disabled}
              fluid
              icon="date_range"
              onChange={onChange}
              value={value || ''}
              {...otherProps}
            />
          )}
        </div>
      }
      content={picker}
      position="bottom left"
      {...popupProps}
    />
  )
}

DatepickerSharedInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fluid: PropTypes.bool,
  input: PropTypes.node,
  onChange: PropTypes.func,
  picker: PropTypes.node.isRequired,
  popupProps: PropTypes.object,
  value: PropTypes.any
}

DatepickerSharedInput.defaultProps = {
  popupProps: {}
}

export default DatepickerSharedInput
