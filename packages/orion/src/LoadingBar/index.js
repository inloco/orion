import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

const LoadingBar = ({ className, color }) => {
  return (
    <div className={cx('orion loading-bar', className)}>
      <div className={`loading-bar-content bg-${color}`} />
    </div>
  )
}

LoadingBar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
}

LoadingBar.defaultProps = {
  color: 'robinblue-500'
}

export default LoadingBar
