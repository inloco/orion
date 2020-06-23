import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import Button from '../Button'
import { Sizes } from '../utils/sizes'
import FilterBarFilter from './FilterBarFilter'

const FilterBar = ({
  applyButton,
  children,
  className,
  clearAllButton,
  initialValue,
  onChange,
  value: propValue,
  ...otherProps
}) => {
  const [stateValue, setValue] = useState(initialValue)
  const value = _.isUndefined(propValue) ? stateValue : propValue

  const [localValue, setLocalValue] = useState(value)

  const pendingFilters = {}

  React.Children.forEach(children, child => {
    const name = child?.props?.name
    if (name) {
      const local = _.get(localValue, name, null)
      const final = _.get(value, name, null)
      pendingFilters[name] = !_.isEqual(local, final)
    }
  })
  const hasPendingFilters = _.some(pendingFilters)

  const handleFilterChange = name => filterValue => {
    setLocalValue({
      ...localValue,
      [name]: filterValue
    })
  }

  const updateValue = newValue => {
    setValue(newValue)
    onChange && onChange(newValue)

    setLocalValue(newValue)
  }

  const shouldRenderClearAllButton = !hasPendingFilters && !_.isEmpty(value)

  return (
    <div className={cx(className, 'orion filter-bar')} {...otherProps}>
      {React.Children.map(children, child => {
        const name = child?.props?.name
        if (!name) return child
        return React.cloneElement(child, {
          onApply: handleFilterChange(name),
          pending: pendingFilters[name],
          value: _.get(localValue, name) || null
        })
      })}
      {hasPendingFilters &&
        Button.create(applyButton, {
          autoGenerateKey: false,
          defaultProps: {
            onClick: () => updateValue(localValue),
            primary: true,
            size: Sizes.SMALL,
            type: 'submit'
          }
        })}
      {shouldRenderClearAllButton &&
        Button.create(clearAllButton, {
          autoGenerateKey: false,
          defaultProps: {
            onClick: () => updateValue(null),
            subtle: true,
            size: Sizes.SMALL,
            type: 'button'
          }
        })}
    </div>
  )
}

FilterBar.propTypes = {
  applyButton: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  clearAllButton: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  initialValue: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.object
}

FilterBar.defaultProps = {
  applyButton: 'Apply',
  clearAllButton: 'Clear All'
}

FilterBar.Filter = FilterBarFilter

export default FilterBar
