import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DayPickerRangeController } from 'react-dates'

import ReactDatesDatepicker from '../Datepicker/ReactDatesDatepicker'
import { toMoment } from '../utils/datetime'

const RangedDatepicker = ({
  dates: dateProp,
  defaultDates,
  focusedInput: focusedInputProp,
  onDatesChange,
  onFocusChange,
  ...otherProps
}) => {
  const [datesState, setDates] = useState(defaultDates)
  const handleDatesChange = newDates => {
    setDates(newDates)
    onDatesChange && onDatesChange(newDates)
  }
  const dates = dateProp || datesState

  const [focusedInputState, setFocusedInput] = useState()
  const focusedInput = focusedInputProp || focusedInputState
  const handleFocusChange = newFocusedInput => {
    setFocusedInput(newFocusedInput)
    onFocusChange && onFocusChange(newFocusedInput)
  }

  return (
    <div className="orion ranged-datepicker">
      <ReactDatesDatepicker
        as={DayPickerRangeController}
        startDate={toMoment(_.get(dates, 'startDate'))}
        endDate={toMoment(_.get(dates, 'endDate'))}
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput || 'startDate'}
        onFocusChange={handleFocusChange}
        {...otherProps}
      />
    </div>
  )
}

RangedDatepicker.propTypes = {
  dates: PropTypes.shape({
    startDate: PropTypes.any,
    endDate: PropTypes.any
  }),
  defaultDates: PropTypes.shape({
    startDate: PropTypes.any,
    endDate: PropTypes.any
  }),
  focusedInput: PropTypes.node,
  onDatesChange: PropTypes.func,
  onFocusChange: PropTypes.func
}

export default RangedDatepicker
