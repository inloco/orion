import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

// This import is needed to prevent warnings on Test envirionment
import Icon from '../Icon' // eslint-disable-line

import Pagination from './'

describe('Using TotalItems', () => {
  describe('Exceptions', () => {
    it('should not render if pageSize < 1', () => {
      const { container } = render(<Pagination totalItems={40} pageSize={0} />)

      expect(container.firstChild).toBeNull()
    })

    it('should render first page if activePage is < 1', () => {
      render(<Pagination activePage={-1} pageSize={10} totalItems={20} />)

      expect(screen.getByText('1-10')).toBeInTheDocument()
    })

    it('should render last page if activePage bigger than possible', () => {
      render(<Pagination activePage={5} pageSize={10} totalItems={20} />)

      expect(screen.getByText('11-20')).toBeInTheDocument()
    })
  })

  describe('Pagination', () => {
    it('should render one page if totalItems <= 1', () => {
      render(<Pagination totalItems={-1} />)

      expect(screen.getByText('0')).toBeInTheDocument()
      expect(screen.getByText('results')).toBeInTheDocument()
    })

    it('should render one page if totalItems == 0', () => {
      render(<Pagination totalItems={0} />)

      expect(screen.getByText('0')).toBeInTheDocument()
      expect(screen.getByText('results')).toBeInTheDocument()
    })

    it('should render one page if totalItems <= pageSize', () => {
      render(<Pagination totalItems={20} pageSize={30} />)

      expect(screen.getByText('20')).toBeInTheDocument()
    })

    it('should show items range starting with 1 when there is no activePage set', () => {
      render(<Pagination pageSize={10} totalItems={20} />)

      expect(screen.getByText('1-10')).toBeInTheDocument()
    })

    it('should show items range ending with "totalItems" when on the last page', () => {
      render(<Pagination activePage={2} pageSize={10} totalItems={15} />)

      expect(screen.getByText('11-15')).toBeInTheDocument()
    })

    it('should show items range ending with the activePage multiplied by pageSize when not on the last page', () => {
      render(<Pagination activePage={2} totalItems={35} pageSize={15} />)

      expect(screen.getByText('16-30')).toBeInTheDocument()
    })

    it('should show the total number of items', () => {
      render(<Pagination totalItems={35} />)

      expect(screen.getByText('35')).toBeInTheDocument()
    })

    describe('buttons', () => {
      it('should show previous button disabled if it is on first page', () => {
        render(<Pagination activePage={1} pageSize={10} totalItems={20} />)
        expect(screen.queryByTestId('previous')).toBeDisabled()
      })

      it('should show next button disabled if it is on last page', () => {
        render(<Pagination activePage={2} pageSize={10} totalItems={20} />)
        expect(screen.queryByTestId('next')).toBeDisabled()
      })

      it('should show both buttons disabled if disabled prop is passed', () => {
        render(
          <Pagination activePage={2} disabled pageSize={10} totalItems={50} />
        )

        expect(screen.queryByTestId('previous')).toBeDisabled()
        expect(screen.queryByTestId('next')).toBeDisabled()
      })

      it('should not show buttons if totalItems <= pageSize ', () => {
        render(<Pagination pageSize={10} totalItems={10} />)

        expect(screen.queryByTestId('previous')).not.toBeInTheDocument()
        expect(screen.queryByTestId('next')).not.toBeInTheDocument()
      })

      it('should call "onChange" with the next active page when the "next" button is clicked', () => {
        const handleChange = jest.fn()
        render(
          <Pagination
            activePage={1}
            pageSize={10}
            totalItems={20}
            onPageChange={handleChange}
          />
        )
        fireEvent.click(screen.queryByTestId('next'))

        expect(handleChange).toHaveBeenCalledWith(
          expect.any(Object),
          expect.objectContaining({
            activePage: 2
          })
        )
      })

      it('should call "onPageChange" with the previous active page when the previous button is clicked', () => {
        const handleChange = jest.fn()
        render(
          <Pagination
            activePage={2}
            pageSize={10}
            totalItems={20}
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
})

describe('Using hasNextPage', () => {
  describe('Exceptions', () => {
    it('should not render if pageSize < 1', () => {
      const { container } = render(
        <Pagination
          activePage={0}
          pageSize={0}
          activePageItemCount={0}
          hasNextPage={false}
        />
      )
      expect(container.firstChild).toBeNull()
    })
  })

  describe('Pagination', () => {
    describe('when there is only one page', () => {
      it('should render the single page label', () => {
        render(
          <Pagination
            activePage={1}
            pageSize={10}
            activePageItemCount={5}
            hasNextPage={false}
            i18n={{
              of: 'of',
              value: 'many',
              results: 'results'
            }}
          />
        )

        expect(screen.getByText('5')).toBeInTheDocument()
        expect(screen.queryByText('of')).not.toBeInTheDocument()
        expect(screen.queryByText('many')).not.toBeInTheDocument()
        expect(screen.getByText('results')).toBeInTheDocument()
      })
    })

    describe('when there are multiple pages', () => {
      it('should render the multiple page label', () => {
        render(
          <Pagination
            activePage={2}
            pageSize={10}
            activePageItemCount={10}
            hasNextPage={true}
            i18n={{
              of: 'of',
              value: 'many',
              results: 'results'
            }}
          />
        )

        expect(screen.getByText('11-20')).toBeInTheDocument()
        expect(screen.getByText('of')).toBeInTheDocument()
        expect(screen.getByText('many')).toBeInTheDocument()
        expect(screen.getByText('results')).toBeInTheDocument()
      })
    })

    describe('buttons', () => {
      it('should show previous button disabled if it is on first page', () => {
        render(
          <Pagination
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
          <Pagination
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
          <Pagination
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
          <Pagination
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
          <Pagination
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
          <Pagination
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
})
