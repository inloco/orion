import moment from 'moment'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { DatepickerInput } from '../'

const DAY = '1'
const dayMoment = moment()
dayMoment.set('date', DAY)
const DATE = dayMoment.format('MM/DD/YYYY')

describe('when the input is clicked', () => {
  const placeholder = 'Choose a date'
  let renderResult

  beforeEach(() => {
    renderResult = render(<DatepickerInput placeholder={placeholder} />)

    const { getByTestId } = renderResult
    fireEvent.click(getByTestId('datepicker-trigger'))
  })

  it('should open the datepicker calendar', () => {
    const { queryByText } = renderResult
    const sundayText = queryByText('Su')
    expect(sundayText).toBeTruthy()
  })

  describe('when a date is selected from the calendar', () => {
    beforeEach(() => {
      const { getAllByText } = renderResult
      const dayElement = getAllByText(DAY)[1]
      fireEvent.click(dayElement)
    })

    it('should display the selected date in the input', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue(DATE)).toBeTruthy()
    })

    it('should show the chosen date as selected in the calendar', () => {
      const { getAllByText } = renderResult
      const dayElement = getAllByText(DAY)[1]
      expect(dayElement).toHaveClass('CalendarDay__selected')
    })
  })

  describe('when a new date is typed in the input', () => {
    beforeEach(() => {
      const { getByPlaceholderText } = renderResult
      const inputElement = getByPlaceholderText(placeholder)
      fireEvent.change(inputElement, { target: { value: DATE } })
    })

    it('should display the new date in the input', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue(DATE)).toBeTruthy()
    })

    it('should show the chosen date as selected in the calendar', () => {
      const { getAllByText } = renderResult
      const dayElement = getAllByText(DAY)[1]
      expect(dayElement).toHaveClass('CalendarDay__selected')
    })
  })

  describe('when an invalid date is typed in the input', () => {
    beforeEach(() => {
      const { getByPlaceholderText } = renderResult
      const inputElement = getByPlaceholderText(placeholder)
      fireEvent.change(inputElement, { target: { value: 'Not a date' } })
    })

    it('should display the typed value in the input', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue('Not a date')).toBeTruthy()
    })

    it('should keep showing the typed value if the "value" prop receives an invalid value ', () => {
      const { rerender } = renderResult
      rerender(
        <DatepickerInput
          placeholder={placeholder}
          value={moment('Also not a date')}
        />
      )

      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue('Not a date')).toBeTruthy()
    })
  })
})
