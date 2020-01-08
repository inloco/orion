import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const ClickOutside = ({ as, children, onClickOutside, ...otherProps }) => {
  const ref = useRef()

  useEffect(() => {
    const handleClick = event => {
      if (!ref.current.contains(event.target)) {
        onClickOutside(event)
      }
    }

    document.addEventListener('mouseup', handleClick, true)
    return () => {
      document.removeEventListener('mouseup', handleClick, true)
    }
  }, [onClickOutside])

  const ElementType = as
  return (
    <ElementType ref={ref} {...otherProps}>
      {children}
    </ElementType>
  )
}

ClickOutside.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  onClickOutside: PropTypes.func.isRequired
}

ClickOutside.defaultProps = {
  as: 'div'
}

export default ClickOutside
