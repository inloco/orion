import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Dropdown } from '../'

const options = [
  { text: 'Blue', value: 'blue' },
  { text: 'Yellow', value: 'yellow' },
  { text: 'Red', value: 'red' }
]

describe('when the dropdown is loading', () => {
  it('should render a special icon instead of the regular dropdown icon', () => {
    const { container } = render(<Dropdown loading />)

    const iconElement = container.querySelector('.icon')
    expect(iconElement).not.toHaveClass('dropdown-icon')
    expect(iconElement).toHaveClass('loading')
  })
})

describe('when an option is selected', () => {
  let renderResult

  beforeEach(() => {
    renderResult = render(
      <Dropdown
        placeholder="Select Color"
        selection
        multiple="keep"
        inlineMenu
        options={options}
      />
    )

    const { getByText } = renderResult
    fireEvent.click(getByText('Red'))
  })

  it('should render a label with the option', () => {
    const { getAllByText } = renderResult

    const [label] = getAllByText('Red')
    expect(label).toBeTruthy()
    expect(label).toHaveClass('orion label')
  })

  it('should show option on the list, as selected', () => {
    const { getAllByText } = renderResult

    const option = getAllByText('Red')[1]
    expect(option).toBeTruthy()
    expect(option.parentNode).toHaveClass('item active')
  })

  describe('when a selected option is clicked', () => {
    beforeEach(() => {
      const { getAllByText } = renderResult
      fireEvent.click(getAllByText('Red')[1])
    })

    it('should stop rendering a label with the option', () => {
      const { getByText } = renderResult
      expect(getByText('Red')).not.toHaveClass('orion label')
    })

    it('should show option on the list, as unselected', () => {
      const { getByText } = renderResult

      const option = getByText('Red')
      expect(option.parentNode).toHaveClass('item')
      expect(option.parentNode).not.toHaveClass('active')
    })
  })
})

describe('when using a multiple dropdown without selected labels ', () => {
  it('should render a special element with the given placeholder instead of a real placeholder', () => {
    const placeholder = 'Select Color'
    const { queryByText, queryByPlaceholderText } = render(
      <Dropdown placeholder={placeholder} search selection options={options} />
    )

    expect(queryByText(placeholder)).toBeTruthy()
    expect(queryByPlaceholderText(placeholder)).toBeNull()
  })

  describe('when dropdown shows no selected labels', () => {
    it('should render the given placeholder as a real placeholder', () => {
      const placeholder = 'Select Color'
      const { queryByText, queryByPlaceholderText } = render(
        <Dropdown
          noSelectedLabels
          placeholder={placeholder}
          search
          selection
          options={options}
        />
      )

      expect(queryByPlaceholderText(placeholder)).toBeTruthy()
      expect(queryByText(placeholder)).toBeNull()
    })
  })
})
