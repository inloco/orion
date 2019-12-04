import _ from 'lodash'
import React, { useState } from 'react'
import { Dropdown as SemanticDropdown } from '@inloco/semantic-ui-react'

const DOUBLE_PREFIX = 'double:'

const buildDoubleOption = option => ({
  ...option,
  value: `${DOUBLE_PREFIX}${option.value}`,
  active: true
})
const isDoubleValue = value => _.startsWith(value, DOUBLE_PREFIX)
const getOriginalValue = doubleValue => doubleValue.split(DOUBLE_PREFIX)[1]

/**
 * Selected options are removed automatically by Semantic UI's Dropdown
 * before being rendered. This is not configurable.
 *
 * We need selected options to keep showing up in the list, where they
 * can be seen and unselected by the user. This component is a work-around
 * to achieve this behavior.
 *
 * For every selected option, we add a duplicate (called "double") with
 * the same data (e.g. text, description), but with a different value.
 * This way Semantic UI will still remove the original option, but the
 * duplicate will take its place.
 *
 * When a "double" is clicked by the user, this actually means that the
 * original option should be unselected. We achive this by listening to
 * value changes and manually removing both the original and the double
 * whenever a double is in the selected array.
 *
 * Crazy shit, huh?
 */
const DropdownKeepSelected = React.forwardRef(
  (
    { defaultValue, options, onChange, value: propValue, ...otherProps },
    ref
  ) => {
    const [stateValue, setValue] = useState(defaultValue)
    const value = propValue || stateValue

    const addDoubleIfOptionIsSelected = option => {
      return _.includes(value, option.value)
        ? [option, buildDoubleOption(option)]
        : option
    }
    options = _.flatten(options.map(addDoubleIfOptionIsSelected))

    const handleChange = (event, data) => {
      let { value: valueArray } = data
      const double = _.find(valueArray, isDoubleValue)

      if (double) {
        // A "double" has been selected by the user, meaning that he wishes to
        // unselect the original option. We'll remove both here to achive it.
        const original = getOriginalValue(double)
        valueArray = _.filter(
          valueArray,
          value => value !== double && _.toString(value) !== original
        )
      }

      onChange && onChange(event, { ...data, value: valueArray })
      setValue(valueArray)
    }

    return (
      <SemanticDropdown
        ref={ref}
        options={options}
        onChange={handleChange}
        value={value || []}
        {...otherProps}
      />
    )
  }
)

export default DropdownKeepSelected
