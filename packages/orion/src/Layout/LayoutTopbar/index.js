import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import TopbarDivider from './TopbarDivider'
import { Alert, useAlert } from '../LayoutAlert'

const mainPaddingTop = 24

const LayoutTopbar = ({ className, children, ...otherProps }) => {
  const [opacity, setOpacity] = React.useState(0)
  const classes = cx('layout-topbar', className)
  const alertProps = useAlert()

  React.useEffect(() => {
    const listenScrollEvent = event => {
      const whiteOpacity =
        Math.min(window.scrollY, mainPaddingTop) / mainPaddingTop
      setOpacity(whiteOpacity)
    }
    window.addEventListener('scroll', listenScrollEvent)

    return () => window.removeEventListener('scroll', listenScrollEvent)
  }, [])

  const style = {
    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
    borderBottom: `1px solid rgba(61, 63, 62, ${0.16 * opacity})`
  }

  return (
    <>
      <div className={classes} {...otherProps} style={style}>
        {children}
        {!!alertProps && <Alert {...alertProps} />}
      </div>
    </>
  )
}

LayoutTopbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

LayoutTopbar.Divider = TopbarDivider

export default LayoutTopbar
