import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Placeholder } from '@inloco/semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'
import Button from '../Button'

const ACTIVE_PAGE_MIN = 1

const PaginationControlled = ({
  activePage,
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

  const showButtons = activePage !== 1 || hasNextPage

  return (
    <div className={orionPaginationClasses} {...otherProps}>
      <div className={orionPaginationContent}>
        <span className="orion-pagination-value">{i18n.value}</span>
        {showButtons && (
          <>
            <span className="orion-pagination-text">{i18n.of}</span>
            <span className="orion-pagination-value">{i18n.many}</span>
          </>
        )}
        <span className="orion-pagination-text">{i18n.results}</span>
      </div>
      {showButtons && (
        <div className="orion-pagination-actions">
          <Button
            disabled={disabled || activePage === ACTIVE_PAGE_MIN}
            icon="keyboard_arrow_left"
            data-testid="previous"
            onClick={e => {
              if (onPageChange) {
                onPageChange(e, { activePage: activePage - 1 })
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
                onPageChange(e, { activePage: activePage + 1 })
              }
              if (onNextPage) onNextPage(e)
            }}
          />
        </div>
      )}
    </div>
  )
}

PaginationControlled.propTypes = {
  activePage: PropTypes.number,
  pageSize: PropTypes.number,
  hasNextPage: PropTypes.bool,
  alignButtonsLeft: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  i18n: PropTypes.shape({
    language: PropTypes.string,
    value: PropTypes.string,
    of: PropTypes.string,
    many: PropTypes.string,
    results: PropTypes.string
  }),
  onPageChange: PropTypes.func,
  onPrevPage: PropTypes.func,
  onNextPage: PropTypes.func,
  size: sizePropType
}

PaginationControlled.defaultProps = {
  activePage: 1,
  pageSize: 10,
  hasNextPage: false,
  i18n: {
    language: 'en',
    of: 'of',
    results: 'results'
  },
  size: Sizes.DEFAULT
}

export default PaginationControlled
