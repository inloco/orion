import moment from 'moment'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { RangedDatepickerInput } from '../'

const FIRST_DAY = '1'
const SECOND_DAY = '2'
const TWO_DAYS_AFTER = '3'

const firstDayMoment = moment()
firstDayMoment.set('date', FIRST_DAY)
const secondDayMoment = moment()
secondDayMoment.set('date', SECOND_DAY)
const twoDaysAfterMoment = moment()
twoDaysAfterMoment.set('date', TWO_DAYS_AFTER)

const FIRST_DAY_DATE = firstDayMoment.format('MM/DD/YYYY')
const TWO_DAYS_AFTER_DATE = twoDaysAfterMoment.format('MM/DD/YYYY')

describe('when the input is clicked', () => {
  const startPlaceholder = 'Start'
  const endPlaceholder = 'End'
  let renderResult

  beforeEach(() => {
    renderResult = render(
      <RangedDatepickerInput
        startPlaceholder={startPlaceholder}
        endPlaceholder={endPlaceholder}
      />
    )

    const { getByTestId } = renderResult
    fireEvent.click(getByTestId('datepicker-trigger'))
  })

  it('should open the ranged datepicker calendar', () => {
    const { queryByText } = renderResult
    const sundayText = queryByText('Su')
    expect(sundayText).toBeTruthy()
  })

  describe('when a date is selected from the calendar', () => {
    beforeEach(() => {
      const { getAllByText } = renderResult
      const dayElement = getAllByText(FIRST_DAY)[1]
      fireEvent.click(dayElement)
    })

    it('should display the selected date in the input', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue(FIRST_DAY_DATE)).toBeTruthy()
    })

    it('should show the chosen date as selected in the calendar', () => {
      const { getAllByText } = renderResult
      const dayElement = getAllByText(FIRST_DAY)[1]
      expect(dayElement).toHaveClass('CalendarDay__selected')
    })

    describe('when a second date is selected from the calendar', () => {
      beforeEach(() => {
        const { getAllByText } = renderResult
        const dayElement = getAllByText(TWO_DAYS_AFTER)[1]
        fireEvent.click(dayElement)
      })

      it('should display both selected dates in the input', () => {
        const { queryByDisplayValue } = renderResult
        expect(queryByDisplayValue(FIRST_DAY_DATE)).toBeTruthy()
        expect(queryByDisplayValue(TWO_DAYS_AFTER_DATE)).toBeTruthy()
      })

      it('should show the chosen date as selected in the calendar', () => {
        const { getAllByText } = renderResult

        const startDayElement = getAllByText(FIRST_DAY)[1]
        expect(startDayElement).toHaveClass(
          'CalendarDay__selected CalendarDay__selected_start'
        )

        const middleDayElement = getAllByText(SECOND_DAY)[1]
        expect(middleDayElement).toHaveClass('CalendarDay__selected_span')

        const endDayElement = getAllByText(TWO_DAYS_AFTER)[1]
        expect(endDayElement).toHaveClass(
          'CalendarDay__selected CalendarDay__selected_end'
        )
      })
    })
  })

  describe('when a new date range is typed in the inpupt', () => {
    beforeEach(() => {
      const { getByPlaceholderText } = renderResult

      let inputElement = getByPlaceholderText(startPlaceholder)
      fireEvent.change(inputElement, { target: { value: FIRST_DAY_DATE } })

      inputElement = getByPlaceholderText(endPlaceholder)
      fireEvent.change(inputElement, { target: { value: TWO_DAYS_AFTER_DATE } })
    })

    it('should display the new dates in the input', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue(FIRST_DAY_DATE)).toBeTruthy()
      expect(queryByDisplayValue(TWO_DAYS_AFTER_DATE)).toBeTruthy()
    })

    it('should show the chosen date as selected in the calendar', () => {
      const { getAllByText } = renderResult

      const startDayElement = getAllByText(FIRST_DAY)[1]
      expect(startDayElement).toHaveClass(
        'CalendarDay__selected CalendarDay__selected_start'
      )

      const middleDayElement = getAllByText(SECOND_DAY)[1]
      expect(middleDayElement).toHaveClass('CalendarDay__selected_span')

      const endDayElement = getAllByText(TWO_DAYS_AFTER)[1]
      expect(endDayElement).toHaveClass(
        'CalendarDay__selected CalendarDay__selected_end'
      )
    })
  })

  describe('when an invalid date is typed in the input', () => {
    beforeEach(() => {
      const { getByPlaceholderText } = renderResult
      const inputElement = getByPlaceholderText(startPlaceholder)
      fireEvent.change(inputElement, { target: { value: 'Not a date' } })
    })

    it('should display the typed value in the input', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue('Not a date')).toBeTruthy()
    })

    it('should keep showing the typed value if the "value" prop receives an invalid value ', () => {
      const { rerender } = renderResult
      rerender(
        <RangedDatepickerInput
          startPlaceholder={startPlaceholder}
          endPlaceholder={endPlaceholder}
          value={{
            startDate: moment('Also not a date')
          }}
        />
      )

      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue('Not a date')).toBeTruthy()
    })
  })
})
