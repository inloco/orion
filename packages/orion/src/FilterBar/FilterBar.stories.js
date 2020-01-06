import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { FilterBar, Input } from '../'

const actions = {
  onChange: action('onChange')
}

export default {
  title: 'FilterBar',
  decorators: [withKnobs]
}

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
