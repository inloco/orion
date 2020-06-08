import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { Dropdown, Filter, FilterBar, Loading } from '../'
import { buildSelectedTextFromArray } from '../utils/filters'

const MultiSelectFilter = ({
  bar,
  className,
  children,
  dropdownProps,
  onApply,
  options,
  placeholder,
  value,
  ...otherProps
}) => {
  const classes = cx(className, 'w-384 orion-multiSelectFilter')
  const selectedTextFn = buildSelectedTextFromArray(options)
  const selectedOptions = _.map(value, val => _.find(options, { value: val }))

  const ElementType = bar ? FilterBar.Filter : Filter
  return (
    <ElementType
      className={classes}
      selectedText={selectedArr => {
        const text = selectedTextFn(selectedArr)
        return _.isEmpty(text) ? <Loading size="small" /> : text
      }}
      onApply={value => {
        onApply && onApply(toNullIfEmpty(value))
      }}
      value={value}
      {...(_.size(value) > 1 && {
        tooltipProps: {
          position: 'top center',
          content: _.map(
            selectedOptions,
            ({ tooltipText, text, value: val } = {}) => (
              <div key={val}>{tooltipText || text}</div>
            )
          )
        }
      })}
      {...otherProps}>
      {({ onChange, value }) => (
        <>
          {children}
          <Dropdown
            fluid
            selection
            multiple="keep"
            search
            inlineMenu
            icon="search"
            options={_.map(options, option => _.omit(option, 'tooltipText'))}
            placeholder={placeholder}
            searchInput={{ autoFocus: true }}
            {...dropdownProps}
            onChange={(_, { value }) => onChange(toNullIfEmpty(value))}
            value={value || []}
          />
        </>
      )}
    </ElementType>
  )
}

MultiSelectFilter.propTypes = {
  bar: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  dropdownProps: PropTypes.object,
  onApply: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.array
}

const toNullIfEmpty = value => (_.isEmpty(value) ? null : value)

export default MultiSelectFilter
