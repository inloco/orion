import React from 'react'
import { boolean, object, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { Sizes } from '../utils/sizes'

import { sizeKnob } from '../utils/stories'
import PaginationEndless from './'

const actions = {
  onPageChange: action('onPageChange'),
  onPrevPage: action('onPrevPage'),
  onNextPage: action('onNextPage')
}

const storyMetadata = {
  title: 'PaginationEndless',
  excludeStories: ['actions']
}

export default storyMetadata

export const basic = () => (
  <PaginationEndless
    activePage={number('activePage', 1)}
    activePageItemCount={number('activePageItemCount', 15)}
    disabled={boolean('disabled', false)}
    hasNextPage={boolean('hasNextPage', true)}
    pageSize={number('pageSize', 15)}
    alignButtonsLeft={boolean('alignButtonsLeft', false)}
    i18n={object('i18n', {
      singlePageLabel: 'results',
      label: 'of many results'
    })}
    loading={boolean('loading', false)}
    size={sizeKnob(Sizes.DEFAULT)}
    {...actions}
  />
)
