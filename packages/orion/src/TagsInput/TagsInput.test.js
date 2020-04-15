import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import keyboardKey from 'keyboard-key'

import TagsInput from '.'

const MOCK_VALUES = ['Red', 'Blue', 'Orange']

it('should render initial values when defaultValue is given', () => {
  const { queryByText } = render(<TagsInput defaultValue={MOCK_VALUES} />)
  MOCK_VALUES.forEach(value => expect(queryByText(value)).toBeTruthy())
})

it('should trigger the onChange callback when the value is changed', () => {
  const mockOnChange = jest.fn()
  const { getByRole, getByText } = render(
    <TagsInput onChange={mockOnChange} placeholder="placeholder" />
  )

  const input = getByRole('combobox').childNodes[0]

  // adds 'Black'
  fireEvent.change(input, { target: { value: 'Black' } })
  fireEvent.keyDown(input, { keyCode: keyboardKey.Enter })

  // adds 'White'
  fireEvent.change(input, { target: { value: 'White' } })
  fireEvent.keyDown(input, { keyCode: keyboardKey.Tab })

  // adds 'Gray'
  fireEvent.change(input, { target: { value: 'Gray' } })
  fireEvent.keyDown(input, { keyCode: keyboardKey.Comma })

  // types 'Red' and do not press enter
  fireEvent.change(input, { target: { value: 'Red' } })

  expect(mockOnChange).toHaveBeenCalledWith(expect.anything(), {
    value: ['Black', 'White', 'Gray', 'Red']
  })

  // removes 'Gray' by clicking in the remove icon in tag
  fireEvent.click(getByText('Gray').children[0])

  expect(mockOnChange).toHaveBeenLastCalledWith(expect.anything(), {
    value: ['Black', 'White', 'Red']
  })
})

it('should trigger the onChange callback when multiple values are pasted', () => {
  const mockOnChange = jest.fn()
  const { getByRole, getByText } = render(
    <TagsInput onChange={mockOnChange} placeholder="placeholder" />
  )

  const input = getByRole('combobox').childNodes[0]

  // pastes comma separated values
  fireEvent.change(input, {
    target: { value: 'Red, Pink ,Yellow, Gray,,,,Black' }
  })

  const expected = ['Red', 'Pink', 'Yellow', 'Gray', 'Black']

  expect(mockOnChange).toHaveBeenCalledWith(expect.anything(), {
    value: expected
  })

  expected.forEach(value => expect(getByText(value)).toHaveClass('orion label'))
})
