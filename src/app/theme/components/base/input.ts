import globalClassStyles from '../../classStyles/global'
import fontGuide from '../../foundations/fontGuide'

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles
}
const mdSize = { height: 11, borderRadius: 'base' }

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {
    field: {
      borderColor: 'neutral.80',
      color: 'neutral.80'
    }
  },
  valid: {
    field: {
      borderColor: 'neutral.80',
      color: 'dark'
    }
  },
  invalid: {
    field: {
      borderColor: 'system_redish.100',
      color: 'dark',
      _focus: {
        borderColor: 'system_redish.100'
      }
    }
  }
}

const getColorSchemeStyle = (colorScheme: string) => {
  const scheme = colorSchemeStyles?.[colorScheme]
  return scheme || {}
}

const getClassStyles = (className: string) => {
  const classes = className.split(' ')
  return classes
    .map(classString => classStyles?.[classString] || {})
    .reduce((acc, currentStyle) => ({ ...acc, ...currentStyle }), {})
}

type VariantProps = { colorScheme?: string; className?: string }

export default {
  baseStyle: {
    field: {
      _focus: {
        borderColor: 'blue.600'
      }
    }
  },
  variants: {
    // New Implementation
    default: (props: VariantProps & Project.Utils.ObjectKeyUnknown): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        field: {
          border: '1px solid',
          borderRadius: 's4',
          px: 's12',
          ...fontGuide.f_body_M
        }
      }

      const variantStyleField =
        'field' in variantStyle && typeof variantStyle['field'] === 'object' ? variantStyle.field : {}
      const colorSchemeField =
        'field' in colorSchemeStyles && typeof colorSchemeStyles['field'] === 'object' ? colorSchemeStyles.field : {}
      const classStylesField =
        'field' in classStyles && typeof classStyles['field'] === 'object' ? classStyles.field : {}

      return {
        field: {
          ...variantStyleField,
          ...colorSchemeField,
          ...classStylesField
        }
      }
    },

    // Old Implementation
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
  },
  sizes: {
    // New Implementation
    lg: {
      field: {
        h: 's44'
      }
    },
    // Old Implementation
    md: {
      field: { ...mdSize, px: 3 },
      addon: mdSize
    }
  }
}
