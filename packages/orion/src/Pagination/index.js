import React from 'react'
import PropTypes from 'prop-types'

import EndlessPagination from '../PaginationEndless'

const ACTIVE_PAGE_MIN = 1

const Pagination = ({
  activePage: activePageProp,
  i18n,
  loading,
  pageSize,
  totalItems,
  ...otherProps
}) => {
  if (!loading && pageSize < 1) return null

  const activePageMax = Math.ceil(totalItems / pageSize)
  const activePage = Math.min(
    Math.max(ACTIVE_PAGE_MIN, activePageProp),
    activePageMax
  )

  const hasNextPage = activePage < activePageMax
  const activePageItemCount = hasNextPage
    ? pageSize
    : totalItems - (activePage - 1) * pageSize

  return (
    <EndlessPagination
      activePage={activePage}
      activePageItemCount={activePageItemCount}
      pageSize={pageSize}
      hasNextPage={hasNextPage}
      i18n={{
        singlePageLabel: i18n.results,
        label: (
          <>
            <span className="orion-pagination-text">{i18n.of}</span>
            <span className="orion-pagination-value">
              {totalItems.toLocaleString(i18n.language)}
            </span>
            <span className="orion-pagination-text">{i18n.results}</span>
          </>
        )
      }}
      loading={loading}
      {...otherProps}
    />
  )
}

Pagination.propTypes = {
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

Pagination.defaultProps = {
  activePage: 1,
  pageSize: 10,
  i18n: {
    language: 'en',
    of: 'of',
    results: 'results'
  }
}

export default Pagination
