import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Placeholder } from '@inloco/semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'
import Button from '../Button'

const ACTIVE_PAGE_MIN = 1

const PaginationEndless = ({
  activePage,
  activePageItemCount,
  pageSize,
  hasNextPage,
  alignButtonsLeft,
  className,
  disabled,
  i18n,
  loading,
  onPageChange,
  onPrevPage,
  onNextPage,
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

  const validActivePage = Math.max(ACTIVE_PAGE_MIN, activePage)
  const isFirstPage = validActivePage === ACTIVE_PAGE_MIN
  const hasMultiplePages = !isFirstPage || hasNextPage
  const firstPageItemIndex = pageSize * (validActivePage - 1) + 1
  const lastPageItemIndex =
    pageSize * (validActivePage - 1) + activePageItemCount

  return (
    <div className={orionPaginationClasses} {...otherProps}>
      <div className={orionPaginationContent}>
        <span className="orion-pagination-value">
          {hasMultiplePages
            ? `${firstPageItemIndex}-${lastPageItemIndex}`
            : `${activePageItemCount}`}
        </span>
        <span className="orion-pagination-text">
          {hasMultiplePages ? i18n.label : i18n.singlePageLabel}
        </span>
      </div>
      {hasMultiplePages && (
        <div className="orion-pagination-actions">
          <Button
            disabled={disabled || validActivePage === ACTIVE_PAGE_MIN}
            icon="keyboard_arrow_left"
            data-testid="previous"
            onClick={e => {
              if (onPageChange) {
                onPageChange(e, { activePage: validActivePage - 1 })
              }
              if (onPrevPage) onPrevPage(e)
            }}
          />
          <Button
            disabled={disabled || !hasNextPage}
            icon="keyboard_arrow_right"
            data-testid="next"
            onClick={e => {
              if (onPageChange) {
                onPageChange(e, { activePage: validActivePage + 1 })
              }
              if (onNextPage) onNextPage(e)
            }}
          />
        </div>
      )}
    </div>
  )
}

PaginationEndless.propTypes = {
  activePage: PropTypes.number.isRequired,
  activePageItemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
  alignButtonsLeft: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  i18n: PropTypes.shape({
    singlePageLabel: PropTypes.node.isRequired,
    label: PropTypes.node.isRequired
  }),
  onPageChange: PropTypes.func,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
  size: sizePropType
}

PaginationEndless.defaultProps = {
  activePage: 1,
  pageSize: 10,
  hasNextPage: false,
  size: Sizes.DEFAULT,
  i18n: {
    singlePageLabel: '',
    label: ''
  }
}

export default PaginationEndless
