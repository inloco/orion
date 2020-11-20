import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Placeholder } from '@inloco/semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'
import Button from '../Button'

const ACTIVE_PAGE_MIN = 1

const Pagination = ({
  activePage,
  alignButtonsLeft,
  className,
  disabled,
  i18n,
  loading,
  onPageChange,
  onPrevPage,
  onNextPage,
  pageSize,
  totalItems,
  size,
  ...otherProps
}) => {
  if (!loading && pageSize < 1) return null

  const orionPaginationClasses = cx('orion-pagination', className, {
    'orion-pagination-align-buttons-left': alignButtonsLeft,
    'orion-pagination-size-small': size === Sizes.SMALL
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
            <span className="orion-pagination-value">
              {totalItems.toLocaleString(i18n.language)}
            </span>
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
  alignButtonsLeft: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  i18n: PropTypes.shape({
    language: PropTypes.string,
    of: PropTypes.string,
    results: PropTypes.string
  }),
  onPageChange: PropTypes.func,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
  pageSize: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  size: sizePropType
}

Pagination.defaultProps = {
  activePage: 1,
  i18n: {
    language: 'en',
    of: 'of',
    results: 'results'
  },
  pageSize: 10,
  size: Sizes.DEFAULT
}

export default Pagination
