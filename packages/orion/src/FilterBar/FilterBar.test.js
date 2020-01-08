import _ from 'lodash'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import FilterBar from './'

const renderFilterBar = props =>
  render(
    <FilterBar {...props}>
      {_.times(2, index => (
        <FilterBar.Filter
          key={index}
          text={`Filter ${index + 1}`}
          name={`filter${index + 1}`}>
          {({ onChange, value }) => (
            <input
              onChange={event => onChange(event.target.value)}
              placeholder="Input"
              value={value || ''}
            />
          )}
        </FilterBar.Filter>
      ))}
    </FilterBar>
  )

describe('when no initial value is given', () => {
  let renderResult

  beforeEach(() => {
    renderResult = renderFilterBar()
  })

  it('should not render the "Apply" button', () => {
    const { queryByText } = renderResult
    expect(queryByText('Apply')).toBeNull()
  })

  it('should not render the "Clear All" button', () => {
    const { queryByText } = renderResult
    expect(queryByText('Clear All')).toBeNull()
  })
})

describe('when an initial value is given', () => {
  const initialValue = {
    filter1: 'filter1Value',
    filter2: 'filter2Value'
  }
  let renderResult

  beforeEach(() => {
    renderResult = renderFilterBar({ initialValue })
  })

  it('should render the initial value in the filter triggers', () => {
    const { queryByText } = renderResult
    expect(queryByText(initialValue.filter1)).toBeTruthy()
    expect(queryByText(initialValue.filter2)).toBeTruthy()
  })

  describe('when the "Clear All" button is clicked', () => {
    beforeEach(() => {
      const { getByText } = renderResult
      fireEvent.click(getByText('Clear All'))
    })

    it("should render the default text in each filter's trigger", () => {
      const { queryByText } = renderResult

      expect(queryByText(initialValue.filter1)).toBeNull()
      expect(queryByText(initialValue.filter2)).toBeNull()

      expect(queryByText('Filter 1')).toBeTruthy()
      expect(queryByText('Filter 2')).toBeTruthy()
    })
  })
})

describe('when a value is given', () => {
  const value = {
    filter1: 'filter1Value',
    filter2: 'filter2Value'
  }
  let onChange
  let renderResult

  beforeEach(() => {
    onChange = jest.fn()
    renderResult = renderFilterBar({ onChange, value })
  })

  it('should render the given value in the filter triggers', () => {
    const { queryByText } = renderResult
    expect(queryByText(value.filter1)).toBeTruthy()
    expect(queryByText(value.filter2)).toBeTruthy()
  })

  describe('when the "Clear All" button is clicked', () => {
    beforeEach(() => {
      const { getByText } = renderResult
      fireEvent.click(getByText('Clear All'))
    })

    it('should call "onChange" with "null"', () => {
      expect(onChange).toHaveBeenCalledWith(null)
    })
  })
})

describe("when a filter's value changes", () => {
  const newValue = 'New Value'
  let onChange
  let renderResult

  beforeEach(() => {
    onChange = jest.fn()
    renderResult = renderFilterBar({ onChange })
    const { container, getByPlaceholderText, getByText } = renderResult

    // Open the popup.
    fireEvent.click(getByText('Filter 1'))

    // Type on the input.
    const input = getByPlaceholderText('Input')
    fireEvent.change(input, { target: { value: newValue } })

    // Click outside to apply changes.
    fireEvent.mouseUp(container.parentElement)
  })

  it("should render the new pending value in that filter's trigger", () => {
    const { queryByText } = renderResult

    expect(queryByText('Filter 1')).toBeNull()

    const filter1Trigger = queryByText('New Value')
    expect(filter1Trigger).toBeTruthy()
    expect(filter1Trigger.parentElement).toHaveClass('pending')

    const filter2Trigger = queryByText('Filter 2')
    expect(filter2Trigger).toBeTruthy()
    expect(filter2Trigger.parentElement).not.toHaveClass('pending')
  })

  it('should render the "Apply" button', () => {
    const { queryByText } = renderResult
    expect(queryByText('Apply')).toBeTruthy()
  })

  it('should not render the "Clear All" button', () => {
    const { queryByText } = renderResult
    expect(queryByText('Clear All')).toBeNull()
  })

  describe('when the bar\'s "Apply" button is clicked', () => {
    beforeEach(() => {
      const { getByText } = renderResult
      fireEvent.click(getByText('Apply'))
    })

    it("should render the new final value in that filter's trigger", () => {
      const { queryByText } = renderResult

      const filter1Trigger = queryByText('New Value')
      expect(filter1Trigger).toBeTruthy()
      expect(filter1Trigger.parentElement).not.toHaveClass('pending')
    })

    it('should call "onChange" with the new value', () => {
      expect(onChange).toHaveBeenCalledWith({ filter1: newValue })
    })

    it('should not render the "Apply" button', () => {
      const { queryByText } = renderResult
      expect(queryByText('Apply')).toBeNull()
    })

    it('should render the "Clear All" button', () => {
      const { queryByText } = renderResult
      expect(queryByText('Clear All')).toBeTruthy()
    })
  })
})
