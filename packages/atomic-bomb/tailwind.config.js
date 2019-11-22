const _ = require('lodash')
const Color = require('color')

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
        50: '#FAFBFC',
        100: '#F5F6F7',
        200: '#EEEFF0',
        300: '#E3E4E5',
        400: '#D7D8D9',
        500: '#BDBEBF',
        600: '#9E9FA0',
        700: '#757677',
        800: '#616263',
        900: '#3D3E3F'
      },
      green: {
        50: '#F5FAF1',
        500: '#7DBB4E',
        600: '#68A838',
        700: '#528F24',
        800: '#448017'
      },
      magenta: {
        50: '#FDF0F2',
        500: '#DE425B',
        600: '#C92C46',
        700: '#B81B35'
      },
      space: {
        50: '#F0F4F7',
        100: '#DDE5ED',
        200: '#C3CFE0',
        300: '#A8BACE',
        400: '#8F9BA3',
        500: '#748AA2',
        600: '#5F768D',
        700: '#486076',
        800: '#31495E',
        900: '#031D30'
      },
      wave: {
        50: '#EBF7F9',
        100: '#C4E9F5',
        200: '#A4DAEB',
        300: '#79C7DC',
        400: '#5AB5CC',
        500: '#0096B4',
        600: '#027996',
        700: '#01667D',
        800: '#004F61',
        900: '#003C4A'
      },
      yellow: {
        50: '#FDF6EB',
        500: '#E68600',
        600: '#CF6E00',
        700: '#B05800'
      },
      chart: {
        purple: '#D18ECF',
        magenta: '#F296A6',
        orange: '#ECAE8F',
        yellow: '#D5C798',
        green: '#C0DBBA'
      }
    },
    spacing: {
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '64': '64px',
      '96': '96px'
    },

    backgroundColor: theme => ({
      transparent: 'transparent',
      white: theme('colors').white,
      gray: {
        ..._.pick(theme('colors.gray'), ['50', '100', '200', '800']),
        '50-80': Color(theme('colors').gray['50'])
          .alpha(0.8)
          .string(),
        '900-4': Color(theme('colors').gray['900'])
          .alpha(0.04)
          .string(),
        '900-8': Color(theme('colors').gray['900'])
          .alpha(0.08)
          .string(),
        '900-12': Color(theme('colors').gray['900'])
          .alpha(0.12)
          .string(),
        '900-16': Color(theme('colors').gray['900'])
          .alpha(0.16)
          .string(),
        '900-24': Color(theme('colors').gray['900'])
          .alpha(0.24)
          .string(),
        '900-32': Color(theme('colors').gray['900'])
          .alpha(0.32)
          .string()
      },
      wave: {
        ..._.pick(theme('colors.wave'), [
          '50',
          '200',
          '500',
          '600',
          '700',
          '800'
        ]),
        '500-8': Color(theme('colors').wave['500'])
          .alpha(0.08)
          .string(),
        '500-16': Color(theme('colors').wave['500'])
          .alpha(0.16)
          .string(),
        '500-40': Color(theme('colors').wave['500']) // Disabled button
          .alpha(0.4)
          .string()
      },
      space: _.pick(theme('colors.space'), [
        '50',
        '100',
        '200',
        '300',
        '500',
        '800'
      ]),
      green: _.pick(theme('colors.green'), ['50', '500', '600', '700', '800']),
      yellow: _.pick(theme('colors.yellow'), ['50', '500', '600', '700']),
      magenta: _.pick(theme('colors.magenta'), ['50', '500', '600', '700']),
      chart: theme('colors.chart')
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
        '700': Color(theme('colors').gray['700']).string(),
        '900-8': Color(theme('colors').gray['900'])
          .alpha(0.08)
          .string(),
        '900-16': Color(theme('colors').gray['900'])
          .alpha(0.16)
          .string(),
        '900-24': Color(theme('colors').gray['900'])
          .alpha(0.24)
          .string()
      },
      space: _.pick(theme('colors.space'), ['600']),
      wave: _.pick(theme('colors.wave'), ['200', '500']),
      green: _.pick(theme('colors.green'), ['500']),
      yellow: _.pick(theme('colors.yellow'), ['500']),
      magenta: _.pick(theme('colors.magenta'), ['500']),
      white: theme('colors').white
    }),
    borderRadius: {
      none: '0',
      small: '2px',
      default: '4px',
      full: '9999px'
    },
    borderWidth: {
      default: '1px',
      '2': '2px',
      '1': '1px',
      '0': '0'
    },
    boxShadow: {
      100: '0 0 0 1px rgba(61, 62, 63, .16)',
      200: '0 4px 6px 0px rgba(61, 62, 63, .16)',
      300: '0 8px 10px 0px rgba(61, 62, 63, .16)',
      400: '0 16px 24px 0px rgba(61, 62, 63, .16)',
      500: '0 24px 32px 0px rgba(61, 62, 63, .16)',
      default: '0 4px 16px -1px rgba(61, 62, 63, .16)',
      'field-hover': 'inset 0 0px 0px 1px rgba(61, 62, 63, .16)',
      'field-active': '0 0px 0px 1px rgba(61, 62, 63, .48)',
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
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      '0': '0',
      default: '1'
    },
    flexShrink: {
      '0': '0',
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
      lg: '20px',
      xl: '24px'
    },
    fontWeight: {
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
      '0': '0',
      auto: 'auto'
    },
    letterSpacing: {
      normal: '0',
      h2: '0.6px',
      h1: '0.72px'
    },
    lineHeight: {
      // 12/14, 14/20, 20/24, 24/28
      '14': '14px',
      '20': '20px',
      '24': '24px',
      '28': '28px'
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
    maxWidth: {
      '384': '384px',
      full: '100%'
    },
    minHeight: theme => ({
      '0': '0',
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    minWidth: theme => ({
      '0': '0',
      '238': '238px',
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
      '0': '0',
      '8': '0.08',
      '16': '0.16',
      '24': '0.24',
      '32': '0.32',
      '40': '0.40',
      '48': '0.48',
      '64': '0.64',
      '80': '0.80',
      '100': '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12'
    },
    padding: theme => theme('spacing'),
    stroke: {
      current: 'currentColor'
    },
    textColor: theme => ({
      white: theme('colors.white'),
      gray: _.pick(theme('colors.gray'), ['600', '700', '800', '900']),
      wave: _.pick(theme('colors.wave'), ['500', '600', '700', '800']),
      green: _.pick(theme('colors.green'), ['500', '700', '800']),
      magenta: _.pick(theme('colors.magenta'), ['500', '600']),
      yellow: _.pick(theme('colors.yellow'), ['500', '600', '700']),
      space: _.pick(theme('colors.space'), ['500', '600', '900']),
      purple: theme('colors.purple')
    }),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '238': '238px',
      '384': '384px',
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
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50'
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
    display: ['responsive'],
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
  plugins: []
}
