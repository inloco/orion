import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../../../Icon'

const UserProfileEditLink = ({
  as: AsElementType,
  className,
  children,
  ...otherProps
}) => {
  const ElementType = AsElementType || 'a'

  return (
    <ElementType
      className={cx('user-profile-edit-link', className)}
      {...otherProps}>
      <Icon name="edit" />
      {children}
    </ElementType>
  )
}

UserProfileEditLink.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node
}

export default UserProfileEditLink
