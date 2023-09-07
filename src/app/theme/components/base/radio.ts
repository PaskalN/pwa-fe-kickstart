export default {
  baseStyle: {
    container: {
      _focus: { border: '0.125rem solid', borderColor: 'red', padding: '0.25rem' },
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    label: {
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
      outline: '0.075rem solid ',
      outlineColor: 'gold.100',
      border: 'none',
      _disabled: {
        bg: 'none',
        outlineColor: 'neutral.80'
      },
      _checked: {
        _focus: { boxShadow: 'none' },
        backgroundColor: 'none',
        background: 'none',
        outlineColor: 'gold.100',
        _hover: {
          backgroundColor: 'inherit',
          outlineColor: 'gold.100'
        },
        _before: {
          backgroundColor: 'gold.100',
          bg: 'gold.100',
          width: '0.625rem',
          height: '0.625rem'
        }
      },
      _indeterminate: {
        background: 'gold.100'
      }
    }
  },
  sizes: {
    md: {
      container: { alignItems: 'flex-start' },
      control: { marginTop: '0.35em' },
      label: { marginLeft: 3 }
    },
    sm: {
      label: {
        fontSize: '0.875rem'
      },
      control: {
        _checked: {
          _before: {
            width: '0.55rem',
            height: '0.55rem'
          }
        }
      }
    }
  }
}
