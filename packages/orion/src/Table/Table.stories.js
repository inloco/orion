import _ from 'lodash'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import { Table } from '../'

const DEFAULT_HEADERS = ['Name', 'Project']
const DEFAULT_DATA = [['Maíra', 'Insights'], ['Gileno', 'Accounts']]

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('Basic', () => {
    const headers = object('Headers', DEFAULT_HEADERS)
    const data = object('Data', DEFAULT_DATA)
    return (
      <Table>
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
      </Table>
    )
  })
  .add('Sub headers', () => {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell className="text-center w-384" colspan="2" divider>
              Visits
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell className="text-center">Count</Table.HeaderCell>
            <Table.HeaderCell className="text-center">
              vs Comparison Average
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Loja de sorvete da esquina</Table.Cell>
            <Table.Cell className="text-center">30</Table.Cell>
            <Table.Cell className="text-center">-15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Mercadinho da esquina</Table.Cell>
            <Table.Cell className="text-center">45</Table.Cell>
            <Table.Cell className="text-center">+15</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  })
