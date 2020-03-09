import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Dropdown from '../../Dropdown'
import UserProfileIcon from '../UserProfileIcon'

const UserProfileItem = ({
  title,
  label,
  className,
  children,
  ...otherProps
}) => {
  const [iconChildren, otherChildren] = _.partition(
    React.Children.toArray(children),
    { type: UserProfileIcon }
  )

  return (
    <Dropdown.Item
      className={cx('orion user-profile-item', className)}
      {...otherProps}>
      <div className="orion user-profile-item-content">
        {iconChildren}
        <div className="orion user-profile-item-title">{title}</div>
        {label && (
          <label className="orion user-profile-item-label">{label}</label>
        )}
      </div>
      {otherChildren}
    </Dropdown.Item>
  )
}

UserProfileItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default UserProfileItem
