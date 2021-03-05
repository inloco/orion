import { Table as SemanticTable } from '@inloco/semantic-ui-react'
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import TableCell from './TableCell'
import TableHeaderCell from './TableHeaderCell'

const Table = props => <SemanticTable {...props} />

const TableRow = ({ className, ...otherProps }) => (
  <SemanticTable.Row className={cx('table-row', className)} {...otherProps} />
)

TableRow.propTypes = {
  className: PropTypes.string
}

Table.Body = SemanticTable.Body
Table.Cell = TableCell
Table.Header = SemanticTable.Header
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow
Table.Footer = SemanticTable.Footer

export default Table
