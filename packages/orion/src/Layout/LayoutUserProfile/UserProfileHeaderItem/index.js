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
  ...otherProps
}) => {
  const [iconChildren, otherChildren] = _.partition(
    React.Children.toArray(children),
    { type: UserProfileIcon }
  )

  return (
    <div className="header-item" {...otherProps}>
      <div className="header-item-content">
        {iconChildren}
        <div className="header-item-title">{title}</div>
        {label && <label>{label}</label>}
      </div>
      {otherChildren}
    </div>
  )
}

UserProfileHeaderItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  label: PropTypes.string
}

export default UserProfileHeaderItem
