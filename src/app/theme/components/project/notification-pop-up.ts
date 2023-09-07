const DARK_TEXT = {
  color: 'dark',
  fontWeight: '400',
  fontFamily: 'fonts.mcm.favorit'
}

const size = {
  s28: '1.75rem',
  s24: '1.5rem',
  s20: '1.25rem',
  s18: '1.125rem',
  s16: '1rem',
  s15: '0.9375rem',
  s14: '0.875rem',
  s12: '0.75rem',
  s10: '0.625rem',
  s8: '0.5rem',
  s6: '0.375rem',
  s4: '0.25rem'
}

export default {
  baseStyle: {
    modalBody: {},
    modalHeading: {
      ...DARK_TEXT,
      fontSize: size.s20,
      lineHeight: size.s28,
      letterSpacing: '-0.03125rem',
      marginBottom: size.s24
    },
    productCartContainer: {
      display: 'flex',
      padding: '1rem',
      border: '0.075rem solid',
      borderColor: 'neutral.30',
      borderRadius: size.s8,
      marginBottom: size.s24,
      backgroundColor: 'white'
    },
    productCartImage: {
      maxWidth: '5.1825rem',
      borderRadius: size.s8,
      overflow: 'hidden',
      marginRight: size.s16
    },
    productCartTitle: {
      ...DARK_TEXT,
      fontSize: size.s14,
      lineHeight: size.s20,
      textTransform: 'uppercase',
      marginBottom: size.s4,
      fontWeight: 'bold'
    },
    productCartPrice: {
      ...DARK_TEXT,
      fontSize: size.s14,
      lineHeight: size.s20,
      marginBottom: size.s4
    },
    productCartColor: {
      ...DARK_TEXT,
      fontSize: size.s14,
      lineHeight: size.s20,
      marginBottom: size.s4
    },
    productCartSize: {
      ...DARK_TEXT,
      fontSize: size.s14,
      lineHeight: size.s20,
      marginBottom: size.s4
    },
    modalBoxMessage: {
      ...DARK_TEXT,
      fontSize: size.s16,
      lineHeight: size.s28,
      marginBottom: size.s24
    }
  },

  defaultProps: {},
  parts: ['modalBody']
}
