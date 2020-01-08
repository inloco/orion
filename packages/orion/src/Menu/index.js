import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Menu as SemanticMenu } from '@inloco/semantic-ui-react'

const Menu = ({ className, switcher, ...otherProps }) => (
  <SemanticMenu className={cx(className, { switcher })} {...otherProps} />
)

Menu.propTypes = {
  className: PropTypes.string,
  switcher: PropTypes.bool
}

Menu.Header = SemanticMenu.Header
Menu.Item = SemanticMenu.Item
Menu.Menu = SemanticMenu.Menu

export default Menu
