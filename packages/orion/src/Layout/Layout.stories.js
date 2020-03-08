import _ from 'lodash'
import { loremIpsum } from 'lorem-ipsum'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'

import appImage from '../../storyImages/app.png'
import { Dropdown, Layout, Menu } from '../'

const actions = {
  onChange: action('onChange')
}

export default {
  title: 'Layout',
  decorators: [withKnobs]
}

export const basic = () => (
  <Layout className="absolute left-0 top-0 w-full">
    <Layout.Topbar dimmed={boolean('Dimmed', false, 'Topbar')}>
      <Menu
        items={object(
          'Items',
          [
            { name: 'Onboarding', key: 0 },
            { name: 'Insights', key: 1 },
            { name: 'Automation', key: 2 },
            {
              name: 'My Stuff',
              key: 3,
              icon: 'library_books',
              position: 'right'
            }
          ],
          'Topbar'
        )}
        defaultActiveIndex={0}
      />
      <Layout.AppsDropdown
        options={object(
          'Options',
          [
            {
              text: 'Engage',
              value: 'engage',
              image: { src: appImage },
              selected: true
            },
            {
              text: 'Integrations',
              value: 'integrations',
              image: { src: appImage }
            },
            {
              text: 'Places',
              value: 'places',
              image: { src: appImage }
            }
          ],
          'AppsDropdown'
        )}
        {...actions}
      />
      <Dropdown
        className="ml-auto"
        text="Maira Bello"
        options={[{ text: 'Account', value: 1 }, { text: 'Logout', value: 2 }]}
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
