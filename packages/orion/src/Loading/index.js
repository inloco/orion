import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import Lottie from 'react-lottie'

import { Sizes, sizePropType } from '../utils/sizes'
import animationData from './animationData'

const Loading = ({ className, inline, size, ...otherProps }) => {
  const classes = cx('orion loading-spinner', className, size, {
    'loading-spinner-inline': inline
  })
  return (
    <div className={classes} {...otherProps}>
      <Lottie
        isClickToPauseDisabled
        options={{
          loop: true,
          autoplay: true,
          animationData
        }}
      />
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
  inline: PropTypes.bool,
  size: sizePropType
}

Loading.defaultProps = {
  size: Sizes.DEFAULT
}

export default Loading
