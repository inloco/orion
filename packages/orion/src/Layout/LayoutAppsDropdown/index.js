import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, Dropdown } from '@inloco/semantic-ui-react'

import Icon from '../../Icon'
import Tooltip from '../../Tooltip'

const LayoutAppsDropdown = ({
  className,
  options,
  tooltip,
  onChange,
  ...otherProps
}) => {
  const [selectedOptions, otherOptions] = _.partition(options, 'selected')

  const icon = <Icon name="apps" />

  return (
    <Dropdown
      className={cx('layout-apps-dropdown', className)}
      icon={
        tooltip ? (
          <Tooltip trigger={icon} position="bottom center" content={tooltip} />
        ) : (
          icon
        )
      }
      {...otherProps}>
      <Dropdown.Menu>
        {_.map(selectedOptions, ({ text, image }, index) => (
          <Dropdown.Header key={index}>
            {image && (
              <div className="layout-apps-dropdown-image">
                <Image {...image} />
              </div>
            )}
            <div className="layout-apps-dropdown-text">{text}</div>
          </Dropdown.Header>
        ))}
        <Dropdown.Divider />
        {_.map(otherOptions, ({ text, image, ...otherProps }, index) => {
          return (
            <Dropdown.Item key={index} onClick={onChange} {...otherProps}>
              {image && (
                <div className="layout-apps-dropdown-image">
                  <Image {...image} />
                </div>
              )}
              <div className="layout-apps-dropdown-text">{text}</div>
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

LayoutAppsDropdown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        className: PropTypes.string
      })
    })
  ),
  tooltip: PropTypes.string,
  onChange: PropTypes.func
}

export default LayoutAppsDropdown
