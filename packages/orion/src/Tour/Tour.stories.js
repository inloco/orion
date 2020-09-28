import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { Card, Dropdown, Tour } from '../'

export default {
  title: 'Tour'
}

export const Basic = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center space-y-16 p-8">
        <Dropdown
          selection
          open={dropdownOpen}
          className="story-dropdown self-start"
          text=".story-dropdown"
          options={[
            { text: 'Option 1', value: 1 },
            { text: 'Option 2', value: 2 }
          ]}
          compact
        />
        <Card className="story-card-1">
          <Card.Content>
            <label>.story-card-1</label>
          </Card.Content>
        </Card>
        <Card className="story-card-2">
          <Card.Content>
            <label>.story-card-2</label>
          </Card.Content>
        </Card>
        <Card className="story-card-3">
          <Card.Content>
            <label>.story-card-3</label>
          </Card.Content>
        </Card>
        <Card className="story-card-4">
          <Card.Content>
            <label>.story-card-4</label>
          </Card.Content>
        </Card>
      </div>
      <Tour
        onFinish={action('onFinish')}
        onDismiss={action('onDismiss')}
        dismissButtonTitle="Dismiss"
        nextButtonTitle="Next"
        prevButtonTitle="Previous"
        finishButtonTitle="Finish"
        welcomeModal={{
          content: (
            <div className="text-center">
              <h3 className="text-space-600 font-medium">Welcome!</h3>
              This is custom content
            </div>
          ),
          buttonTitle: 'Start'
        }}
        steps={[
          {
            selector: '.story-card-1',
            content: <i>This content is custom</i>,
            title: 'First step'
          },
          {
            selector: '.story-card-3',
            content: (
              <>
                I don't have a title
                <br />
                But I have custom padding.
              </>
            ),
            padding: 8
          },
          {
            content: 'This step has no selector, only an anchored position',
            title: 'Third step',
            titleTag: 'Premium',
            anchor: {
              top: 120,
              left: 100
            }
          },
          {
            selector: '.story-card-4',
            content:
              'I am positioning my badge on top left with a small badgeDistance',
            badgePosition: 'top left',
            badgeDistance: 'sm',
            title: 'Fourth step'
          },
          {
            selector: '.story-dropdown .menu',
            content: 'There are actions being executed before and after me',
            title: 'Fifth step',
            actionBefore: () => setDropdownOpen(true),
            actionAfter: () => setDropdownOpen(false),
            badgeDistance: 'sm'
          }
        ]}
      />
    </>
  )
}
