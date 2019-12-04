import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Dropdown as SemanticDropdown } from '@inloco/semantic-ui-react'

import Divider from '../Divider'
import { Sizes, sizePropType } from '../utils/sizes'
import { Directions, directionPropType } from '../utils/directions'
import DropdownItem from './DropdownItem'
import DropdownKeepSelected from './DropdownKeepSelected'
import useInlineMenuWrapper from './useInlineMenuWrapper'

const DROPDOWN_ICON = {
  className: 'dropdown-icon',
  name: 'keyboard_arrow_down'
}

const LOADING_ICON = 'loading'

const MultipleModes = {
  FILTER_SELECTED: true,
  KEEP_SELECTED: 'keep'
}

const Dropdown = React.forwardRef(
  (
    {
      className,
      icon,
      inlineMenu,
      multiple,
      noSelectedLabels,
      placeholder,
      size,
      warning,
      ...otherProps
    },
    ref
  ) => {
    const { loading, options } = otherProps
    const shouldKeepSelected =
      options && multiple === MultipleModes.KEEP_SELECTED
    const classes = cx(className, size, {
      'inline-menu': inlineMenu,
      'keep-selected': shouldKeepSelected,
      'no-selected-labels': noSelectedLabels,
      warning
    })

    const dropdownProps = {
      className: classes,
      icon: loading ? LOADING_ICON : icon,
      multiple: !!multiple,
      ref,
      searchInput: noSelectedLabels ? { placeholder } : 'text',
      placeholder: noSelectedLabels ? null : placeholder,
      ...otherProps
    }

    const ElementType = shouldKeepSelected
      ? DropdownKeepSelected
      : SemanticDropdown
    const element = <ElementType {...dropdownProps} />

    const [wrapperRef, wrapperMargin] = useInlineMenuWrapper(options)
    if (inlineMenu) {
      return (
        <div ref={wrapperRef} style={{ marginBottom: `${wrapperMargin}px` }}>
          {element}
        </div>
      )
    }

    return element
  }
)

Dropdown.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  inlineMenu: PropTypes.bool,
  multiple: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(_.values(MultipleModes))
  ]),
  noSelectedLabels: PropTypes.bool,
  placeholder: PropTypes.string,
  size: sizePropType,
  direction: directionPropType,
  warning: PropTypes.bool
}

Dropdown.defaultProps = {
  deburr: true,
  icon: DROPDOWN_ICON,
  size: Sizes.DEFAULT,
  direction: Directions.LEFT
}

Dropdown.Divider = Divider
Dropdown.Header = SemanticDropdown.Header
Dropdown.Item = DropdownItem
Dropdown.Menu = SemanticDropdown.Menu
Dropdown.SearchInput = SemanticDropdown.SearchInput

Dropdown.ICON = DROPDOWN_ICON
Dropdown.MultipleModes = MultipleModes

export default Dropdown
