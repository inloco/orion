import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Form } from '@inloco/semantic-ui-react'

import Input from '../../Input'
import Dropdown from '../../Dropdown'
import DatepickerInput from '../../DatepickerInput'
import RangedDatepickerInput from '../../RangedDatepickerInput'
import TagsInput from '../../TagsInput'

import { Sizes, sizePropType } from '../../utils/sizes'

const SemanticFormField = Form.Field

const FLOATING_LABEL_COMPONENTS = [
  Input,
  Dropdown,
  DatepickerInput,
  RangedDatepickerInput,
  TagsInput
]

const isValueEmpty = value => !_.isNumber(value) && _.isEmpty(value)

const shouldHaveFloatingLabel = (field, size) =>
  FLOATING_LABEL_COMPONENTS.includes(field) && size !== Sizes.SMALL

const isFilled = (value, children) => {
  let filled = !isValueEmpty(value)

  if (!_.isNil(children)) {
    React.Children.forEach(children, child => {
      if (shouldHaveFloatingLabel(child.type, child.props.size)) {
        const { value, defaultValue } = child.props
        filled = !isValueEmpty(value || defaultValue)
      }
    })
  }

  return filled
}

const Field = ({ className, children, message, onChange, ...otherProps }) => {
  const { size, control, value, defaultValue } = otherProps
  const [controlFilled, setControlFilled] = useState(
    isFilled(value || defaultValue, children)
  )

  let finalChildren = children
  let finalOnChange = onChange
  let floatingLabel = false
  let warning = otherProps.warning

  const handleChange = (e, data) => {
    setControlFilled(!isValueEmpty(data.value))
    if (onChange) onChange(e, data)
  }

  if (shouldHaveFloatingLabel(control, size)) {
    finalOnChange = handleChange
    floatingLabel = true
  }

  if (!_.isNil(children)) {
    finalChildren = React.Children.map(children, child => {
      if (shouldHaveFloatingLabel(child.type, child.props.size)) {
        floatingLabel = true
        warning = child.props.warning
        return React.cloneElement(child, {
          onChange: (e, data) => {
            setControlFilled(!isValueEmpty(data.value))
            if (child.props.onChange) child.props.onChange(e, data)
          }
        })
      }
      return child
    })
  }

  const classes = cx(className, {
    filled: controlFilled,
    floatingLabel
  })

  const messageClasses = cx('orion-form-field__message', {
    'orion-form-field__message--warning': warning
  })
  return (
    <div className="orion-form-field">
      <SemanticFormField
        error={!!message && !warning}
        {...otherProps}
        className={classes}
        children={finalChildren}
        onChange={finalOnChange}
      />
      {message && <div className={messageClasses}>{message}</div>}
    </div>
  )
}

Field.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  message: PropTypes.string,
  onChange: PropTypes.func,
  size: sizePropType
}

Field.defaultProps = {
  size: Sizes.DEFAULT
}

Form.Field = Field

export default Field
