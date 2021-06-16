import React from 'react'
import { fireEvent, render } from '@testing-library/react'

// This import is needed to prevent warnings on Test envirionment
import Icon from '../Icon' // eslint-disable-line

import Pagination from './'

describe('Exceptions', () => {
  it('should not render if pageSize < 1', () => {
    const { container } = render(<Pagination totalItems={40} pageSize={0} />)
    expect(container.firstChild).toBeNull()
  })

  it('should render first page if activePage is < 1', () => {
    const { queryByText } = render(
      <Pagination activePage={-1} pageSize={10} totalItems={20} />
    )
    const expectedResult = '1-10'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should render last page if activePage bigger than possible', () => {
    const { queryByText } = render(
      <Pagination activePage={5} pageSize={10} totalItems={20} />
    )
    const expectedResult = '11-20'
    expect(queryByText(expectedResult)).toBeTruthy()
  })
})

describe('Happy path', () => {
  it('should render one page if totalItems <= 1', () => {
    const { queryByText } = render(<Pagination totalItems={0} />)
    const expectedResult = 'results'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should render one page if totalItems <= pageSize', () => {
    const { queryByText } = render(<Pagination totalItems={20} pageSize={30} />)
    const expectedResult = '20'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should show items range starting with 1 when there is no activePage set', () => {
    const { queryByText } = render(<Pagination pageSize={10} totalItems={20} />)
    const expectedResult = '1-10'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should show items range ending with "totalItems" when on the last page', () => {
    const { queryByText } = render(
      <Pagination activePage={2} pageSize={10} totalItems={15} />
    )
    const expectedResult = '11-15'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should show items range ending with the activePage multiplied by pageSize when not on the last page', () => {
    const { queryByText } = render(
      <Pagination activePage={2} totalItems={35} pageSize={15} />
    )
    const expectedResult = '16-30'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  it('should show the total number of items', () => {
    const { queryByText } = render(<Pagination totalItems={35} />)
    const expectedResult = '35'
    expect(queryByText(expectedResult)).toBeTruthy()
  })

  describe('when the i18n prop is passed', () => {
    it('should show the correct strings', () => {
      const { getByText, queryByText } = render(
        <Pagination
          activePage={1}
          pageSize={10}
          totalItems={35}
          i18n={{ of: 'of', value: 'many', results: 'results' }}
        />
      )
      expect(getByText('1-10')).toBeInTheDocument()
      expect(getByText('of')).toBeInTheDocument()
      expect(getByText('many')).toBeInTheDocument()
      expect(getByText('results')).toBeInTheDocument()
      expect(queryByText('35')).not.toBeInTheDocument()
    })
  })

  describe('buttons', () => {
    it('should show previous button disabled if it is on first page', () => {
      const { queryByTestId } = render(
        <Pagination activePage={1} pageSize={10} totalItems={20} />
      )
      expect(queryByTestId('previous')).toBeDisabled()
    })

    it('should show next button disabled if it is on last page', () => {
      const { queryByTestId } = render(
        <Pagination activePage={2} pageSize={10} totalItems={20} />
      )
      expect(queryByTestId('next')).toBeDisabled()
    })

    it('should show both buttons disabled if disabled prop is passed', () => {
      const { queryByTestId } = render(
        <Pagination activePage={2} disabled pageSize={10} totalItems={50} />
      )
      expect(queryByTestId('previous')).toBeDisabled()
      expect(queryByTestId('next')).toBeDisabled()
    })

    it('should not show buttons if totalItems <= pageSize ', () => {
      const { queryByTestId } = render(
        <Pagination pageSize={10} totalItems={10} />
      )
      expect(queryByTestId('previous')).toBeFalsy()
      expect(queryByTestId('next')).toBeFalsy()
    })

    it('should call "onChange" with the next active page when the "next" button is clicked', () => {
      const handleChange = jest.fn()
      const { queryByTestId } = render(
        <Pagination
          activePage={1}
          pageSize={10}
          totalItems={20}
          onPageChange={handleChange}
        />
      )
      fireEvent.click(queryByTestId('next'))

      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          activePage: 2
        })
      )
    })

    it('should call "onPageChange" with the previous active page when the previous button is clicked', () => {
      const handleChange = jest.fn()
      const { queryByTestId } = render(
        <Pagination
          activePage={2}
          pageSize={10}
          totalItems={20}
          onPageChange={handleChange}
        />
      )
      fireEvent.click(queryByTestId('previous'))

      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          activePage: 1
        })
      )
    })
  })
})
