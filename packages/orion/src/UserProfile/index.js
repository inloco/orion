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
      className={cx('orion-user-profile', className)}
      trigger={
        <div>
          <div className="orion-user-profile__name">{name}</div>
          {label && <div className="orion-user-profile__label ">{label}</div>}
        </div>
      }
      compact
      size="small"
      direction="right"
      {...otherProps}>
      <Dropdown.Menu className="orion-user-profile__menu">
        <Dropdown.Header className="orion-user-profile__header">
          <div className="orion-user-profile__header-name">{name}</div>
          <div className="orion-user-profile__header-email">{email}</div>
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
          className="orion-user-profile__logout-button"
          as="button"
          type="submit"
          form="orion-logout-form">
          <Icon
            className="orion-user-profile__logout-icon"
            name="exit_to_app"
          />
          {logoutText}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

UserProfile.HeaderItem = UserProfileHeaderItem
UserProfile.Icon = UserProfileIcon
UserProfile.Button = UserProfileButton
UserProfile.Item = UserProfileItem
// Layout.Main = LayoutMain
// Layout.Topbar = LayoutTopbar

export default UserProfile
