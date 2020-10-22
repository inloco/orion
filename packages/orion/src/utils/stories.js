import { radios } from '@storybook/addon-knobs'

import { Sizes, ThreeSizes } from './sizes'

export const sizeKnob = (defaultValue = Sizes.DEFAULT, groupId) =>
  radios(
    'Size',
    { Default: Sizes.DEFAULT, Small: Sizes.SMALL },
    defaultValue,
    groupId
  )

export const threeSizesKnob = (defaultValue = ThreeSizes.DEFAULT, groupId) =>
  radios(
    'Size',
    {
      Default: ThreeSizes.DEFAULT,
      Small: ThreeSizes.SMALL,
      Large: ThreeSizes.LARGE
    },
    defaultValue,
    groupId
  )
