import React, { useState } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import keyboardKey from 'keyboard-key'

import Input from '../Input'
import Label from '../Label'

const ADD_VALUE_KEY_CODES = [
  keyboardKey.Enter,
  keyboardKey.Tab,
  keyboardKey.Comma
]

const ListInput = ({ className, defaultValue, onChange, ...otherProps }) => {
  const [values, setValues] = useState(defaultValue || [])
  const [search, setSearch] = useState('')

  const handleChangeValues = func => {
    setValues(values => {
      const changed = func(values)

      onChange && onChange({}, { value: changed })
      return changed
    })
  }

  const addCurrentValue = () => {
    handleChangeValues(values => _.concat(values, search))
    setSearch('')
  }

  return (
    <Input className={cx('list-input', className)} {...otherProps}>
      {_.map(values, (value, index) => (
        <Label
          key={index}
          className="list-input-tag"
          content={value}
          onRemove={() =>
            handleChangeValues(values => _.without(values, value))
          }
        />
      ))}
      <input
        type="text"
        value={search}
        onChange={({ target: { value } }) =>
          _.trim(value) !== ',' && setSearch(value)
        }
        onKeyDown={({ keyCode }) => {
          const searchIsEmpty = _.size(_.trim(search)) === 0

          if (_.includes(ADD_VALUE_KEY_CODES, keyCode) && !searchIsEmpty) {
            addCurrentValue()
          } else if (
            keyCode === keyboardKey.Backspace &&
            _.size(search) === 0
          ) {
            handleChangeValues(_.dropRight)
          }
        }}
        onBlur={() => setSearch('')}
      />
    </Input>
  )
}

ListInput.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func
}

export default ListInput
