import React, { useState } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import keyboardKey from 'keyboard-key'
import { Dropdown } from '@inloco/semantic-ui-react'

const KeyboardKeys = {
  ENTER: 'enter',
  TAB: 'tab',
  COMMA: 'comma'
}

const AddValueKeyCodes = {
  [KeyboardKeys.ENTER]: keyboardKey.Enter,
  [KeyboardKeys.TAB]: keyboardKey.Tab,
  [KeyboardKeys.COMMA]: keyboardKey.Comma
}

const TagsInput = ({
  className,
  defaultValue,
  value,
  onChange,
  onBlur,
  onSearchChange,
  selectOnBlur,
  addValueKeys,
  ...otherProps
}) => {
  const [stateValues, setStateValues] = useState(value || defaultValue || [])
  const [search, setSearch] = useState('')

  const values = _.isUndefined(value) ? stateValues : value

  const options = _.map(values, value => ({ value, text: value }))
  const addValuesKeyboardKeys = _.map(
    addValueKeys,
    key => AddValueKeyCodes[key]
  )

  const handleAddTagValue = func => {
    setStateValues(values => {
      const changed = func(values)

      onChange && onChange({}, { value: changed })
      return changed
    })
  }

  const addCurrentValue = () => {
    handleAddTagValue(values => _.concat(values, search))
    setSearch('')
  }

  return (
    <Dropdown
      className={cx(
        'tags-input',
        { draft: _.isEmpty(values) && search },
        className
      )}
      multiple
      search
      selection
      icon={null}
      options={options}
      value={values}
      searchQuery={search}
      onChange={(e, { value: newValue }) => {
        // This will be used to delete tag values
        setStateValues(newValue)

        onChange && onChange(e, { value: newValue })
      }}
      onSearchChange={(event, data) => {
        const { searchQuery } = data

        const commaSplit = _.compact(_.map(_.split(searchQuery, ','), _.trim))

        if (_.size(commaSplit) > 1) {
          handleAddTagValue(values => _.concat(values, commaSplit))
          setSearch('')
        } else if (_.trim(searchQuery) !== ',') {
          setSearch(searchQuery)
        }

        onSearchChange && onSearchChange(event, data)
      }}
      onKeyDown={event => {
        const { keyCode } = event
        const searchIsEmpty = _.size(_.trim(search)) === 0

        if (_.includes(addValuesKeyboardKeys, keyCode) && !searchIsEmpty) {
          addCurrentValue()
        }

        shouldPreventDefault(keyCode, addValueKeys) && event.preventDefault()
      }}
      onBlur={(event, data) => {
        if (search && selectOnBlur) {
          addCurrentValue()
        }

        onBlur && onBlur(event, data)
      }}
      {...otherProps}
    />
  )
}

const shouldPreventDefault = (keyCode, addValueKeys) =>
  (keyCode === keyboardKey.Tab && _.includes(addValueKeys, KeyboardKeys.TAB)) ||
  (keyCode === keyboardKey.Enter &&
    _.includes(addValueKeys, KeyboardKeys.ENTER))

TagsInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.array,
  value: PropTypes.array,
  onChange: PropTypes.func,
  onSearchChange: PropTypes.func,
  onBlur: PropTypes.func,
  selectOnBlur: PropTypes.bool,
  addValueKeys: PropTypes.arrayOf(PropTypes.oneOf(_.values(KeyboardKeys)))
}

TagsInput.defaultProps = {
  addValueKeys: [KeyboardKeys.COMMA],
  selectOnBlur: true
}

TagsInput.KeyboardKeys = KeyboardKeys

export default TagsInput
