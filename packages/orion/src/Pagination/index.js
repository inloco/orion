import React from 'react'
import PropTypes from 'prop-types'

import PaginationWithTotalItems from './PaginationWithTotaltems'
import PaginationWithHasNextPage from './PaginationWithHasNextPage'

const Pagination = ({
  activePage,
  activePageItemCount,
  hasNextPage,
  i18n,
  pageSize,
  totalItems,
  ...otherProps
}) => {
  return totalItems ? (
    <PaginationWithTotalItems
      activePage={activePage}
      pageSize={pageSize}
      totalItems={totalItems}
      i18n={i18n}
      {...otherProps}
    />
  ) : (
    <PaginationWithHasNextPage
      activePage={activePage}
      pageSize={pageSize}
      hasNextPage={hasNextPage}
      activePageItemCount={activePageItemCount}
      i18n={i18n}
      {...otherProps}
    />
  )
}

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  activePageItemCount: PropTypes.number,
  hasNextPage: PropTypes.bool,
  pageSize: PropTypes.number.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string,
    of: PropTypes.string,
    value: PropTypes.node,
    results: PropTypes.string
  }),
  totalItems: PropTypes.number
}

Pagination.defaultProps = {
  activePage: 1,
  pageSize: 10,
  hasNextPage: false,
  i18n: {
    language: 'en',
    of: 'of',
    value: 'many',
    results: 'results'
  }
}

export default Pagination
