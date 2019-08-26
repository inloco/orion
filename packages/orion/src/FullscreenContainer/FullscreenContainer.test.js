import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { FullscreenContainer, Button } from '../'

describe('when using the FullscreenContainer', () => {
  it('should only render the trigger component', () => {
    const { queryByText } = render(
      <FullscreenContainer trigger={<Button>Open</Button>} title="My Title">
        My Content
      </FullscreenContainer>
    )

    expect(queryByText('Open')).toBeTruthy()
    expect(queryByText('My Title')).toBeFalsy()
    expect(queryByText('My Content')).toBeFalsy()
    expect(queryByText('close')).toBeFalsy()
  })

  it('should render the content when the trigger is clicked', () => {
    const onOpen = jest.fn()
    const { queryByText } = render(
      <FullscreenContainer
        trigger={<Button>Open</Button>}
        title="My Title"
        onOpen={onOpen}>
        My Content
      </FullscreenContainer>
    )

    fireEvent.click(queryByText('Open'))

    expect(queryByText('Open')).toBeTruthy()
    expect(queryByText('My Title')).toBeTruthy()
    expect(queryByText('My Content')).toBeTruthy()
    expect(queryByText('close')).toBeTruthy()

    expect(onOpen).toHaveBeenCalled()
  })

  it('should dismiss the content when the close is clicked', () => {
    const onClose = jest.fn()
    const { queryByText } = render(
      <FullscreenContainer
        trigger={<Button>Open</Button>}
        title="My Title"
        onClose={onClose}>
        My Content
      </FullscreenContainer>
    )

    fireEvent.click(queryByText('Open'))
    fireEvent.click(queryByText('close'))

    expect(queryByText('My Title')).toBeFalsy()
    expect(queryByText('My Content')).toBeFalsy()
    expect(queryByText('close')).toBeFalsy()

    expect(onClose).toHaveBeenCalled()
  })
})
