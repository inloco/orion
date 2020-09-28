import _ from 'lodash'
import React from 'react'
import { number, object, radios, boolean } from '@storybook/addon-knobs'

import { Table } from '../'

const DEFAULT_HEADERS = ['Name', 'Project']
const DEFAULT_DATA = [
  ['Maíra', 'Insights'],
  ['Gileno', 'Accounts']
]

export default {
  title: 'Table'
}

export const basic = () => {
  const headers = object('Headers', DEFAULT_HEADERS)
  const data = object('Data', DEFAULT_DATA)
  const selectable = boolean('Selectable', false)
  return (
    <Table selectable={selectable}>
      <Table.Header>
        <Table.Row>
          {_.map(headers, (title, index) => (
            <Table.HeaderCell key={index}>{title}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.map(data, (row, index) => (
          <Table.Row key={index}>
            {_.map(row, (value, rowIndex) => (
              <Table.Cell key={rowIndex}>{value}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan="2" className="text-center">
            Footer
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export const subHeaders = () => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell
            className="w-384"
            horizontalAlign="center"
            colSpan="2"
            divider>
            Visits
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell horizontalAlign="center">Count</Table.HeaderCell>
          <Table.HeaderCell horizontalAlign="center">
            vs Comparison Average
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Loja de sorvete da esquina</Table.Cell>
          <Table.Cell horizontalAlign="center" highlight>
            30
          </Table.Cell>
          <Table.Cell horizontalAlign="center">-15</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mercadinho da esquina</Table.Cell>
          <Table.Cell horizontalAlign="center" highlight>
            45
          </Table.Cell>
          <Table.Cell horizontalAlign="center">+15</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export const sortable = () => {
  const headers = object('Headers', DEFAULT_HEADERS)
  const data = object('Data', DEFAULT_DATA)
  const sortableColumnIndex = number('Sortable Column Index', 0)
  const order = radios(
    'Order',
    { Ascending: 'ascending', Descending: 'descending' },
    'ascending'
  )
  return (
    <Table sortable>
      <Table.Header>
        <Table.Row>
          {_.map(headers, (title, index) => (
            <Table.HeaderCell
              key={index}
              sorted={sortableColumnIndex === index ? order : null}>
              {title}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.map(data, (row, index) => (
          <Table.Row key={index}>
            {_.map(row, (value, rowIndex) => (
              <Table.Cell key={rowIndex}>{value}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
