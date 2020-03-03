import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '../../Button'

const UserProfileButton = ({ className, children, ...otherProps }) => {
  return (
    <Button
      secondary
      subtle
      icon
      className={cx('orion user-profile-button', className)}
      {...otherProps}>
      {children}
    </Button>
  )
}

UserProfileButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default UserProfileButton
