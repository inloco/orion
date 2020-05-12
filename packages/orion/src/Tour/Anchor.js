import React from 'react'
import PropTypes from 'prop-types'

function Anchor({ className, position }) {
  const { top, left } = position

  return (
    <i
      className={className}
      style={{
        position: 'absolute',
        top: `${top}px`,
        left: `${left}px`
      }}
    />
  )
}

Anchor.propTypes = {
  className: PropTypes.string,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
  }).isRequired
}

export default Anchor
