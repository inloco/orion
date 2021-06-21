import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

// This import is needed to prevent warnings on Test envirionment
import Icon from '../Icon' // eslint-disable-line

import PaginationEndless from './'

const singlePageLabel = 'results'
const label = 'of many results'

describe('Exceptions', () => {
  it('should not render if pageSize < 1', () => {
    const { container } = render(
      <PaginationEndless
        activePage={0}
        pageSize={0}
        activePageItemCount={0}
        hasNextPage={false}
      />
    )
    expect(container.firstChild).toBeNull()
  })
})

describe('Endless Pagination', () => {
  describe('when there is only one page', () => {
    it('should render the single page label', () => {
      render(
        <PaginationEndless
          activePage={1}
          pageSize={10}
          activePageItemCount={5}
          hasNextPage={false}
          i18n={{
            singlePageLabel,
            label
          }}
        />
      )

      expect(screen.getByText('5')).toBeInTheDocument()
      expect(screen.getByText(singlePageLabel)).toBeInTheDocument()
      expect(screen.queryByText(label)).not.toBeInTheDocument()
    })
  })

  describe('when there are multiple pages', () => {
    it('should render the multiple page label', () => {
      render(
        <PaginationEndless
          activePage={2}
          pageSize={10}
          activePageItemCount={10}
          hasNextPage={true}
          i18n={{
            singlePageLabel,
            label
          }}
        />
      )

      expect(screen.getByText('11-20')).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
      expect(screen.queryByText(singlePageLabel)).not.toBeInTheDocument()
    })
  })

  describe('buttons', () => {
    it('should show previous button disabled if it is on first page', () => {
      render(
        <PaginationEndless
          activePage={1}
          pageSize={10}
          activePageItemCount={5}
          hasNextPage={true}
        />
      )
      expect(screen.queryByTestId('previous')).toBeDisabled()
    })

    it('should show next button disabled if it is on last page', () => {
      render(
        <PaginationEndless
          activePage={2}
          pageSize={10}
          activePageItemCount={5}
          hasNextPage={false}
        />
      )
      expect(screen.queryByTestId('next')).toBeDisabled()
    })

    it('should show both buttons disabled if disabled prop is passed', () => {
      render(
        <PaginationEndless
          activePage={2}
          pageSize={10}
          activePageItemCount={10}
          hasNextPage={true}
          disabled
        />
      )
      expect(screen.queryByTestId('previous')).toBeDisabled()
      expect(screen.queryByTestId('next')).toBeDisabled()
    })

    it('should not show buttons if on the first page and doesnt have next page ', () => {
      render(
        <PaginationEndless
          activePage={1}
          pageSize={10}
          activePageItemCount={5}
          hasNextPage={false}
        />
      )

      expect(screen.queryByTestId('previous')).not.toBeInTheDocument()
      expect(screen.queryByTestId('next')).not.toBeInTheDocument()
    })

    it('should call "onChange" with the next active page when the "next" button is clicked', () => {
      const handleChange = jest.fn()
      render(
        <PaginationEndless
          activePage={2}
          pageSize={10}
          activePageItemCount={10}
          hasNextPage={true}
          onPageChange={handleChange}
        />
      )
      fireEvent.click(screen.queryByTestId('next'))

      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          activePage: 3
        })
      )
    })

    it('should call "onPageChange" with the previous active page when the previous button is clicked', () => {
      const handleChange = jest.fn()
      render(
        <PaginationEndless
          activePage={2}
          pageSize={10}
          activePageItemCount={10}
          hasNextPage={true}
          onPageChange={handleChange}
        />
      )
      fireEvent.click(screen.queryByTestId('previous'))

      expect(handleChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          activePage: 1
        })
      )
    })
  })
})
