import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import DatepickerSharedInput from '../DatepickerInput/SharedInput'
import { formatDate } from '../DatepickerInput/utils'
import Icon from '../Icon'
import Input from '../Input'
import RangedDatepicker from '../RangedDatepicker'
import { toMoment } from '../utils/datetime'
import { Sizes, sizePropType } from '../utils/sizes'

const formatDates = (dates, displayFormat) => {
  if (!dates) return null
  const { startDate, endDate } = dates
  return {
    startDate: formatDate(startDate, displayFormat),
    endDate: formatDate(endDate, displayFormat)
  }
}

const RangedDatepickerInput = ({
  className,
  defaultValue,
  disabled,
  displayFormat,
  endPlaceholder,
  onChange,
  pickerProps,
  startPlaceholder,
  value: valueProp,
  ...otherProps
}) => {
  const [inputValues, setInputValues] = useState(
    formatDates(defaultValue, displayFormat)
  )

  const toMomentDates = strDates => {
    if (!strDates) return null
    const { startDate, endDate } = strDates
    return {
      startDate: toMoment(startDate, displayFormat),
      endDate: toMoment(endDate, displayFormat)
    }
  }

  const handleStartInputChange = (event, { value }) => {
    const newInputValues = { ...inputValues, startDate: value }
    setInputValues(newInputValues)
    onChange && onChange(event, { value: toMomentDates(newInputValues) })
  }
  const handleEndInputChange = (event, { value }) => {
    const newInputValues = { ...inputValues, endDate: value }
    setInputValues(newInputValues)
    onChange && onChange(event, { value: toMomentDates(newInputValues) })
  }
  const handlePickerChange = newDates => {
    const inputValues = formatDates(newDates, displayFormat)
    setInputValues(inputValues)
    onChange && onChange({}, { value: newDates })
  }

  let value = inputValues
  const formattedValueProp = formatDates(valueProp, displayFormat)
  const formattedInputValue = formatDates(
    toMomentDates(inputValues),
    displayFormat
  )
  if (
    !_.isUndefined(valueProp) &&
    _.get(formattedValueProp, 'startDate') !==
      _.get(formattedInputValue, 'startDate') &&
    _.get(formattedValueProp, 'endDate') !==
      _.get(formattedInputValue, 'endDate')
  ) {
    // We ignore values from prop if they reference the same date as the latest
    // input value, to avoid changing what the user has typed while he types it.
    value = formattedValueProp
  }

  return (
    <DatepickerSharedInput
      disabled={disabled}
      input={
        <div className="ranged-datepicker-input">
          <Input
            disabled={disabled}
            onChange={handleStartInputChange}
            placeholder={startPlaceholder}
            value={_.get(value, 'startDate') || ''}
          />
          <Icon
            className="ranged-datepicker-input-separator"
            name="arrow_forward"
          />
          <Input
            disabled={disabled}
            onChange={handleEndInputChange}
            placeholder={endPlaceholder}
            value={_.get(value, 'endDate') || ''}
          />
          <Icon name="date_range" />
        </div>
      }
      picker={
        <RangedDatepicker
          {...pickerProps}
          defaultDates={defaultValue}
          dates={toMomentDates(value)}
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
  disabled: PropTypes.bool,
  displayFormat: PropTypes.string,
  endPlaceholder: PropTypes.string,
  onChange: PropTypes.func,
  pickerProps: PropTypes.object,
  size: sizePropType,
  startPlaceholder: PropTypes.string,
  value: PropTypes.shape({
    startDate: PropTypes.any,
    endDate: PropTypes.any
  })
}

RangedDatepickerInput.defaultProps = {
  displayFormat: 'L',
  pickerProps: {},
  size: Sizes.DEFAULT
}

export default RangedDatepickerInput
