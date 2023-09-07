export default {
  baseStyle: {
    container: {
      _focus: { boxShadow: 'none', border: '0.125rem solid', borderColor: 'red.100', padding: '0.25rem' },
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    label: {
      _disabled: {
        color: 'neutral.80',
        opacity: 1,
        _hover: {
          color: 'neutral.80'
        }
      },
      _hover: {
        color: 'gold.100'
      },
      width: 'full',
      fontFamily: 'fonts.mcm.regular',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.75rem',
      letterSpacing: '0rem',
      textAlign: 'left'
    },
    control: {
      _focus: { boxShadow: 'none' },
      _disabled: {
        outlineColor: 'neutral.80',
        bg: 'none'
      },
      marginRight: '0.75rem',
      outline: '0.075rem solid ',
      outlineColor: 'gold.100',
      border: 'none',
      height: '1rem',
      minWidth: '1rem',
      position: 'relative',
      _checked: {
        _focus: { boxShadow: 'none' },
        color: 'purple',
        bg: 'none',
        borderColor: 'gold.100',
        _hover: {
          bg: 'inherit',
          borderColor: 'gold.100'
        }
      }
    },
    innerControl: {
      bg: 'gold.100',
      height: '0.625rem',
      width: '0.625rem',
      borderRadius: '0.063rem',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },
    smallLabel: {
      _disabled: {
        color: 'neutral.80',
        _hover: {
          color: 'neutral.80'
        }
      },
      _hover: {
        color: 'gold.100'
      },
      width: 'full',
      fontFamily: 'fonts.mcm.regular',
      fontWeight: 400,
      lineHeight: '1.75rem',
      letterSpacing: '0rem',
      textAlign: 'left',
      fontSize: '0.875rem'
    }
  },
  sizes: {
    md: {}
  }
}
