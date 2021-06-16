import React from 'react'
import PropTypes from 'prop-types'

import { sizePropType } from '../utils/sizes'
import PaginationContolled from '../PaginationControlled'

const ACTIVE_PAGE_MIN = 1

const Pagination = ({
  activePage,
  i18n,
  loading,
  pageSize,
  totalItems,
  ...otherProps
}) => {
  if (!loading && pageSize < 1) return null

  const activePageMax = Math.ceil(totalItems / pageSize)
  const possibleActivePage = Math.max(
    Math.min(activePage, activePageMax),
    ACTIVE_PAGE_MIN
  )
  const firstPageItem = pageSize * (possibleActivePage - 1) + 1
  const lastPageItem = Math.min(pageSize * possibleActivePage, totalItems)

  return (
    <PaginationContolled
      activePage={activePage}
      pageSize={pageSize}
      hasNextPage={activePage < activePageMax}
      i18n={{
        ...i18n,
        value:
          totalItems <= pageSize
            ? `${totalItems}`
            : `${firstPageItem}-${lastPageItem}`,
        many: totalItems.toLocaleString(i18n.language)
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
