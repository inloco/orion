import React from 'react'
import PropTypes from 'prop-types'

import SliderPopup from './SliderPopup'

const Slider = ({ onChange, labelsMask, ...otherProps }) => {
  const { min = 0, max = 100, value = min } = otherProps

  //HOOKS
  const [controlledValue, setControlledValue] = React.useState()
  const [hover, setHover] = React.useState(false)
  const [focus, setFocus] = React.useState(false)
  React.useEffect(() => {
    setControlledValue(value)
  }, [value])

  //EVENT HANDLERS
  const handleChange = e => {
    const value = Number(e.target.value)
    setControlledValue(value)
    if (onChange) onChange(value)
  }

  //DERIVATIONS
  const showPopup = hover || focus

  const maskedMin = labelsMask ? labelsMask(min) : min
  const maskedMax = labelsMask ? labelsMask(max) : max

  return (
    <div className="orion-slider-wrapper">
      <input
        type="range"
        className="orion-slider"
        {...otherProps}
        value={controlledValue}
        onChange={handleChange}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <div className="orion-slider-labels">
        <div>{maskedMin}</div>
        <div>{maskedMax}</div>
      </div>
      {showPopup && (
        <SliderPopup
          min={min}
          max={max}
          value={controlledValue}
          labelsMask={labelsMask}
        />
      )}
    </div>
  )
}

Slider.propTypes = {
  labelsMask: PropTypes.func,
  onChange: PropTypes.func
}

export default Slider
