import cx from 'classnames'
import keyboardKey from 'keyboard-key'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Popup } from '@inloco/semantic-ui-react'

import Button from '../Button'
import ClickOutside from '../ClickOutside'
import Tooltip from '../Tooltip'
import { Sizes } from '../utils/sizes'
import FilterClearIcon from './FilterClearIcon'

const Filter = ({
  applyButton,
  clearButton,
  children,
  className,
  extraFooterContent,
  initialValue,
  onApply,
  onChange,
  onClear,
  onClose,
  onOpen,
  prefix,
  selectedText,
  text,
  trigger,
  value: propValue,
  tooltipProps,
  ...otherProps
}) => {
  const [open, setOpen] = useState(false)
  const [stateValue, setValue] = useState(initialValue)

  const value = _.isUndefined(propValue) ? stateValue : propValue

  const [localValue, setLocalValue] = useState(value)

  const isSelected = !_.isEmpty(value)

  const handleApply = (event, value) => {
    const newValue = value || localValue
    setValue(newValue)
    onApply && onApply(newValue)

    setOpen(false)
    onClose && onClose()

    // Prevent form submission.
    event?.preventDefault()
  }

  const handleClear = () => {
    setLocalValue(null)
    onChange && onChange(null)
    onClear && onClear()
  }

  const handleKeyDown = event => {
    if (keyboardKey.getCode(event) === keyboardKey.Escape) {
      handleApply(event)
    }
  }

  const handleChange = newLocalValue => {
    setLocalValue(newLocalValue)
    onChange && onChange(newLocalValue)
  }

  const handleTriggerClick = () => {
    if (open) {
      onClose && onClose()
    } else {
      setLocalValue(value)
      onOpen && onOpen()
    }
    setOpen(!open)
  }

  const handleClearIconClick = () => {
    setValue(null)
    onApply && onApply(null)
  }

  const triggerClasses = cx('filter-trigger', {
    active: open,
    selected: isSelected
  })

  const defaultTooltipTrigger = (
    <Button className={triggerClasses} size={Sizes.SMALL}>
      {prefix && value && (
        <span className="filter-trigger-prefix">{prefix}</span>
      )}
      {isSelected ? selectedText(value) : text}
      {isSelected && <FilterClearIcon onClick={handleClearIconClick} />}
    </Button>
  )

  const tooltipTrigger = trigger || defaultTooltipTrigger

  const tooltip = (
    <Tooltip
      disabled={_.isEmpty(_.get(tooltipProps, 'content'))}
      {...tooltipProps}
      trigger={React.cloneElement(tooltipTrigger, {
        onClick: handleTriggerClick
      })}
    />
  )

  return (
    <Popup
      className={cx(className, 'orion filter p-0')}
      basic
      trigger={tooltip}
      open={open}
      {...otherProps}>
      <ClickOutside
        as="form"
        className="p-16"
        onClickOutside={handleApply}
        onKeyDown={handleKeyDown}
        onSubmit={handleApply}>
        <div className="filter-content">
          {children({ onChange: handleChange, value: localValue, handleApply })}
        </div>
        {(clearButton || applyButton || extraFooterContent) && (
          <div className="filter-buttons">
            <div className={cx({ invisible: _.isEmpty(localValue) })}>
              {Button.create(clearButton, {
                autoGenerateKey: false,
                defaultProps: {
                  subtle: true,
                  type: 'button',
                  onClick: handleClear
                }
              })}
            </div>
            <div className="flex items-baseline">
              {extraFooterContent && (
                <div className="filter-footer-content">
                  {extraFooterContent}
                </div>
              )}
              {Button.create(applyButton, {
                autoGenerateKey: false,
                defaultProps: {
                  primary: true,
                  subtle: true,
                  type: 'submit'
                }
              })}
            </div>
          </div>
        )}
      </ClickOutside>
    </Popup>
  )
}

Filter.propTypes = {
  applyButton: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  clearButton: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  extraFooterContent: PropTypes.node,
  initialValue: PropTypes.any,
  onApply: PropTypes.func,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onOpen: PropTypes.func,
  prefix: PropTypes.string,
  selectedText: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.any,
  tooltipProps: PropTypes.object,
  trigger: PropTypes.node
}

Filter.defaultProps = {
  applyButton: 'Apply',
  clearButton: 'Clear',
  selectedText: value => value
}

export default Filter
