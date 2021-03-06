const _ = require('lodash')
const Color = require('color')

const Colors = require('./')

module.exports = {
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    screens: {
      md: '768px',
      lg: '1024px'
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      gray: {
        50: Colors.GRAY_50,
        100: Colors.GRAY_100,
        200: Colors.GRAY_200,
        300: Colors.GRAY_300,
        400: Colors.GRAY_400,
        500: Colors.GRAY_500,
        600: Colors.GRAY_600,
        700: Colors.GRAY_700,
        800: Colors.GRAY_800,
        900: Colors.GRAY_900
      },
      green: {
        50: Colors.GREEN_50,
        500: Colors.GREEN_500,
        600: Colors.GREEN_600,
        700: Colors.GREEN_700,
        800: Colors.GREEN_800
      },
      magenta: {
        50: Colors.MAGENTA_50,
        500: Colors.MAGENTA_500,
        600: Colors.MAGENTA_600,
        700: Colors.MAGENTA_700
      },
      purple: {
        50: Colors.PURPLE_50,
        100: Colors.PURPLE_100,
        200: Colors.PURPLE_200,
        300: Colors.PURPLE_300,
        400: Colors.PURPLE_400,
        500: Colors.PURPLE_500,
        600: Colors.PURPLE_600,
        700: Colors.PURPLE_700,
        800: Colors.PURPLE_800,
        900: Colors.PURPLE_900
      },
      robinblue: {
        50: Colors.ROBINBLUE_50,
        100: Colors.ROBINBLUE_100,
        200: Colors.ROBINBLUE_200,
        300: Colors.ROBINBLUE_300,
        400: Colors.ROBINBLUE_400,
        500: Colors.ROBINBLUE_500,
        600: Colors.ROBINBLUE_600,
        700: Colors.ROBINBLUE_700,
        800: Colors.ROBINBLUE_800,
        900: Colors.ROBINBLUE_900
      },
      yellow: {
        50: Colors.YELLOW_50,
        500: Colors.YELLOW_500,
        600: Colors.YELLOW_600,
        700: Colors.YELLOW_700
      },
      chart: {
        purple: Colors.CHART_PURPLE,
        magenta: Colors.CHART_MAGENTA,
        yellow: Colors.CHART_YELLOW,
        green: Colors.CHART_GREEN,
        robinblue: Colors.CHART_ROBINBLUE
      }
    },
    spacing: {
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      24: '24px',
      32: '32px',
      40: '40px',
      48: '48px',
      64: '64px',
      96: '96px'
    },

    backgroundColor: theme => ({
      transparent: 'transparent',
      white: theme('colors').white,
      gray: {
        ..._.pick(theme('colors.gray'), [
          '50',
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '800'
        ]),
        '50-80': Color(theme('colors').gray['50']).alpha(0.8).string(),
        '900-4': Color(theme('colors').gray['900']).alpha(0.04).string(),
        '900-8': Color(theme('colors').gray['900']).alpha(0.08).string(),
        '900-12': Color(theme('colors').gray['900']).alpha(0.12).string(),
        '900-16': Color(theme('colors').gray['900']).alpha(0.16).string(),
        '900-24': Color(theme('colors').gray['900']).alpha(0.24).string(),
        '900-32': Color(theme('colors').gray['900']).alpha(0.32).string()
      },
      robinblue: {
        ..._.pick(theme('colors.robinblue'), [
          '50',
          '200',
          '300',
          '500',
          '600',
          '700',
          '800'
        ]),
        '500-8': Color(theme('colors').robinblue['500']).alpha(0.08).string(),
        '500-16': Color(theme('colors').robinblue['500']).alpha(0.16).string(),
        '500-40': Color(theme('colors').robinblue['500']) // Disabled button
          .alpha(0.4)
          .string()
      },
      purple: {
        ..._.pick(theme('colors.purple'), [
          '50',
          '100',
          '200',
          '300',
          '500',
          '600',
          '800'
        ]),
        '700-48': Color(theme('colors').purple['700']).alpha(0.48).string()
      },
      green: _.pick(theme('colors.green'), ['50', '500', '600', '700', '800']),
      yellow: _.pick(theme('colors.yellow'), ['50', '500', '600', '700']),
      magenta: _.pick(theme('colors.magenta'), ['50', '500', '600', '700']),
      chart: {
        ...theme('colors.chart'),
        'purple-80': Color(theme('colors').chart['purple']).alpha(0.8).string()
      }
    }),

    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },
    borderColor: theme => ({
      gray: {
        400: Color(theme('colors').gray['400']).string(),
        700: Color(theme('colors').gray['700']).string(),
        '900-8': Color(theme('colors').gray['900']).alpha(0.08).string(),
        '900-16': Color(theme('colors').gray['900']).alpha(0.16).string(),
        '900-24': Color(theme('colors').gray['900']).alpha(0.24).string()
      },
      purple: {
        ..._.pick(theme('colors.purple'), ['600']),
        '900-8': Color(theme('colors').purple['900']).alpha(0.08).string()
      },
      robinblue: _.pick(theme('colors.robinblue'), [
        '200',
        '500',
        '600',
        '700'
      ]),
      green: _.pick(theme('colors.green'), ['500']),
      yellow: _.pick(theme('colors.yellow'), ['500']),
      magenta: _.pick(theme('colors.magenta'), ['500']),
      white: theme('colors').white,
      transparent: theme('colors').transparent
    }),
    borderRadius: {
      none: '0',
      small: '4px',
      default: '8px',
      full: '9999px'
    },
    borderWidth: {
      default: '1px',
      2: '2px',
      1: '1px',
      0: '0'
    },
    boxShadow: {
      100: '0 0 0 1px rgba(61, 63, 62, .16)',
      200: '0 4px 6px -1px rgba(61, 63, 62, .16)',
      300: '0 8px 10px -4px rgba(61, 63, 62, .16)',
      400: '0 16px 24px -6px rgba(61, 63, 62, .16)',
      500: '0 24px 32px 0px rgba(61, 63, 62, .16)',
      default: '0 4px 16px -1px rgba(61, 63, 62, .16)',
      'field-hover': 'inset 0 0px 0px 1px rgba(61, 63, 62, .16)',
      'field-active': '0 0px 0px 1px rgba(61, 63, 62, .48)',
      'error-field-hover': '0 0px 0px 1px rgba(201, 44, 70, .32)',
      'error-field-active': '0 0px 0px 1px rgba(201, 44, 70, .48)',
      'warning-field-hover': '0 0px 0px 1px rgba(176, 88, 0, .32)',
      'warning-field-active': '0 0px 0px 1px rgba(176, 88, 0, .48)',
      none: 'none'
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },
    fill: theme => ({
      current: 'currentColor',
      ...theme('textColor')
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      0: '0',
      default: '1'
    },
    flexShrink: {
      0: '0',
      default: '1'
    },
    fontFamily: {
      default: ['neue-haas-grotesk-text', 'sans-serif'],
      display: ['neue-haas-grotesk-display', 'sans-serif'],
      icons: ['Material Icons']
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      lg: '18px',
      xl: '20px',
      'icon-sm': '16px',
      'icon-md': '20px'
    },
    fontWeight: {
      thin: '200',
      normal: '400',
      medium: '500'
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      em: '1em',
      full: '100%',
      screen: '100vh'
    }),
    inset: {
      0: '0',
      auto: 'auto'
    },
    letterSpacing: {
      normal: '0'
    },
    lineHeight: {
      // 12/14, 14/20, 20/24, 24/28
      14: '14px',
      20: '20px',
      24: '24px',
      // TODO: refactor line heights to use 14/20, 12/18, 18/24
      18: '18px',
      26: '26px'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    margin: theme => ({
      auto: 'auto',
      ...theme('spacing')
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh'
    },
    maxWidth: theme => ({
      384: '384px',
      full: '100%'
    }),
    minHeight: theme => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    minWidth: theme => ({
      0: '0',
      238: '238px',
      ...theme('spacing'),
      full: '100%'
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    opacity: {
      0: '0',
      8: '0.08',
      16: '0.16',
      24: '0.24',
      32: '0.32',
      40: '0.40',
      48: '0.48',
      64: '0.64',
      80: '0.80',
      100: '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12'
    },
    padding: theme => theme('spacing'),
    space: theme => theme('spacing'),
    stroke: {
      current: 'currentColor'
    },
    textColor: theme => ({
      white: theme('colors.white'),
      gray: _.pick(theme('colors.gray'), ['500', '600', '700', '800', '900']),
      robinblue: _.pick(theme('colors.robinblue'), [
        '500',
        '600',
        '700',
        '800'
      ]),
      green: _.pick(theme('colors.green'), ['500', '700', '800']),
      magenta: _.pick(theme('colors.magenta'), ['500', '600']),
      yellow: _.pick(theme('colors.yellow'), ['500', '600', '700']),
      purple: _.pick(theme('colors.purple'), ['500', '600', '700', '800'])
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      238: '238px',
      384: '384px',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%',
      em: '1em',
      full: '100%',
      screen: '100vw'
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50'
    }
  },
  variants: {
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'first', 'last'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    space: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive']
  },
  corePlugins: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
