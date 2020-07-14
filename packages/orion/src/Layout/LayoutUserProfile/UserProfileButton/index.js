import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Button from '../../../Button'
import Tooltip from '../../../Tooltip'

const UserProfileButton = ({ tooltip, tooltipOpen, ...props }) => {
  const button = <Button secondary subtle icon {...props} />
  return tooltip ? (
    <Tooltip
      {...(!_.isUndefined(tooltipOpen) && { open: tooltipOpen })}
      trigger={button}
      position="top center"
      content={tooltip}
    />
  ) : (
    button
  )
}

UserProfileButton.propTypes = {
  tooltip: PropTypes.string,
  tooltipOpen: PropTypes.bool
}

export default UserProfileButton
