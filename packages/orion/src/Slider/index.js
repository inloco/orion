import React from 'react'
import PropTypes from 'prop-types'

import SliderPopup from './SliderPopup'

const Slider = ({ onChange, labelsMask, ...otherProps }) => {
  const { min, max, value = min } = otherProps

  const [controlledValue, setControlledValue] = React.useState()
  React.useEffect(() => {
    if (value !== controlledValue) {
      setControlledValue(value)
    }
  }, [controlledValue, value])

  const handleChange = e => {
    const value = Number(e.target.value)
    setControlledValue(value)
    if (onChange) onChange(value)
  }

  const maskedMin = labelsMask ? labelsMask(min) : min
  const maskedMax = labelsMask ? labelsMask(max) : max

  return (
    <div className="orion-slider-wrapper">
      <input
        type="range"
        className="orion-slider"
        {...otherProps}
        value={`${controlledValue}`}
        onChange={handleChange}
      />
      <div className="orion-slider-labels">
        <div>{maskedMin}</div>
        <div>{maskedMax}</div>
      </div>
      {controlledValue && (
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
