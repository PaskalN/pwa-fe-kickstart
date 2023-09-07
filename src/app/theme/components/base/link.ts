export default {
  baseStyle: {
    fontWeight: 'medium',
    transition: '0.3s',
    fontFamily: 'fonts.mcm.regular',
    fontSize: '1rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',

    _hover: {
      color: 'gold.100'
    },

    _active: {
      color: 'gold.130'
    },

    _focus: {
      outline: '2px solid red',
      outlineOffset: '2px'
    }
  },

  variants: {
    underline: (): {} => {
      return {
        textDecoration: 'underline'
      }
    },
    productCard: {
      fontFamily: 'fonts.mcm.boldExtended'
    }
  },

  sizes: {
    md: {
      fontSize: '1rem'
    },

    sm: {
      fontSize: '0.875rem'
    },

    xs: {
      fontSize: '0.75rem'
    }
  },

  defaultProps: {}
}
