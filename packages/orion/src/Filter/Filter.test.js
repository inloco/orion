import keyboardKey from 'keyboard-key'
import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Filter from './'

// `childFn` é só uma função, não um componente. Ignorando o ESLint aqui,
// que reclama de falta de prop types.
// eslint-disable-next-line
const childFn = ({ onChange, value }) => (
  <input
    onChange={event => onChange(event.target.value)}
    placeholder="Input"
    value={value || ''}
  />
)

describe('when the trigger is clicked', () => {
  it('should open/close the popup', () => {
    const triggerText = 'Open'
    const { getByText } = render(<Filter text={triggerText}>{childFn}</Filter>)

    fireEvent.click(getByText(triggerText))
    expect(getByText(triggerText)).toHaveClass('active')

    fireEvent.click(getByText(triggerText))
    expect(getByText(triggerText)).not.toHaveClass('active')
  })

  it('should call the "onOpen" and "onClose"', () => {
    const onOpen = jest.fn()
    const onClose = jest.fn()
    const triggerText = 'Open'
    const { getByText } = render(
      <Filter onClose={onClose} onOpen={onOpen} text={triggerText}>
        {childFn}
      </Filter>
    )

    fireEvent.click(getByText(triggerText))
    expect(onOpen).toHaveBeenCalled()
    expect(onClose).not.toHaveBeenCalled()

    fireEvent.click(getByText(triggerText))
    expect(onClose).toHaveBeenCalled()
  })
})

describe('when an initial value is given', () => {
  const initialValue = 'Initial value'

  it('should render the initial value in the trigger', () => {
    const { queryByText } = render(
      <Filter text="Open" initialValue={initialValue}>
        {childFn}
      </Filter>
    )
    expect(queryByText(initialValue)).toBeTruthy()
  })

  it("should pass the given initial value to the filter's contents", () => {
    const { getByText, getByPlaceholderText } = render(
      <Filter text="Open" initialValue={initialValue}>
        {childFn}
      </Filter>
    )

    fireEvent.click(getByText(initialValue))
    const input = getByPlaceholderText('Input')
    expect(input.value).toEqual(initialValue)
  })
})

describe('when a value is given', () => {
  let renderResult
  let onApply
  const value = 'Controlled value'

  beforeEach(() => {
    onApply = jest.fn()
    renderResult = render(
      <Filter text="Open" onApply={onApply} value={value}>
        {childFn}
      </Filter>
    )
  })

  it('should render the given value in the trigger', () => {
    const { queryByText } = renderResult
    expect(queryByText(value)).toBeTruthy()
  })

  it("should pass the given value to the filter's contents", () => {
    const { getByText, getByPlaceholderText } = renderResult

    fireEvent.click(getByText(value))
    const input = getByPlaceholderText('Input')
    expect(input.value).toEqual(value)
  })

  it('should render a cancel icon', () => {
    const { queryByText } = renderResult
    expect(queryByText('clear')).toBeTruthy()
  })

  describe('when the cancel icon is clicked', () => {
    it('should call "onApply" with "null', () => {
      const { getByText } = renderResult
      fireEvent.click(getByText('clear'))
      expect(onApply).toHaveBeenCalledWith(null)
    })
  })

  describe('when the given "value" prop changes', () => {
    it('should use this new given value in the trigger', () => {
      const { queryByText, rerender } = render(
        <Filter text="Open" value={value}>
          {childFn}
        </Filter>
      )

      const newValue = 'New controlled value'
      rerender(
        <Filter text="Open" value={newValue}>
          {childFn}
        </Filter>
      )
      expect(queryByText(newValue)).toBeTruthy()
    })

    it("should pass this new given value to the filter's contents", () => {
      const { getByText, getByPlaceholderText, rerender } = render(
        <Filter text="Open" value={value}>
          {childFn}
        </Filter>
      )

      const newValue = 'New controlled value'
      rerender(
        <Filter text="Open" value={newValue}>
          {childFn}
        </Filter>
      )

      fireEvent.click(getByText(newValue))
      const input = getByPlaceholderText('Input')
      expect(input.value).toEqual(newValue)
    })
  })
})

describe("when the filter's value changes", () => {
  const newValue = 'New Value'
  let onChange
  let onClose
  let onApply
  let onClear
  let renderResult

  beforeEach(() => {
    onChange = jest.fn()
    onClose = jest.fn()
    onApply = jest.fn()
    onClear = jest.fn()
    renderResult = render(
      <Filter
        text="Open"
        onChange={onChange}
        onClose={onClose}
        onApply={onApply}
        onClear={onClear}>
        {childFn}
      </Filter>
    )
    const { getByPlaceholderText, getByText } = renderResult

    // Open the popup.
    fireEvent.click(getByText('Open'))

    // Type on the input.
    const input = getByPlaceholderText('Input')
    fireEvent.change(input, { target: { value: newValue } })
  })

  it('should not call "onApply" with the new value', () => {
    expect(onApply).not.toHaveBeenCalled()
  })

  it('should call "onChange" with the new value', () => {
    expect(onChange).toHaveBeenCalledWith(newValue)
  })

  describe('when the "apply" button is clicked', () => {
    beforeEach(() => {
      const { getByText } = renderResult
      fireEvent.click(getByText('Apply'))
    })

    it('should render the selected value in the trigger', () => {
      const { queryByText } = renderResult
      expect(queryByText(newValue)).toBeTruthy()
    })

    it('should call "onApply" with the new value', () => {
      expect(onApply).toHaveBeenCalledWith(newValue)
    })

    it('should call "onClose"', () => {
      expect(onClose).toHaveBeenCalled()
    })
  })

  describe('when the "ESC" key is pressed', () => {
    beforeEach(() => {
      const { getByPlaceholderText } = renderResult
      const input = getByPlaceholderText('Input')
      fireEvent.keyDown(input, { key: 'Escape', code: keyboardKey.Escape })
    })

    it('should render the selected value in the trigger', () => {
      const { queryByText } = renderResult
      expect(queryByText(newValue)).toBeTruthy()
    })

    it('should call "onApply" with the new value', () => {
      expect(onApply).toHaveBeenCalledWith(newValue)
    })
  })

  describe('when the "clear" button is clicked', () => {
    beforeEach(() => {
      const { getByText } = renderResult
      fireEvent.click(getByText('Clear'))
    })

    it('should call "onClear"', () => {
      expect(onClear).toHaveBeenCalled()
    })

    it('should call "onChange" with "null"', () => {
      expect(onChange).toHaveBeenCalledWith(null)
    })
  })
})
