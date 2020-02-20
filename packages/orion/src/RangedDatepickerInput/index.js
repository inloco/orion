import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import DatepickerSharedInput from '../DatepickerInput/SharedInput'
import { formatDate } from '../DatepickerInput/utils'
import RangedDatepicker from '../RangedDatepicker'
import { toMoment } from '../utils/datetime'
import { Sizes, sizePropType } from '../utils/sizes'

const SEPARATOR = ' - '
const UNKNOWN_DATE = '?'

const formatDates = (dates, displayFormat) => {
  if (!dates) return null
  const { startDate, endDate } = dates
  const formattedStart = formatDate(startDate, displayFormat) || UNKNOWN_DATE
  const formattedEnd = formatDate(endDate, displayFormat) || UNKNOWN_DATE
  return formattedStart + SEPARATOR + formattedEnd
}

const RangedDatepickerInput = ({
  className,
  defaultValue,
  displayFormat,
  onChange,
  pickerProps,
  value: valueProp,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(
    formatDates(defaultValue, displayFormat)
  )

  const toMomentIfKnown = date =>
    date === UNKNOWN_DATE ? null : toMoment(date, displayFormat)
  const toDatesObject = datesStr => {
    const [startDateStr, endDateStr] = (datesStr || '').split(SEPARATOR)
    return startDateStr || endDateStr
      ? {
          startDate: toMomentIfKnown(startDateStr),
          endDate: toMomentIfKnown(endDateStr)
        }
      : null
  }

  const handleInputChange = (event, { value }) => {
    setInputValue(value)
    onChange && onChange(event, { value: toDatesObject(value) })
  }
  const handlePickerChange = newDates => {
    const inputValue = formatDates(newDates, displayFormat)
    setInputValue(inputValue)
    onChange && onChange({}, { value: newDates })
  }

  let value = inputValue
  const formattedValueProp = formatDates(valueProp, displayFormat)
  const formattedInputValue = formatDates(
    toDatesObject(inputValue),
    displayFormat
  )
  if (!_.isUndefined(valueProp) && formattedValueProp !== formattedInputValue) {
    // We ignore values from prop if they reference the same date as the latest
    // input value, to avoid changing what the user has typed while he types it.
    value = formattedValueProp
  }

  return (
    <DatepickerSharedInput
      onChange={handleInputChange}
      picker={
        <RangedDatepicker
          {...pickerProps}
          defaultDates={defaultValue}
          dates={toDatesObject(value)}
          onDatesChange={handlePickerChange}
        />
      }
      value={value}
      {...otherProps}
    />
  )
}

RangedDatepickerInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.shape({
    startDate: PropTypes.any,
    endDate: PropTypes.any
  }),
  displayFormat: PropTypes.string,
  onChange: PropTypes.func,
  pickerProps: PropTypes.object,
  size: sizePropType,
  value: PropTypes.shape({
    startDate: PropTypes.any,
    endDate: PropTypes.any
  })
}

RangedDatepickerInput.defaultProps = {
  displayFormat: 'MM/DD/YYYY',
  pickerProps: {},
  size: Sizes.DEFAULT
}

export default RangedDatepickerInput
