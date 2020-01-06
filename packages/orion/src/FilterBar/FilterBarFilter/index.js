import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Filter from '../../Filter'

const FilterBarFilter = ({ className, pending, ...otherProps }) => {
  const classes = cx('filter-bar-filter', { pending })
  const filterClasses = cx('filter-bar-filter-popup', className)
  return (
    <div className={classes}>
      <Filter className={filterClasses} {...otherProps} />
    </div>
  )
}

FilterBarFilter.propTypes = {
  className: PropTypes.string,

  // Thes `name` prop is required, but it's only used by the parent
  // component: `FilterBar`.
  name: PropTypes.string.isRequired,

  pending: PropTypes.bool
}

export default FilterBarFilter
