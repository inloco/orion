import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import Label from './'

it('should not render remove button if no "onRemove" prop was given', () => {
  const { queryByText } = render(<Label />)
  expect(queryByText('clear')).toBeFalsy()
})

it('should call "onRemove" prop when the remove button is clicked', () => {
  const onRemove = jest.fn()
  const { getByText } = render(<Label onRemove={onRemove} />)

  fireEvent.click(getByText('clear'))
  expect(onRemove).toHaveBeenCalled()
})
