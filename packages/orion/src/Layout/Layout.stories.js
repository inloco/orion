import _ from 'lodash'
import { loremIpsum } from 'lorem-ipsum'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, boolean, object } from '@storybook/addon-knobs'

import incognia from '../../storyImages/incognia.svg'
import myapps from '../../storyImages/myapps.svg'
import appImage from '../../storyImages/app.png'
import { Icon, Layout, Menu } from '../'

export default {
  title: 'Layout'
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
              text: 'Incognia',
              value: 'incognia',
              image: { as: () => <img alt="app" src={incognia} /> },
              selected: true
            },
            {
              text: 'My apps',
              value: 'myapps',
              image: { as: () => <img alt="app" src={myapps} /> }
            }
          ],
          'AppsDropdown'
        )}
        tooltip={text('Tooltip', 'Switch Product', 'AppsDropdown')}
        onChange={action('onChange')}
      />
      <Layout.Topbar.Divider />
      <Layout.UserProfile
        name={text('Name', 'Mark Weiser', 'UserProfile')}
        label={text('Label', 'In Loco', 'UserProfile')}
        email={text('Email', 'mark.weiser@inloco.com.br', 'UserProfile')}
        logoutUrl={text('Logout URL', '#', 'UserProfile')}
        logoutText={text('Logout Text', 'Logout', 'UserProfile')}
        imageUrl={text('Image URL', appImage, 'UserProfile')}>
        {boolean('Enabled', true, 'UserProfile.EditLink') && (
          <Layout.UserProfile.EditLink
            href={text('href', '#', 'UserProfile.EditLink')}>
            {text('Text', 'My Profile', 'UserProfile.EditLink')}
          </Layout.UserProfile.EditLink>
        )}
        {boolean('Enabled', true, 'UserProfile.HeaderItem') && (
          <Layout.UserProfile.HeaderItem
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
