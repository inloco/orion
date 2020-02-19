import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
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
  return (
    <Popup
      className="datepicker-input-popup"
      basic
      on="click"
      trigger={
        <div
          className={cx('datepicker-input-trigger', { disabled })}
          data-testid="datepicker-trigger">
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
