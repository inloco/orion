import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import MultiSelectFilter from './'

const options = [
  { text: 'Blue', value: 'blue' },
  { text: 'Yellow', value: 'yellow' },
  { text: 'Red', value: 'red' }
]

describe('when filter selections are applied', () => {
  let renderResult

  beforeEach(() => {
    const filterText = 'Pick your colors'
    renderResult = render(
      <MultiSelectFilter
        options={options}
        placeholder="Select Color"
        text={filterText}
      />
    )

    const { getByText } = renderResult

    // Open the popup.
    fireEvent.click(getByText(filterText))

    // Select colors.
    fireEvent.click(getByText('Red'))
    fireEvent.click(getByText('Blue'))

    // Click the "Apply" button.
    fireEvent.click(getByText('Apply'))
  })

  it("should render the selected options as the filter's text", () => {
    const { queryByText } = renderResult
    expect(queryByText('Red +1')).toBeTruthy()
  })
})
