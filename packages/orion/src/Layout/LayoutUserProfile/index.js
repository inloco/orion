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
  footer,
  label,
  logoutUrl,
  logoutText,
  imageUrl,
  onLogout,
  ...otherProps
}) => {
  const [headerChildren, notHeaderChildren] = _.partition(
    React.Children.toArray(children),
    {
      type: UserProfileHeaderItem
    }
  )

  const [editLinkChildren, otherChildren] = _.partition(notHeaderChildren, {
    type: UserProfileEditLink
  })

  return (
    <Dropdown
      className={cx('layout-user-profile', className)}
      trigger={
        <div className="layout-user-profile-trigger">
          <div className="layout-user-profile-image">
            {imageUrl ? (
              <img alt="user-profile" src={imageUrl} />
            ) : (
              <Icon name="person" />
            )}
          </div>
          <div className="layout-user-profile-trigger-texts">
            <div>{name}</div>
            {label && <label>{label}</label>}
          </div>
        </div>
      }
      compact
      size="small"
      direction="right"
      {...otherProps}>
      <Dropdown.Menu>
        <Dropdown.Header>
          <div className="layout-user-profile-image">
            {imageUrl ? (
              <img alt="user-profile" src={imageUrl} />
            ) : (
              <Icon name="person" />
            )}
          </div>
          <div className="layout-user-profile-header-name">{name}</div>
          <div className="layout-user-profile-header-email">{email}</div>
          {editLinkChildren}
          <Dropdown.Divider className="header-divider" />
          {!_.isEmpty(headerChildren) && (
            <>
              {headerChildren}
              <Dropdown.Divider />
            </>
          )}
        </Dropdown.Header>
        <div className="layout-user-profile-children-container">
          {!_.isEmpty(otherChildren) && (
            <>
              {otherChildren}
              <Dropdown.Divider />
            </>
          )}
        </div>
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
        {footer}
      </Dropdown.Menu>
    </Dropdown>
  )
}

LayoutUserProfile.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  footer: PropTypes.node,
  label: PropTypes.string,
  logoutUrl: PropTypes.string,
  logoutText: PropTypes.string,
  imageUrl: PropTypes.string,
  onLogout: PropTypes.func
}

LayoutUserProfile.EditLink = UserProfileEditLink
LayoutUserProfile.HeaderItem = UserProfileHeaderItem
LayoutUserProfile.Icon = UserProfileIcon
LayoutUserProfile.Button = UserProfileButton
LayoutUserProfile.Item = UserProfileItem

export default LayoutUserProfile
