import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Popup } from '@inloco/semantic-ui-react'

import Icon from '../Icon'
import { Sizes } from '../utils/sizes'

const InfoIcon = ({ className, content, popupProps, ...otherProps }) => (
  <Popup
    size={Sizes.SMALL}
    trigger={
      <Icon
        className={cx('info-icon', className)}
        name="info"
        {...otherProps}
      />
    }
    position="right center"
    content={content}
    {...popupProps}
  />
)

InfoIcon.propTypes = {
  className: PropTypes.string,
  content: PropTypes.node,
  popupProps: PropTypes.object
}

export default InfoIcon
