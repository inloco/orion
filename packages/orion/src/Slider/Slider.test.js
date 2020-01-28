import React from 'react'
import { render } from '@testing-library/react'

import Slider from './'

it('should show popup if slider is focused', () => {
  const { queryByText, queryByDisplayValue, debug } = render(
    <Slider value={30} />
  )

  console.log(debug())
  queryByDisplayValue('30').focus()
  expect(queryByText('30')).toBeVisible()
})

it('should show the labels with mask if labelsMask is passed', () => {
  const { queryByText, queryByDisplayValue } = render(
    <Slider min={10} max={70} labelsMask={value => value + '%'} value={30} />
  )
  expect(queryByText('10%')).toBeTruthy()
  expect(queryByText('70%')).toBeTruthy()
  queryByDisplayValue('30').focus()
  expect(queryByText('30%')).toBeVisible()
})
