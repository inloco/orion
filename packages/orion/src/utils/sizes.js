import PropTypes from 'prop-types'

export const Sizes = {
  DEFAULT: '',
  SMALL: 'small'
}

export const ThreeSizes = {
  ...Sizes,
  LARGE: 'large'
}

export const sizePropType = PropTypes.oneOf([Sizes.DEFAULT, Sizes.SMALL])
export const threeSizesPropType = PropTypes.oneOf([
  ThreeSizes.DEFAULT,
  ThreeSizes.SMALL,
  ThreeSizes.LARGE
])
