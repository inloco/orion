import _ from 'lodash'
import { loremIpsum } from 'lorem-ipsum'
import React from 'react'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'

import { Dropdown, Layout, Menu } from '../'

export default {
  title: 'Layout',
  decorators: [withKnobs]
}

export const basic = () => (
  <Layout className="absolute left-0 top-0 w-full">
    <Layout.Topbar dimmed={boolean('Dimmed Topbar')}>
      <Menu
        items={object('Items', [
          { name: 'Onboarding', key: 0 },
          { name: 'Insights', key: 1 },
          { name: 'Automation', key: 2 },
          {
            name: 'My Stuff',
            key: 3,
            icon: 'library_books',
            position: 'right'
          }
        ])}
        defaultActiveIndex={0}
      />
      <Dropdown
        className="ml-auto"
        text="Maira Bello"
        options={[
          { text: 'Account', value: 1 },
          { text: 'Logout', value: 2 }
        ]}
        compact
        size="small"
      />
    </Layout.Topbar>
    <Layout.Main>
      {_.times(10, index => (
        <p key={index}>{loremIpsum({ count: 1, units: 'paragraph' })}</p>
      ))}
    </Layout.Main>
  </Layout>
)
