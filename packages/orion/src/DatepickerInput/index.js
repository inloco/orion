import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { toMoment } from '../utils/datetime'
import { Sizes, sizePropType } from '../utils/sizes'
import DatepickerSharedInput from './SharedInput'
import Datepicker from '../Datepicker'

const formatDate = (date, displayFormat) => {
  const momentDate = toMoment(date)
  return momentDate && momentDate.isValid()
    ? momentDate.format(displayFormat)
    : null
}

const DatepickerInput = ({
  className,
  defaultValue,
  displayFormat,
  onChange,
  pickerProps,
  value: valueProp,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(
    formatDate(defaultValue, displayFormat)
  )

  const handleInputChange = (event, { value }) => {
    setInputValue(value)
    onChange && onChange(event, { value: toMoment(value) })
  }
  const handlePickerChange = momentDate => {
    const inputValue = formatDate(momentDate, displayFormat)
    setInputValue(inputValue)
    onChange && onChange({}, { value: momentDate })
  }

  let value = inputValue
  const formattedValueProp = formatDate(valueProp, displayFormat)
  const formattedInputValue = formatDate(inputValue, displayFormat)
  if (!_.isUndefined(valueProp) && formattedValueProp !== formattedInputValue) {
    // We ignore values from prop if they reference the same date as the latest
    // input value, to avoid changing what the user has typed while he types it.
    value = formattedValueProp
  }

  return (
    <DatepickerSharedInput
      onChange={handleInputChange}
      picker={
        <Datepicker
          {...pickerProps}
          defaultDate={defaultValue}
          date={value}
          onDateChange={handlePickerChange}
        />
      }
      value={value}
      {...otherProps}
    />
  )
}

DatepickerInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  displayFormat: PropTypes.string,
  onChange: PropTypes.func,
  pickerProps: PropTypes.object,
  size: sizePropType,
  value: PropTypes.any
}

DatepickerInput.defaultProps = {
  displayFormat: 'MM/DD/YYYY',
  pickerProps: {},
  size: Sizes.DEFAULT
}

export default DatepickerInput
