import React from 'react'

import Button from '../../../Button'
import Tooltip from '../../../Tooltip'

const UserProfileButton = ({ tooltip, ...props }) => {
  const button = <Button secondary subtle icon {...props} />
  return tooltip ? (
    <Tooltip trigger={button} position="top center" content={tooltip} />
  ) : (
    button
  )
}

export default UserProfileButton
