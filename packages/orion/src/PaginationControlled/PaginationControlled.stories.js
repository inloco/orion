import React from 'react'
import { boolean, object, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Sizes } from '../utils/sizes'
import PaginationControlled from './'
import { sizeKnob } from '../utils/stories'

const actions = {
  onPageChange: action('onPageChange'),
  onPrevPage: action('onPrevPage'),
  onNextPage: action('onNextPage')
}

const storyMetadata = {
  title: 'PaginationControlled',
  excludeStories: ['actions']
}

export default storyMetadata

export const basic = () => (
  <PaginationControlled
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', false)}
    hasNextPage={boolean('hasNextPage', true)}
    pageSize={number('pageSize', 15)}
    alignButtonsLeft={boolean('alignButtonsLeft', false)}
    i18n={object('i18n', {
      language: 'en',
      value: '1-10',
      of: 'of',
      many: '30',
      results: 'results'
    })}
    loading={boolean('loading', false)}
    size={sizeKnob(Sizes.DEFAULT)}
    {...actions}
  />
)

export const customValue = () => (
  <PaginationControlled
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', false)}
    hasNextPage={boolean('hasNextPage', true)}
    pageSize={number('pageSize', 15)}
    alignButtonsLeft={boolean('alignButtonsLeft', false)}
    i18n={object('i18n', {
      value: '1-10',
      of: 'of',
      many: 'many',
      results: 'results'
    })}
    size={sizeKnob(Sizes.DEFAULT)}
    {...actions}
  />
)
