import _ from 'lodash'
import { loremIpsum } from 'lorem-ipsum'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { text, boolean, object, radios } from '@storybook/addon-knobs'

import incognia from '../../storyImages/incognia.svg'
import myapps from '../../storyImages/myapps.svg'
import appImage from '../../storyImages/app.png'
import { Icon, Layout, Menu, OrgDropdown } from '../'

const storyMetadata = {
  title: 'Layout'
}

export default storyMetadata

const paragraphs = _.times(10, () =>
  loremIpsum({ count: 1, units: 'paragraph' })
)

const orgOptions = [
  {
    value: 1,
    text: 'Incognia',
    label: 'Admin',
    image: { as: () => <img alt="app" src={incognia} /> }
  },
  {
    value: 2,
    text: 'Inloco',
    label: 'Developer'
  }
]

const Footer = (
  <div className="flex justify-center items-center p-8 border-t-1 border-gray-900-16 space-x-8">
    <a href="/help" className="text-sm font-normal text-gray-800">
      Help
    </a>
    <div className="bg-gray-800 w-4 h-4 rounded-full" />
    <a href="/privacy-policy" className="text-sm font-normal text-gray-800">
      Privacy Policy
    </a>
    <div className="bg-gray-800 w-4 h-4 rounded-full" />
    <a href="/terms-of-use" className="text-sm font-normal text-gray-800">
      Terms of Use
    </a>
  </div>
)

export const basic = () => {
  const sidebar = boolean('Sidebar', true, 'Sidebar')
  return (
    <Layout className="flex w-full" sidebar={sidebar}>
      {sidebar && (
        <Layout.Sidebar>
          <Layout.Sidebar.Content className="pt-0">
            <Menu vertical>
              <Menu.Header>Risk Assessments</Menu.Header>
              <Menu.Item name="Onboarding" icon="account_circle" active />
              <Menu.Item name="Logins" icon="login" />
              <Menu.Item name="Payments" icon="payment" />
              <Menu.Item name="Files" icon="folder_open" />
            </Menu>
            <Layout.Sidebar.Divider />
            <Menu vertical>
              <Menu.Header>SDK</Menu.Header>
              <Menu.Item name="Apps" icon="developer_mode" />
              <Menu.Item name="Installations" icon="smartphone" />
            </Menu>
            <Layout.Sidebar.Divider />
            <Menu vertical>
              <Menu.Header>API</Menu.Header>
              <Menu.Item name="Credentials" icon="vpn_key" />
              <Menu.Item name="Usage" icon="data_usage" />
              <Menu.Item name="API Reference" icon="code" />
            </Menu>
          </Layout.Sidebar.Content>
          <Layout.Sidebar.Footer>
            <Layout.Sidebar.Divider className="mb-0" />
            <OrgDropdown
              style={{
                padding: '0 16px 0 0'
              }}
              options={orgOptions}
              upward
            />
          </Layout.Sidebar.Footer>
        </Layout.Sidebar>
      )}
      <Layout.Main>
        <Layout.Topbar>
          <h1 className="font-display font-medium text-lg text-gray-800 mr-auto">
            Onboarding
          </h1>
          <Layout.AppsDropdown
            options={object(
              'Options',
              [
                {
                  text: 'Risk assessments',
                  value: 'riskAssessments',
                  image: { as: () => <img alt="app" src={incognia} /> },
                  selected: true
                },
                {
                  text: 'Integrations',
                  value: 'integrations',
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
            label={text('Label', 'Incognia', 'UserProfile')}
            email={text('Email', 'mark.weiser@incognia.com', 'UserProfile')}
            footer={Footer}
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
                title={text('Title', 'Incognia', 'UserProfile.HeaderItem')}
                label={text('Label', 'admin', 'UserProfile.HeaderItem')}>
                <Layout.UserProfile.Icon>
                  <img src={appImage} alt="organization icon" />
                </Layout.UserProfile.Icon>
                {boolean('Button', true, 'UserProfile.HeaderItem') && (
                  <Layout.UserProfile.Button
                    tooltip={text(
                      'Button tooltip',
                      'Back to Home',
                      'UserProfile'
                    )}>
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
        {boolean('Enabled', true, 'Alert') && (
          <Layout.Alert
            content={text('Message', 'This is an Alert', 'Alert')}
            type={radios(
              'Type',
              {
                Warning: 'warning',
                Info: 'info'
              },
              'warning',
              'Alert'
            )}
          />
        )}
        <Layout.Content>
          {_.map(paragraphs, (paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Layout.Content>
      </Layout.Main>
    </Layout>
  )
}
