import React from 'react'
import PropTypes from 'prop-types'

import PaginationWithHasNextPage from './PaginationWithHasNextPage'

const ACTIVE_PAGE_MIN = 1

const PaginationWithTotalItems = ({
  activePage,
  i18n,
  loading,
  pageSize,
  totalItems,
  ...otherProps
}) => {
  if (!loading && pageSize < 1) return null

  const activePageMax = Math.ceil(totalItems / pageSize)
  const validActivePage = Math.min(
    Math.max(ACTIVE_PAGE_MIN, activePage),
    activePageMax
  )

  const hasNextPage = validActivePage < activePageMax
  const activePageItemCount = hasNextPage
    ? pageSize
    : totalItems - (validActivePage - 1) * pageSize

  return (
    <PaginationWithHasNextPage
      activePage={validActivePage}
      activePageItemCount={activePageItemCount}
      pageSize={pageSize}
      hasNextPage={hasNextPage}
      i18n={{
        ...i18n,
        value: totalItems.toLocaleString(i18n.language)
      }}
      loading={loading}
      {...otherProps}
    />
  )
}

PaginationWithTotalItems.propTypes = {
  activePage: PropTypes.number,
  loading: PropTypes.bool,
  i18n: PropTypes.shape({
    language: PropTypes.string,
    of: PropTypes.string,
    results: PropTypes.string
  }),
  pageSize: PropTypes.number,
  totalItems: PropTypes.number.isRequired
}

PaginationWithTotalItems.defaultProps = {
  activePage: 1,
  pageSize: 10,
  i18n: {
    language: 'en',
    of: 'of',
    results: 'results'
  }
}

export default PaginationWithTotalItems
