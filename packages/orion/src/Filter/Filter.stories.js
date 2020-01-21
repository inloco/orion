import React from 'react'
import { action } from '@storybook/addon-actions'
import { object, text, withKnobs } from '@storybook/addon-knobs'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Dropdown, Filter, Input } from '../'

const actions = {
  onChange: action('onChange'),
  onApply: action('onApply'),
  onClear: action('onClear'),
  onOpen: action('onOpen'),
  onClose: action('onClose')
}

export default {
  title: 'Filter',
  decorators: [withKnobs]
}

export const withInput = () => (
  <Filter
    text={text('Label', 'Open')}
    extraFooterContent={text('Extra footer content', '')}
    {...actions}>
    {filterProps => (
      <FilterStoryInput {...filterProps} placeholder="Type your name" />
    )}
  </Filter>
)

export const withDropdown = () => {
  const options = object('Options', [
    { text: 'Maíra', value: 0 },
    { text: 'Gileno', value: 1 }
  ])
  return (
    <Filter
      text={text('Label', 'Open')}
      selectedText={value => value.map(index => options[index].text).join(', ')}
      {...actions}>
      {({ onChange, value }) => (
        <React.Fragment>
          <Dropdown
            className="mr-16"
            options={options}
            selection
            multiple
            search
            placeholder="Select developers"
            onChange={(event, { value }) =>
              onChange(_.isEmpty(value) ? null : value)
            }
            value={value || []}
          />
        </React.Fragment>
      )}
    </Filter>
  )
}

export const multiple = () => (
  <React.Fragment>
    <Filter text="Filter 1" {...actions}>
      {filterProps => <FilterStoryInput {...filterProps} />}
    </Filter>
    <Filter text="Filter 2" {...actions}>
      {filterProps => <FilterStoryInput {...filterProps} />}
    </Filter>
    <Filter text="Filter 3" {...actions}>
      {filterProps => <FilterStoryInput {...filterProps} />}
    </Filter>
  </React.Fragment>
)

export const withHover = () => (
  <Filter
    text={text('Label', 'Filter')}
    hoverTooltipContent={text('Hover Content', 'This is a filter')}
    tooltipProps={{
      position: text('Tooltip position', 'right center')
    }}
    {...actions}>
    {filterProps => (
      <FilterStoryInput {...filterProps} placeholder="Type your name" />
    )}
  </Filter>
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
