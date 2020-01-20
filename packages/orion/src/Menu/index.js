import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu as SemanticMenu } from '@inloco/semantic-ui-react'

import { Sizes, sizePropType } from '../utils/sizes'

const Menu = ({ className, size, switcher, ...otherProps }) => (
  <SemanticMenu className={cx(className, size, { switcher })} {...otherProps} />
)

Menu.propTypes = {
  className: PropTypes.string,
  size: sizePropType,
  switcher: PropTypes.bool
}

Menu.defaultProps = {
  size: Sizes.DEFAULT
}

Menu.Header = SemanticMenu.Header
Menu.Item = SemanticMenu.Item
Menu.Menu = SemanticMenu.Menu

export default Menu
