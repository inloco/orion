import React, { useState } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import keyboardKey from 'keyboard-key'
import { Dropdown } from '@inloco/semantic-ui-react'

const ADD_VALUE_KEY_CODES = [
  keyboardKey.Enter,
  keyboardKey.Tab,
  keyboardKey.Comma
]

const TagsInput = ({ className, defaultValue, onChange, ...otherProps }) => {
  const [values, setValues] = useState(defaultValue || [])
  const [search, setSearch] = useState('')
  const [options, setOptions] = useState(
    _.map(defaultValue, value => ({ value, text: value }))
  )

  const handleChangeValues = func => {
    setValues(values => {
      const changed = func(values)

      setOptions(_.map(changed, value => ({ value, text: value })))
      onChange && onChange({}, { value: changed })
      return changed
    })
  }

  const addCurrentValue = () => {
    handleChangeValues(values => _.concat(values, search))
    setSearch('')
  }

  return (
    <Dropdown
      className={cx('tags-input', className)}
      multiple
      search
      selection
      icon={null}
      options={options}
      value={values}
      searchQuery={search}
      onChange={(e, { value }) => handleChangeValues(() => value)}
      onSearchChange={(e, { searchQuery }) =>
        _.trim(searchQuery) !== ',' && setSearch(searchQuery)
      }
      onKeyDown={event => {
        const { keyCode } = event
        const searchIsEmpty = _.size(_.trim(search)) === 0

        if (_.includes(ADD_VALUE_KEY_CODES, keyCode) && !searchIsEmpty) {
          addCurrentValue()
        }

        if (keyCode === keyboardKey.Tab) event.preventDefault()
      }}
      onBlur={() => setSearch('')}
      {...otherProps}
    />
  )
}

TagsInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func
}

export default TagsInput
