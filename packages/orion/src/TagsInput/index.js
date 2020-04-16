import React, { useState } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import keyboardKey from 'keyboard-key'
import { Dropdown } from '@inloco/semantic-ui-react'

const AddValueKeyCodes = {
  enter: keyboardKey.Enter,
  tab: keyboardKey.Tab,
  comma: keyboardKey.Comma
}

const TagsInput = ({
  className,
  defaultValue,
  onChange,
  onBlur,
  onSearchChange,
  selectOnBlur,
  addValueKeys,
  ...otherProps
}) => {
  const [values, setValues] = useState(defaultValue || [])
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState(
    _.map(defaultValue, value => ({ value, text: value }))
  )
  const addValuesKeyboardKeys = _.map(
    addValueKeys,
    key => AddValueKeyCodes[key]
  )

  const handleAddTagValue = func => {
    setValues(values => {
      const changed = func(values)

      setOptions(_.map(changed, value => ({ value, text: value })))
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
        setOptions(_.map(newValue, value => ({ value, text: value })))
        setValues(newValue)

        onChange && onChange({}, { value: _.concat(newValue, search || []) })
      }}
      onSearchChange={(event, data) => {
        const { searchQuery } = data

        const commaSplit = _.compact(_.map(_.split(searchQuery, ','), _.trim))

        if (_.size(commaSplit) > 1) {
          handleAddTagValue(values => _.concat(values, commaSplit))
          setSearch('')
        } else if (_.trim(searchQuery) !== ',') {
          setSearch(searchQuery)
          onChange &&
            onChange(event, { value: _.concat(values, searchQuery || []) })
        }

        onSearchChange && onSearchChange(event, data)
      }}
      onKeyDown={event => {
        const { keyCode } = event
        const searchIsEmpty = _.size(_.trim(search)) === 0

        if (_.includes(addValuesKeyboardKeys, keyCode) && !searchIsEmpty) {
          addCurrentValue()
        }

        if (keyCode === keyboardKey.Tab && _.includes(addValueKeys, 'tab')) {
          event.preventDefault()
        }
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

TagsInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func,
  onSearchChange: PropTypes.func,
  onBlur: PropTypes.func,
  selectOnBlur: PropTypes.bool,
  addValueKeys: PropTypes.arrayOf(PropTypes.oneOf(_.keys(AddValueKeyCodes)))
}

TagsInput.defaultProps = {
  addValueKeys: ['comma']
}

export default TagsInput
