import _ from 'lodash'
import { loremIpsum } from 'lorem-ipsum'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, boolean, object, withKnobs } from '@storybook/addon-knobs'

import appImage from '../../storyImages/app.png'
import { Icon, Layout, Menu } from '../'

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
            { name: 'Automation', key: 2 }
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
        onChange={action('onChange')}
      />
      <Layout.Topbar.Divider />
      <Layout.UserProfile
        name={text('Name', 'Mark Weiser', 'UserProfile')}
        label={text('Label', 'In Loco', 'UserProfile')}
        email={text('Email', 'mark.weiser@inloco.com.br', 'UserProfile')}
        logoutUrl={text('Logout URL', '#', 'UserProfile')}
        logoutText={text('Logout Text', 'Logout', 'UserProfile')}>
        {boolean('Enabled', true, 'UserProfile.HeaderItem') && (
          <Layout.UserProfile.HeaderItem
            selected={boolean('Selected', true, 'UserProfile.HeaderItem')}
            title={text('Title', 'In Loco', 'UserProfile.HeaderItem')}
            label={text('Label', 'admin', 'UserProfile.HeaderItem')}>
            <Layout.UserProfile.Icon>
              <img src={appImage} alt="organization icon" />
            </Layout.UserProfile.Icon>
            {boolean('Button', true, 'UserProfile.HeaderItem') && (
              <Layout.UserProfile.Button
                tooltip={text('Button tooltip', 'Back to Home', 'UserProfile')}>
                <Icon name="home" />
              </Layout.UserProfile.Button>
            )}
          </Layout.UserProfile.HeaderItem>
        )}
        {boolean('Enabled', true, 'UserProfile.Items') && (
          <>
            <Layout.UserProfile.Item title="Tim" label="developer">
              <Layout.UserProfile.Icon>
                <img src={appImage} alt="organization icon" />
              </Layout.UserProfile.Icon>
            </Layout.UserProfile.Item>
            <Layout.UserProfile.Item title="Intimissimi" label="reviewer">
              <Layout.UserProfile.Icon>
                <img src={appImage} alt="organization icon" />
              </Layout.UserProfile.Icon>
            </Layout.UserProfile.Item>
          </>
        )}
      </Layout.UserProfile>
    </Layout.Topbar>
    <Layout.Main>
      {_.times(10, index => (
        <p key={index}>{loremIpsum({ count: 1, units: 'paragraph' })}</p>
      ))}
    </Layout.Main>
  </Layout>
)
