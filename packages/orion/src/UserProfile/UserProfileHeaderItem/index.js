import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import UserProfileIcon from '../UserProfileIcon'

const UserProfileHeaderItem = ({
  className,
  children,
  title,
  label,
  selected,
  ...otherProps
}) => {
  const [iconChildren, otherChildren] = _.partition(
    React.Children.toArray(children),
    { type: UserProfileIcon }
  )

  return (
    <div
      className={cx('orion user-profile-header-item', {
        selected
      })}
      {...otherProps}>
      <div className="orion user-profile-header-item-content">
        {iconChildren}
        <div className="orion user-profile-header-item-title">{title}</div>
        {label && (
          <label className="orion user-profile-header-item-label">
            {label}
          </label>
        )}
      </div>
      {otherChildren}
    </div>
  )
}

UserProfileHeaderItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  selected: PropTypes.bool
}

export default UserProfileHeaderItem
