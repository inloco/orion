import { Table as SemanticTable } from '@inloco/semantic-ui-react'
import React from 'react'

import TableCell from './TableCell'
import TableHeaderCell from './TableHeaderCell'

const Table = props => <SemanticTable {...props} />

Table.Body = SemanticTable.Body
Table.Cell = TableCell
Table.Header = SemanticTable.Header
Table.HeaderCell = TableHeaderCell
Table.Row = SemanticTable.Row
Table.Footer = SemanticTable.Footer

export default Table
