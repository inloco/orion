import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'

import NotificationCenter from './index'

it('should show a success notification', async () => {
  const successMessage = 'Success Message'
  const buttonText = 'Click me'
  const { getByText, queryByText } = render(
    <>
      <NotificationCenter />
      <button onClick={() => NotificationCenter.success(successMessage)}>
        {buttonText}
      </button>
    </>
  )

  fireEvent.click(getByText(buttonText))

  const message = await waitForElement(() => getByText(successMessage))
  expect(message).toBeTruthy()

  const title = queryByText('Success')
  expect(title).toBeTruthy()
})

it('should show an inline notification', async () => {
  const errorMessage = 'Error Message'
  const buttonText = 'Click me'
  const { getByText, queryByText } = render(
    <>
      <NotificationCenter />
      <button onClick={() => NotificationCenter.inlineError(errorMessage)}>
        {buttonText}
      </button>
    </>
  )

  fireEvent.click(getByText(buttonText))

  const message = await waitForElement(() => getByText(errorMessage))
  expect(message).toBeTruthy()

  const title = queryByText('Success')
  expect(title).toBeFalsy()
})

it('should not show the same notification twice', async () => {
  const warningMessage = 'Warning Message'
  const buttonText = 'Click me'
  const { getByText, getAllByText } = render(
    <>
      <NotificationCenter />
      <button onClick={() => NotificationCenter.warning(warningMessage)}>
        {buttonText}
      </button>
    </>
  )

  fireEvent.click(getByText(buttonText))
  fireEvent.click(getByText(buttonText))

  const notification = await waitForElement(() => getAllByText(warningMessage))

  expect(notification.length).toEqual(1)
})
