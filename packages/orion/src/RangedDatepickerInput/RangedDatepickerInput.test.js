import moment from 'moment'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { RangedDatepickerInput } from '../'

describe('when the input is clicked', () => {
  const placeholder = 'Choose a date range'
  let renderResult

  beforeEach(() => {
    renderResult = render(<RangedDatepickerInput placeholder={placeholder} />)

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
      const dayElement = getAllByText('20')[1]
      fireEvent.click(dayElement)
    })

    it('should display the selected date in the input with an unknown end date', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue('02/20/2020 - ?')).toBeTruthy()
    })

    it('should show the chosen date as selected in the calendar', () => {
      const { getAllByText } = renderResult
      const dayElement = getAllByText('20')[1]
      expect(dayElement).toHaveClass('CalendarDay__selected')
    })

    describe('when a second date is selected from the calendar', () => {
      beforeEach(() => {
        const { getAllByText } = renderResult
        const dayElement = getAllByText('22')[1]
        fireEvent.click(dayElement)
      })

      it('should display the selected date in the input with an unknown end date', () => {
        const { queryByDisplayValue } = renderResult
        expect(queryByDisplayValue('02/20/2020 - 02/22/2020')).toBeTruthy()
      })

      it('should show the chosen date as selected in the calendar', () => {
        const { getAllByText } = renderResult

        const startDayElement = getAllByText('20')[1]
        expect(startDayElement).toHaveClass(
          'CalendarDay__selected CalendarDay__selected_start'
        )

        const middleDayElement = getAllByText('21')[1]
        expect(middleDayElement).toHaveClass('CalendarDay__selected_span')

        const endDayElement = getAllByText('22')[1]
        expect(endDayElement).toHaveClass(
          'CalendarDay__selected CalendarDay__selected_end'
        )
      })
    })
  })

  describe('when a new date is typed in the input', () => {
    beforeEach(() => {
      const { getByPlaceholderText } = renderResult
      const inputElement = getByPlaceholderText(placeholder)
      fireEvent.change(inputElement, {
        target: { value: '02/22/2020 - 02/24/2020' }
      })
    })

    it('should display the new date in the input', () => {
      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue('02/22/2020 - 02/24/2020')).toBeTruthy()
    })

    it('should show the chosen date as selected in the calendar', () => {
      const { getAllByText } = renderResult

      const startDayElement = getAllByText('22')[1]
      expect(startDayElement).toHaveClass(
        'CalendarDay__selected CalendarDay__selected_start'
      )

      const middleDayElement = getAllByText('23')[1]
      expect(middleDayElement).toHaveClass('CalendarDay__selected_span')

      const endDayElement = getAllByText('24')[1]
      expect(endDayElement).toHaveClass(
        'CalendarDay__selected CalendarDay__selected_end'
      )
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
        <RangedDatepickerInput
          placeholder={placeholder}
          value={{
            startDate: moment('Also not a date'),
            endDate: moment('Also not a date')
          }}
        />
      )

      const { queryByDisplayValue } = renderResult
      expect(queryByDisplayValue('Not a date')).toBeTruthy()
    })
  })
})
