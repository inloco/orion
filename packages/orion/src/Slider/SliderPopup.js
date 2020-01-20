import React from 'react'
import PropTypes from 'prop-types'

const SliderPopup = ({ min, max, value, labelsMask }) => {
  const popupRef = React.useRef()
  const [popupWidth, setPopupWidth] = React.useState(0)
  React.useEffect(() => {
    setPopupWidth(popupRef.current.clientWidth)
  }, [value])

  //CALCULATIONS
  const valuePercentage = calculateValuePercentage(value, min, max)
  const thumbVariation = calculateThumbVariation(valuePercentage)

  const leftMargin = `calc(${valuePercentage}% + ${thumbVariation}px)`
  const maskedValue = labelsMask ? labelsMask(value) : value

  return (
    <div
      ref={popupRef}
      className="orion-slider-popup"
      style={{
        left: leftMargin,
        marginLeft: -popupWidth / 2,
        marginRight: -popupWidth / 2
      }}>
      {maskedValue}
    </div>
  )
}

const calculateValuePercentage = (value, min, max) => {
  const range = max - min
  const startValue = value - min
  return (startValue * 100) / range
}

const calculateThumbVariation = valuePercentage => {
  const THUMB_WIDTH = 16
  const percentage = valuePercentage - 50
  const coefficient = THUMB_WIDTH / 100

  return -percentage * coefficient
}

SliderPopup.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  labelsMask: PropTypes.func
}
export default SliderPopup
