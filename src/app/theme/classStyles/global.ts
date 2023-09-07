import { classGenerator } from './generators'

const LINE_HEIGHTS = classGenerator({
  from: 8,
  to: 40,
  key: 'lh-${INDEX}',
  writer: index => ({ lineHeight: `${index / 16}rem` })
})

export default {
  'b-hidden': {
    display: 'none'
  },

  'ff-mcm-r': {
    fontFamily: 'fonts.mcm.regular'
  },

  'ff-mcm-ri': {
    fontFamily: 'fonts.mcm.regularItalic'
  },

  'ff-mcm-b': {
    fontFamily: 'fonts.mcm.bold'
  },

  'ff-mcm-be': {
    fontFamily: 'fonts.mcm.boldExtended'
  },

  'ff-mcm-bi': {
    fontFamily: 'fonts.mcm.boldItalic'
  },

  'ff-mcm-bk': {
    fontFamily: 'fonts.mcm.book'
  },

  'ff-mcm-bki': {
    fontFamily: 'fonts.mcm.bookItalic'
  },

  'ff-mcm-l': {
    fontFamily: 'fonts.mcm.light'
  },

  'ff-mcm-li': {
    fontFamily: 'fonts.mcm.lightItalic'
  },

  'ff-mcm-m': {
    fontFamily: 'fonts.mcm.medium'
  },

  'ff-mcm-mi': {
    fontFamily: 'fonts.mcm.mediumItalic'
  },

  // ff - Font Family
  'ff-regular': {
    fontFamily: 'fonts.mcm.regular'
  },
  'ff-favorit': {
    fontFamily: 'fonts.mcm.favorit'
  },

  // fw - Font Weight
  'fw-thin': {
    fontWeight: 'thin'
  },

  'fw-bold': {
    fontWeight: 'bold'
  },

  'fw-bolder': {
    fontWeight: 'bolder'
  },

  // lh - line-height = lg-8 ... lh-16 ...
  ...LINE_HEIGHTS,

  // w-* width
  'w-full': {
    width: '100%'
  },

  'w-half': {
    width: '50%'
  },

  'w-inherit': {
    width: 'inherit'
  },

  // tt-* text-transform
  'tt-cap': {
    textTransform: 'capitalize'
  },
  'tt-uc': {
    textTransform: 'uppercase'
  },

  'td-ul': {
    textDecoration: 'underline'
  },

  'td-lt': {
    textDecoration: 'line-through'
  },

  // ta-* text-align
  'ta-c': {
    textAlign: 'center'
  },

  'ta-l': {
    textAlign: 'left'
  },

  'ta-r': {
    textAlign: 'right'
  },

  'ww-break': {
    wordWrap: 'break-word'
  },

  'f-a-c': {
    alignItems: 'center'
  },

  'f-a-s': {
    alignItems: 'start'
  }
}
