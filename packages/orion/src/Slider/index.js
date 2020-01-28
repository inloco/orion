import React from 'react'
import PropTypes from 'prop-types'

import SliderPopup from './SliderPopup'

const Slider = ({ onChange, labelsMask, ...otherProps }) => {
  const { min, max, value: propValue } = otherProps

  const [stateValue, setStateValue] = React.useState(propValue || min)
  const [hover, setHover] = React.useState(false)
  const [focus, setFocus] = React.useState(false)

  const handleChange = e => {
    const value = Number(e.target.value)
    setStateValue(value)
    if (onChange) onChange(value)
  }

  const maskedMin = labelsMask ? labelsMask(min) : min
  const maskedMax = labelsMask ? labelsMask(max) : max
  const value = propValue || stateValue
  const showSlider = hover || focus

  return (
    <div className="orion-slider-wrapper">
      <input
        type="range"
        className="orion-slider"
        {...otherProps}
        value={value}
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
      {showSlider && (
        <SliderPopup
          min={min}
          max={max}
          value={value}
          labelsMask={labelsMask}
        />
      )}
    </div>
  )
}

Slider.defaultProps = {
  min: 0,
  max: 100
}

Slider.propTypes = {
  labelsMask: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  value: PropTypes.number
}

export default Slider
