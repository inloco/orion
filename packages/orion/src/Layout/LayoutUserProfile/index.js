import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../../Icon'
import Dropdown from '../../Dropdown'
import UserProfileEditLink from './UserProfileEditLink'
import UserProfileHeaderItem from './UserProfileHeaderItem'
import UserProfileIcon from './UserProfileIcon'
import UserProfileButton from './UserProfileButton'
import UserProfileItem from './UserProfileItem'

const LayoutUserProfile = ({
  className,
  children,
  name,
  email,
  label,
  logoutUrl,
  logoutText,
  onLogout,
  ...otherProps
}) => {
  const [headerChildren, notHeaderChildren] = _.partition(
    React.Children.toArray(children),
    { type: UserProfileHeaderItem }
  )

  const [editLinkChildren, otherChildren] = _.partition(notHeaderChildren, {
    type: UserProfileEditLink
  })

  return (
    <Dropdown
      className={cx('layout-user-profile', className)}
      trigger={
        <div className="layout-user-profile-trigger">
          <div className="layout-user-profile-name">{name}</div>
          {label && <label>{label}</label>}
        </div>
      }
      compact
      size="small"
      direction="right"
      {...otherProps}>
      <Dropdown.Menu>
        <Dropdown.Header>
          <div className="layout-user-profile-header-name">{name}</div>
          <div className="layout-user-profile-header-email">{email}</div>
          {editLinkChildren}
          {!_.isEmpty(headerChildren) && (
            <>
              <Dropdown.Divider />
              {headerChildren}
            </>
          )}
        </Dropdown.Header>
        <div className="layout-user-profile-children-container">
          {!_.isEmpty(otherChildren) && (
            <>
              <Dropdown.Divider />
              {otherChildren}
            </>
          )}
        </div>
        <Dropdown.Divider />
        <form
          className="layout-user-profile-logout"
          method="post"
          action={logoutUrl}
          id="orion-logout-form">
          <button onClick={onLogout}>
            <Icon name="exit_to_app" />
            {logoutText}
          </button>
        </form>
      </Dropdown.Menu>
    </Dropdown>
  )
}

LayoutUserProfile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  label: PropTypes.string,
  logoutUrl: PropTypes.string,
  logoutText: PropTypes.string,
  onLogout: PropTypes.func
}

LayoutUserProfile.EditLink = UserProfileEditLink
LayoutUserProfile.HeaderItem = UserProfileHeaderItem
LayoutUserProfile.Icon = UserProfileIcon
LayoutUserProfile.Button = UserProfileButton
LayoutUserProfile.Item = UserProfileItem

export default LayoutUserProfile
