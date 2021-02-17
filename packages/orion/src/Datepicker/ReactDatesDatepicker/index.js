import PropTypes from 'prop-types'
import React from 'react'

import 'react-dates/initialize'

import Button from '../../Button'

const ReactDatesDatepicker = ({ as: ElementType, ...otherProps }) => (
  <ElementType
    hideKeyboardShortcutsPanel
    horizontalMonthPadding={15}
    daySize={40}
    navPrev={<Button subtle icon="keyboard_arrow_left" />}
    navNext={<Button subtle icon="keyboard_arrow_right" />}
    {...otherProps}
  />
)

ReactDatesDatepicker.propTypes = {
  as: PropTypes.func
}

export default ReactDatesDatepicker
