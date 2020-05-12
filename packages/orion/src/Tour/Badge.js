import React from 'react'
import PropTypes from 'prop-types'

function Badge({ position }) {
  if (!position) return null

  const { top, left } = position

  return (
    <i
      className="orion-tour-badge"
      style={{
        top: `${top}px`,
        left: `${left}px`
      }}
    />
  )
}

Badge.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  })
}

export default Badge
