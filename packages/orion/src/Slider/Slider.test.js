import React from 'react'
import { render } from '@testing-library/react'

import Slider from './'

it('should not render popup if slider is not focused', () => {
  const { queryByText } = render(<Slider value={30} />)
  expect(queryByText('30')).toBeFalsy()
})

it('should render popup if slider is focused', () => {
  const { queryByText, queryByDisplayValue } = render(<Slider value={30} />)
  queryByDisplayValue('30').focus()
  expect(queryByText('30')).toBeTruthy()
})

it('should render the labels with mask if labelsMask is passed', () => {
  const { queryByText, queryByDisplayValue } = render(
    <Slider min={10} max={70} labelsMask={value => value + '%'} value={30} />
  )
  expect(queryByText('10%')).toBeTruthy()
  expect(queryByText('70%')).toBeTruthy()
  queryByDisplayValue('30').focus()
  expect(queryByText('30%')).toBeTruthy()
})
