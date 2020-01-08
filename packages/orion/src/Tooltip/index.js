import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Popup } from '@inloco/semantic-ui-react'

import { Sizes } from '../utils/sizes'

const Tooltip = ({ className, ...otherProps }) => (
  <Popup
    className={cx(className, 'tooltip')}
    size={Sizes.SMALL}
    {...otherProps}
  />
)

Tooltip.propTypes = {
  className: PropTypes.string
}

export default Tooltip
