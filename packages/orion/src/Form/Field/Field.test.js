import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Form, Input, Dropdown } from '../..'

const label = 'Full name'
const id = 'fullName'
const placeholder = 'Enter your full name'
const value = 'a name'

const floatingLabelCssClass = 'floatingLabel'
const filledCssClass = 'filled'

const getFormField = container => container.querySelector('.field')

describe('when the fields are passed as child', () => {
  describe('when the child is an Input and the size is default', () => {
    it('should have a floating label', () => {
      const { container } = render(
        <Form.Field>
          <label>{label}</label>
          <Input placeholder={placeholder} />
        </Form.Field>
      )

      const formField = getFormField(container)
      expect(formField).toHaveClass(floatingLabelCssClass)
      expect(formField.classList.contains(filledCssClass)).toBeFalsy()
    })

    it('should be filled if the Input has a value', () => {
      const { container } = render(
        <Form.Field>
          <label>{label}</label>
          <Input placeholder={placeholder} value={value} />
        </Form.Field>
      )

      const formField = getFormField(container)
      expect(formField).toHaveClass(floatingLabelCssClass)
      expect(formField).toHaveClass(filledCssClass)
    })
  })

  describe('the child is a Dropdown and the size is default', () => {
    it('should have a floating label', () => {
      const { container } = render(
        <Form.Field>
          <label>{label}</label>
          <Dropdown placeholder={placeholder} />
        </Form.Field>
      )

      const formField = getFormField(container)
      expect(formField).toHaveClass(floatingLabelCssClass)
    })
  })

  describe('when the child is an Input and the size is small', () => {
    it('should not have a floating label', () => {
      const { container } = render(
        <Form.Field>
          <label>{label}</label>
          <Input size="small" placeholder={placeholder} />
        </Form.Field>
      )

      const formField = getFormField(container)
      expect(formField.classList.contains(floatingLabelCssClass)).toBeFalsy()
    })
  })

  it('should call onChange when the value changes', () => {
    const onChangeMock = jest.fn()
    const { queryByLabelText } = render(
      <Form.Field>
        <label htmlFor={id}>{label}</label>
        <Input id={id} placeholder={placeholder} onChange={onChangeMock} />
      </Form.Field>
    )

    const value = 'John Doe'
    fireEvent.change(queryByLabelText(label), {
      target: { value }
    })

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        value
      })
    )
  })
})

describe('when the fields are passed as control', () => {
  describe('when the control is an Input and the size is default', () => {
    it('should have a floating label', () => {
      const { container } = render(
        <Form.Input label={label} placeholder={placeholder} />
      )

      const formField = getFormField(container)
      expect(formField).toHaveClass(floatingLabelCssClass)
      expect(formField.classList.contains(filledCssClass)).toBeFalsy()
    })

    it('should be filled if the Input has a value', () => {
      const { container } = render(
        <Form.Input label={label} placeholder={placeholder} value={value} />
      )

      const formField = getFormField(container)
      expect(formField).toHaveClass(floatingLabelCssClass)
      expect(formField).toHaveClass(filledCssClass)
    })
  })

  describe('when the control is a Dropdown and the size is default', () => {
    it('should have a floating label', () => {
      const { container } = render(
        <Form.Dropdown label={label} placeholder={placeholder} />
      )

      const formField = getFormField(container)
      expect(formField).toHaveClass(floatingLabelCssClass)
    })
  })

  describe('when the control is a Dropdown and the size is small', () => {
    it('should not have a floating label', () => {
      const { container } = render(
        <Form.Dropdown label={label} size="small" placeholder={placeholder} />
      )

      const formField = getFormField(container)
      expect(formField.classList.contains(floatingLabelCssClass)).toBeFalsy()
    })
  })

  it('should call onChange when the value changes', () => {
    const onChangeMock = jest.fn()
    const { queryByLabelText } = render(
      <Form.Input
        label={label}
        id={id}
        placeholder={placeholder}
        onChange={onChangeMock}
      />
    )

    const value = 'John Doe'

    fireEvent.change(queryByLabelText(label), {
      target: { value }
    })

    expect(onChangeMock).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        value
      })
    )
  })
})
