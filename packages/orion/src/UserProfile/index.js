import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../Icon'
import Dropdown from '../Dropdown'
import UserProfileHeaderItem from './UserProfileHeaderItem'
import UserProfileIcon from './UserProfileIcon'
import UserProfileButton from './UserProfileButton'
import UserProfileItem from './UserProfileItem'

const UserProfile = ({
  className,
  children,
  name,
  email,
  label,
  logoutUrl,
  logoutText,
  ...otherProps
}) => {
  const [headerChildren, otherChildren] = _.partition(
    React.Children.toArray(children),
    { type: UserProfileHeaderItem }
  )

  return (
    <Dropdown
      className={cx('orion user-profile', className)}
      trigger={
        <div>
          <div className="orion user-profile-name">{name}</div>
          {label && <div className="orion user-profile-label ">{label}</div>}
        </div>
      }
      compact
      size="small"
      direction="right"
      {...otherProps}>
      <Dropdown.Menu>
        <Dropdown.Header>
          <div className="orion user-profile-header-name">{name}</div>
          <div className="orion user-profile-header-email">{email}</div>
          {!_.isEmpty(headerChildren) && (
            <>
              <Dropdown.Divider />
              {headerChildren}
            </>
          )}
        </Dropdown.Header>
        {!_.isEmpty(otherChildren) && (
          <>
            <Dropdown.Divider />
            {otherChildren}
          </>
        )}
        <Dropdown.Divider />
        <form method="post" action={logoutUrl} id="orion-logout-form" />
        <Dropdown.Item
          className="orion user-profile-logout"
          as="button"
          type="submit"
          form="orion-logout-form">
          <Icon name="exit_to_app" />
          {logoutText}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

UserProfile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  label: PropTypes.string,
  logoutUrl: PropTypes.string,
  logoutText: PropTypes.string
}

UserProfile.HeaderItem = UserProfileHeaderItem
UserProfile.Icon = UserProfileIcon
UserProfile.Button = UserProfileButton
UserProfile.Item = UserProfileItem

export default UserProfile