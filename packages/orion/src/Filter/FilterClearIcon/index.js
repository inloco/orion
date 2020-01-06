import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../../Icon'

const FilterClearIcon = ({ onClick }) => {
  const handleClearIconClick = event => {
    onClick(event)

    // Prevents the filter from opening due to a click
    // inside the trigger button.
    event.stopPropagation()
  }

  const handleClearIconMouseDown = event => {
    // This prevents the filter from becoming focused
    // after the clear icon is clicked. Can't be done
    // in a "click" listener, just on "mousedown".
    event.preventDefault()
  }

  return (
    <Icon
      name="clear"
      onClick={handleClearIconClick}
      onMouseDown={handleClearIconMouseDown}
    />
  )
}

FilterClearIcon.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default FilterClearIcon
