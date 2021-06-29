import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import Dropdown from '../Dropdown'

import OrgItem from './OrgItem'

const OrgDropdown = ({ className, ...otherProps }) => {
  const selectedValue = otherProps?.value || otherProps?.defaultValue
  const selectedOption = _.omit(
    selectedValue
      ? _.find(otherProps?.options, { value: selectedValue })
      : otherProps?.options?.[0],
    'label'
  )

  const orgOptions = _.map(otherProps?.options, option =>
    _.omit(
      {
        ...option,
        content: <OrgItem {...option} />
      },
      'image'
    )
  )

  return (
    <Dropdown
      compact
      fluid
      {...otherProps}
      options={orgOptions}
      className={cx('orgdropdown', className)}
      trigger={
        <div className="orgdropdown-trigger">
          <OrgItem {...selectedOption} />
        </div>
      }
    />
  )
}

OrgDropdown.propTypes = {
  className: PropTypes.string
}

export default OrgDropdown
