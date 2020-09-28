import React from 'react'
import { boolean, object, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Sizes } from '../utils/sizes'
import { Pagination } from '../'
import { sizeKnob } from '../utils/stories'

const actions = {
  onPageChange: action('onPageChange'),
  onPrevPage: action('onPrevPage'),
  onNextPage: action('onNextPage')
}

export default {
  title: 'Pagination',
  excludeStories: ['actions']
}

export const basic = () => (
  <Pagination
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', false)}
    totalItems={number('totalItems', 232)}
    pageSize={number('pageSize', 15)}
    alignButtonsLeft={boolean('alignButtonsLeft', false)}
    i18n={object('i18n', {
      of: 'of',
      results: 'results'
    })}
    loading={boolean('loading', false)}
    size={sizeKnob(Sizes.DEFAULT)}
    {...actions}
  />
)

export const disabled = () => (
  <Pagination
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', true)}
    totalItems={number('totalItems', 232)}
    pageSize={number('pageSize', 15)}
    alignButtonsLeft={boolean('alignButtonsLeft', false)}
    i18n={object('i18n', {
      of: 'of',
      results: 'results'
    })}
    size={sizeKnob(Sizes.DEFAULT)}
    {...actions}
  />
)

export const alignButtonsLeft = () => (
  <Pagination
    activePage={number('activePage', 1)}
    disabled={boolean('disabled', false)}
    totalItems={number('totalItems', 232)}
    pageSize={number('pageSize', 15)}
    alignButtonsLeft={boolean('alignButtonsLeft', true)}
    i18n={object('i18n', {
      of: 'of',
      results: 'results'
    })}
    size={sizeKnob(Sizes.DEFAULT)}
    {...actions}
  />
)
