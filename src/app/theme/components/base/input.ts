const mdSize = { height: 11, borderRadius: 'base' }

export default {
  sizes: {
    md: {
      field: { ...mdSize, px: 3 },
      addon: mdSize
    }
  },
  baseStyle: {
    field: {
      _focus: {
        borderColor: 'blue.600'
      }
    }
  },
  variants: {
    unstyled: {
      field: {
        backgroundColor: 'green'
      }
    },
    outline: {
      // basic fields
      field: {
        backgroundColor: '#FFFFFF',
        borderColor: 'neutral.80',
        border: '1.2px solid',
        _focus: {
          borderColor: 'gold.100',
          boxShadow: 'none'
        },
        _hover: {
          borderColor: 'none'
        },
        _disabled: {
          cursor: 'not-allowed',
          border: 'none',
          backgroundColor: 'neutral.10'
        },
        _invalid: {
          borderColor: 'system_redish.100',
          boxShadow: 'none'
        }
      }
    },
    filled: {
      // we use filled variant for
      // search input
      field: {
        backgroundColor: 'gray.50',
        _focus: {
          backgroundColor: 'white'
        },
        _hover: {
          backgroundColor: 'gray.100',
          _focus: {
            backgroundColor: 'white'
          }
        },
        _disabled: {
          cursor: 'not-allowed',
          border: 'none',
          backgroundColor: 'neutral.10'
        },
        _placeholder: {
          color: 'neutral.80',
          fontSize: 'xs',
          fontFamily: 'fonts.mcm.regular'
        }
      }
    },
    signup: {
      field: {
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: 'neutral.80',
        py: 3,
        pl: 4,
        _focus: {
          borderColor: 'gold.100',
          boxShadow: 'none'
        },
        _filled: {
          borderColor: 'gold.100'
        },
        _disabled: {
          cursor: 'not-allowed',
          border: 'none',
          backgroundColor: 'neutral.10'
        },
        _placeholder: {
          color: 'neutral.80',
          fontSize: 'xs',
          fontFamily: 'fonts.mcm.regular'
        },
        _invalid: {
          borderColor: 'system_redish.100',
          boxShadow: 'none'
        }
      }
    }
  }
}
