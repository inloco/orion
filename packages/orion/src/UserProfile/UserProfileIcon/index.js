import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

const UserProfileIcon = ({ className, children, ...otherProps }) => {
  return (
    <div className={cx('orion-user-profile-icon', className)} {...otherProps}>
      {children}
    </div>
  )
}

UserProfileIcon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default UserProfileIcon
