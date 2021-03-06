import React from 'react'
import { action } from '@storybook/addon-actions'
import PropTypes from 'prop-types'

import { FilterBar, Input, Icon } from '../'

const actions = {
  onChange: action('onChange')
}

const storyMetadata = {
  title: 'FilterBar'
}

export default storyMetadata

export const basic = () => (
  <FilterBar {...actions}>
    <FilterBar.Filter text="Filter 1" name="filter1">
      {filterProps => <FilterStoryInput {...filterProps} />}
    </FilterBar.Filter>
    <FilterBar.Filter text="Filter 2" name="filter2">
      {filterProps => <FilterStoryInput {...filterProps} />}
    </FilterBar.Filter>
    <FilterBar.Filter text="Filter 3" name="filter3">
      {filterProps => <FilterStoryInput {...filterProps} />}
    </FilterBar.Filter>
  </FilterBar>
)

export const differentFilterBarChildren = () => (
  <FilterBar {...actions} className="flex items-center">
    <Icon name="filter_list" className="mr-16" />
    {true && (
      <FilterBar.Filter text="Filter 1" name="filter1">
        {filterProps => <FilterStoryInput {...filterProps} />}
      </FilterBar.Filter>
    )}
    <FilterBarFilter text="Filter 2" name="filter2" />
  </FilterBar>
)

const FilterBarFilter = props => (
  <FilterBar.Filter {...props}>
    {filterProps => <FilterStoryInput {...filterProps} />}
  </FilterBar.Filter>
)

const FilterStoryInput = ({ onChange, value, ...otherProps }) => (
  <Input
    autoFocus
    onChange={(event, { value }) => onChange(value)}
    placeholder="Type here"
    value={value || ''}
    {...otherProps}
  />
)

FilterStoryInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
