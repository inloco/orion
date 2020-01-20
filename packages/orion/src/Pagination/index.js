import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import { Placeholder, Button } from '../'

const ACTIVE_PAGE_MIN = 1

const Pagination = ({
  activePage,
  className,
  disabled,
  i18n,
  onPageChange,
  onPrevPage,
  onNextPage,
  pageSize,
  alignButtonsLeft,
  totalItems,
  loading,
  ...otherProps
}) => {
  if (!loading && pageSize < 1) return null

  const orionPaginationClasses = cx('orion-pagination', className, {
    'orion-pagination-align-buttons-left': alignButtonsLeft
  })

  if (loading) {
    return (
      <div className={orionPaginationClasses} {...otherProps}>
        <Placeholder className="orion-pagination-placeholder">
          <Placeholder.Line length="full" />
        </Placeholder>
      </div>
    )
  }

  const orionPaginationContent = cx({
    'orion-pagination-content-disabled': disabled
  })

  const activePageMax = Math.ceil(totalItems / pageSize)
  const possibleActivePage = Math.max(
    Math.min(activePage, activePageMax),
    ACTIVE_PAGE_MIN
  )
  const firstPageItem = pageSize * (possibleActivePage - 1) + 1
  const lastPageItem = Math.min(pageSize * possibleActivePage, totalItems)

  return (
    <div className={orionPaginationClasses} {...otherProps}>
      <div className={orionPaginationContent}>
        {totalItems <= pageSize ? (
          <span className="orion-pagination-value">{totalItems}</span>
        ) : (
          <>
            <span className="orion-pagination-value">
              {firstPageItem}-{lastPageItem}
            </span>
            <span className="orion-pagination-text">{i18n.of}</span>
            <span className="orion-pagination-value">{totalItems}</span>
          </>
        )}
        <span className="orion-pagination-text">{i18n.results}</span>
      </div>
      {totalItems > pageSize && (
        <div className="orion-pagination-actions">
          <Button
            disabled={disabled || possibleActivePage === ACTIVE_PAGE_MIN}
            icon="keyboard_arrow_left"
            data-testid="previous"
            onClick={e => {
              if (onPageChange) {
                onPageChange(e, { activePage: possibleActivePage - 1 })
              }
              if (onPrevPage) onPrevPage(e)
            }}
          />
          <Button
            disabled={
              disabled || !activePageMax || possibleActivePage === activePageMax
            }
            icon="keyboard_arrow_right"
            data-testid="next"
            onClick={e => {
              if (onPageChange) {
                onPageChange(e, { activePage: possibleActivePage + 1 })
              }
              if (onNextPage) onNextPage(e)
            }}
          />
        </div>
      )}
    </div>
  )
}

Pagination.propTypes = {
  activePage: PropTypes.number,
  disabled: PropTypes.bool,
  onPageChange: PropTypes.func,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
  pageSize: PropTypes.number,
  alignButtonsLeft: PropTypes.bool,
  totalItems: PropTypes.number.isRequired,
  loading: PropTypes.bool,
  className: PropTypes.string,
  i18n: PropTypes.shape({
    of: PropTypes.string,
    results: PropTypes.string
  })
}

Pagination.defaultProps = {
  activePage: 1,
  pageSize: 10,
  i18n: {
    of: 'of',
    results: 'results'
  }
}

export default Pagination
