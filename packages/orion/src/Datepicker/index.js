import { toMoment } from '../utils/datetime'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { DayPickerSingleDateController } from 'react-dates'

import ReactDatesDatepicker from './ReactDatesDatepicker'

const Datepicker = ({
  date: dateProp,
  defaultDate,
  onDateChange,
  ...otherProps
}) => {
  const [dateState, setDate] = useState(defaultDate)
  const handleChange = newDate => {
    setDate(newDate)
    onDateChange && onDateChange(newDate)
  }

  const date = dateProp || dateState
  return (
    <div className="orion datepicker">
      <ReactDatesDatepicker
        as={DayPickerSingleDateController}
        date={toMoment(date)}
        onDateChange={handleChange}
        {...otherProps}
      />
    </div>
  )
}

Datepicker.propTypes = {
  date: PropTypes.any,
  defaultDate: PropTypes.any,
  onDateChange: PropTypes.func
}

export default Datepicker
