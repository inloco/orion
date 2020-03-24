import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import keyboardKey from 'keyboard-key'

import ListInput from './'

const MOCK_VALUES = ['Red', 'Blue', 'Orange']

it('should render initial values when defaultValue is given', () => {
  const { queryByText } = render(<ListInput defaultValue={MOCK_VALUES} />)
  MOCK_VALUES.forEach(value => expect(queryByText(value)).toBeTruthy())
})

it('should trigger the onChange callback when tha value is changed', () => {
  const mockOnChange = jest.fn()
  const { getByPlaceholderText } = render(
    <ListInput onChange={mockOnChange} placeholder="placeholder" />
  )

  const input = getByPlaceholderText('placeholder')

  // adds 'Black'
  fireEvent.change(input, { target: { value: 'Black' } })
  fireEvent.keyDown(input, { keyCode: keyboardKey.Enter })

  // adds 'White'
  fireEvent.change(input, { target: { value: 'White' } })
  fireEvent.keyDown(input, { keyCode: keyboardKey.Tab })

  // adds 'Gray'
  fireEvent.change(input, { target: { value: 'Gray' } })
  fireEvent.keyDown(input, { keyCode: keyboardKey.Comma })

  expect(mockOnChange).toHaveBeenCalledWith(
    {},
    { value: ['Black', 'White', 'Gray'] }
  )

  // removes 'Gray'
  fireEvent.keyDown(input, { keyCode: keyboardKey.Backspace })

  expect(mockOnChange).toHaveBeenLastCalledWith(
    {},
    { value: ['Black', 'White'] }
  )
})
