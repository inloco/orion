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
      <div className="orion user-profile-header-item__content">
        {iconChildren}
        <div className="orion user-profile-header-item__title">{title}</div>
        {label && (
          <div className="orion user-profile-header-item__label">{label}</div>
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
