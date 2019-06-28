import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import { Dropdown, Layout, Menu } from '../'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('basic', () => (
    <Layout className="absolute left-0 top-0 w-full">
      <Layout.Topbar>
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
      <Layout.Main>Main Content</Layout.Main>
    </Layout>
  ))
