import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Table } from '@inloco/semantic-ui-react'
import React from 'react'

import { HorizontalAlignValues } from '../constants'
import Divider from '../../Divider'

const TableHeaderCell = ({
  children,
  className,
  divider,
  horizontalAlign,
  ...otherProps
}) => {
  const classes = cx(className, horizontalAlign && `text-${horizontalAlign}`)
  return (
    <Table.HeaderCell
      className={classes}
      title={_.isString(children) ? children : null}
      {...otherProps}>
      <div className="orion inner-cell">{children}</div>
      {divider === true ? <Divider /> : divider}
    </Table.HeaderCell>
  )
}

TableHeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  divider: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  horizontalAlign: PropTypes.oneOf(_.values(HorizontalAlignValues))
}

export default TableHeaderCell
