import React from 'react'

import Dropdown from '../Dropdown'

const Select = props => <Dropdown {...props} selection />

Select.Divider = Dropdown.Divider
Select.Header = Dropdown.Header
Select.Item = Dropdown.Item
Select.Menu = Dropdown.Menu

export default Select
