import React from 'react'
import { text, boolean, withKnobs } from '@storybook/addon-knobs'

import appImage from '../../storyImages/app.png'
import { UserProfile, Icon } from '../'

export default {
  title: 'UserProfile',
  decorators: [withKnobs]
}
export const basic = () => (
  <div className="flex justify-end">
    <UserProfile
      name={text('Name', 'Mark Weiser')}
      label={text('Label', 'In Loco')}
      email={text('Email', 'mark.weiser@inloco.com.br')}
      logoutUrl={text('Logout URL', '#')}
      logoutText={text('Logout Text', 'Logout')}
    />
  </div>
)

export const withChildren = () => (
  <div className="flex justify-end">
    <UserProfile
      name={text('Name', 'Mark Weiser', 'UserProfile')}
      label={text('Label', 'In Loco', 'UserProfile')}
      email={text('Email', 'mark.weiser@inloco.com.br', 'UserProfile')}
      logoutUrl={text('Logout URL', '#', 'UserProfile')}
      logoutText={text('Logout Text', 'Logout', 'UserProfile')}>
      {boolean('Enabled', true, 'HeaderItem') && (
        <UserProfile.HeaderItem
          selected={boolean('Selected', true, 'HeaderItem')}
          title={text('Title', 'In Loco', 'HeaderItem')}
          label={text('Label', 'admin', 'HeaderItem')}>
          <UserProfile.Icon>
            <img src={appImage} alt="organization icon" />
          </UserProfile.Icon>
          {boolean('Button', true, 'HeaderItem') && (
            <UserProfile.Button>
              <Icon name="home" />
            </UserProfile.Button>
          )}
        </UserProfile.HeaderItem>
      )}
      {boolean('Enabled', true, 'UserProfile.Items') && (
        <>
          <UserProfile.Item title="Tim" label="developer">
            <UserProfile.Icon>
              <img src={appImage} alt="organization icon" />
            </UserProfile.Icon>
          </UserProfile.Item>
          <UserProfile.Item title="Intimissimi" label="reviewer">
            <UserProfile.Icon>
              <img src={appImage} alt="organization icon" />
            </UserProfile.Icon>
          </UserProfile.Item>
        </>
      )}
    </UserProfile>
  </div>
)
