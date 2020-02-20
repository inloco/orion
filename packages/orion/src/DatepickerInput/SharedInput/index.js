import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Popup } from '@inloco/semantic-ui-react'

import Input from '../../Input'

const DatepickerSharedInput = ({
  className,
  disabled,
  onChange,
  picker,
  value,
  ...otherProps
}) => {
  const [opening, setOpening] = useState()

  // We add a special CSS class for a short time after opening the
  // popup. That's because react dates takes a while to render, so
  // we wait a little bit until it's done to avoid flickering.
  const handleTriggerClick = () => {
    setOpening(true)
    setTimeout(() => setOpening(false))
  }
  return (
    <Popup
      className={cx('datepicker-input-popup', { opening })}
      basic
      on="click"
      trigger={
        <div
          className={cx('datepicker-input-trigger', { disabled })}
          data-testid="datepicker-trigger"
          onClick={handleTriggerClick}>
          <Input
            className={cx('datepicker-input', className)}
            disabled={disabled}
            icon="date_range"
            onChange={onChange}
            value={value || ''}
            {...otherProps}
          />
        </div>
      }
      content={picker}
    />
  )
}

DatepickerSharedInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  picker: PropTypes.node.isRequired,
  value: PropTypes.string
}

export default DatepickerSharedInput
