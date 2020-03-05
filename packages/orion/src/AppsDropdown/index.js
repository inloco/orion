import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, Dropdown } from '@inloco/semantic-ui-react'

const AppsDropdown = ({ className, options, onChange, ...otherProps }) => {
  const [selectedOptions, otherOptions] = _.partition(options, 'selected')

  return (
    <Dropdown
      className={cx('orion apps-dropdown', className)}
      icon="apps"
      {...otherProps}>
      <Dropdown.Menu>
        {_.map(selectedOptions, ({ text, image }, index) => (
          <Dropdown.Header key={index}>
            {image && (
              <div className="orion apps-dropdown-image">
                <Image {...image} />
              </div>
            )}
            <div className="orion text">{text}</div>
          </Dropdown.Header>
        ))}
        <Dropdown.Divider />
        {_.map(otherOptions, ({ text, image, ...otherProps }, index) => {
          return (
            <Dropdown.Item key={index} onClick={onChange} {...otherProps}>
              {image && (
                <div className="orion apps-dropdown-image">
                  <Image {...image} />
                </div>
              )}
              <div className="orion text">{text}</div>
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

AppsDropdown.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      image: PropTypes.shape({
        className: PropTypes.string
      })
    })
  ),
  onChange: PropTypes.func
}

export default AppsDropdown
