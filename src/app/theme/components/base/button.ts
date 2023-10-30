import globalClassStyles from '../../classStyles/global'

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles,
  'in-list': {
    color: 'gold.100'
  }
}

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {
    color: 'white',
    backgroundColor: 'dark',

    _hover: {
      backgroundColor: 'gold.100'
    },

    _active: {
      backgroundColor: 'gold.130'
    },

    _disabled: {
      backgroundColor: 'disabled',
      cursor: 'not-allowed'
    }
  },

  secondary: {
    color: 'dark',
    border: '1.25px solid',
    borderColor: 'dark',

    _hover: {
      color: 'gold.100',
      borderColor: 'gold.100'
    },

    '&.active': {
      color: 'gold.100',
      borderColor: 'gold.100'
    },

    _active: {
      color: 'gold.130',
      borderColor: 'gold.130'
    },

    _disabled: {
      color: 'disabled',
      borderColor: 'disabled',
      cursor: 'not-allowed'
    }
  },

  light: {
    color: 'dark',
    backgroundColor: 'white',

    _hover: {
      backgroundColor: 'gold.100',
      color: 'white'
    },

    _active: {
      backgroundColor: 'gold.130',
      color: 'white'
    },

    _disabled: {
      backgroundColor: 'disabled',
      cursor: 'not-allowed',
      color: 'white'
    }
  },

  gold_dark: {
    backgroundColor: 'gold.100',
    color: 'white',

    _hover: {
      backgroundColor: 'gold.50',
      color: 'white'
    },

    _active: {
      backgroundColor: 'gold.130',
      color: 'white'
    },

    _disabled: {
      backgroundColor: 'disabled',
      cursor: 'not-allowed',
      color: 'white'
    }
  },

  // Links
  link_default: {
    color: 'dark',

    _hover: {
      color: 'gold.100'
    },

    _active: {
      color: 'gold.130'
    },

    _disabled: {
      backgroundColor: 'disabled',
      cursor: 'not-allowed',
      color: 'white'
    }
  },

  link_wishlist: {
    color: 'dark',

    _hover: {
      color: 'gold.100'
    },

    _active: {
      color: 'gold.130'
    },

    _disabled: {
      cursor: 'not-allowed',
      color: 'neutral.100'
    }
  },

  video_play: {
    color: 'white',
    backgroundColor: 'rgba(34, 34, 34, 0.80)',
    boxShadow: ' 0px 2px 8px 0px rgba(0, 0, 0, 0.20)',

    _hover: {
      backgroundColor: 'gold.100'
    },

    _active: {
      backgroundColor: 'gold.130'
    },

    _disabled: {
      backgroundColor: 'disabled',
      cursor: 'not-allowed'
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

type ButtonVariantProps = { colorScheme?: string; className?: string }

export default {
  baseStyle: {
    border: 'none',
    borderRadius: 'none',
    fontWeight: 'medium',
    cursor: 'pointer',
    transition: '0.3s',
    fontFamily: 'fonts.mcm.favorit',
    '.chakra-button__spinner': {
      height: '100%',
      width: '100%',
      justifyContent: 'center'
    }
  },

  variants: {
    // New Implementation
    default: (props: ButtonVariantProps & Project.Utils.ObjectKeyUnknown): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        fontSize: 's16'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },

    link: (props: ButtonVariantProps & Project.Utils.ObjectKeyUnknown): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'link_default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        fontSize: 's16',
        cursor: 'pointer'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },

    rounded: (props: ButtonVariantProps & Project.Utils.ObjectKeyUnknown): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        fontSize: 's16',
        borderRadius: '5rem'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },

    // Old
    primary: (props: { colorScheme?: string }): {} => {
      if (props.colorScheme === 'dark') {
        return {
          backgroundColor: 'dark',
          color: 'white',

          _hover: {
            backgroundColor: 'gold.100'
          },

          _active: {
            backgroundColor: 'gold.130'
          },

          _disabled: {
            backgroundColor: 'disabled',
            cursor: 'not-allowed'
          }
        }
      }

      if (props.colorScheme === 'notification') {
        return {
          backgroundColor: 'dark',
          color: 'white',
          fontSize: '1rem',
          lineHeight: '1.125rem',
          fontWeight: 'normal',

          _hover: {
            backgroundColor: 'gold.100'
          },

          _active: {
            backgroundColor: 'gold.130'
          },

          _disabled: {
            backgroundColor: 'gold.100',
            color: 'white',
            cursor: 'not-allowed'
          }
        }
      }

      if (props.colorScheme === 'white') {
        return {
          backgroundColor: 'white',
          color: 'dark',

          _hover: {
            backgroundColor: 'gold.100',
            color: 'white'
          },

          _active: {
            backgroundColor: 'gold.130',
            color: 'white'
          },

          _disabled: {
            backgroundColor: 'disabled',
            cursor: 'not-allowed',
            color: 'white'
          }
        }
      }

      if (props.colorScheme === 'gold') {
        return {
          backgroundColor: 'cognac.50',
          color: 'cognac.100',

          _hover: {
            backgroundColor: 'gold.100',
            color: 'white'
          },

          _active: {
            backgroundColor: 'gold.130',
            color: 'white'
          },

          _disabled: {
            backgroundColor: 'disabled',
            cursor: 'not-allowed',
            color: 'white'
          }
        }
      }

      if (props.colorScheme === 'strong_gold') {
        return {
          backgroundColor: 'gold.100',
          color: 'white',

          _hover: {
            backgroundColor: 'gold.100',
            color: 'white'
          },

          _active: {
            backgroundColor: 'gold.130',
            color: 'white'
          },

          _disabled: {
            backgroundColor: 'disabled',
            cursor: 'not-allowed',
            color: 'white'
          }
        }
      }

      return {}
    },

    secondary: (props: { colorScheme?: string }): {} => {
      if (props.colorScheme === 'dark') {
        return {
          color: 'dark',
          border: '1.25px solid',
          borderColor: 'dark',

          _hover: {
            color: 'gold.100',
            borderColor: 'gold.100'
          },

          '&.active': {
            color: 'gold.100',
            borderColor: 'gold.100'
          },

          _active: {
            color: 'gold.130',
            borderColor: 'gold.130'
          },

          _disabled: {
            color: 'disabled',
            borderColor: 'disabled',
            cursor: 'not-allowed'
          }
        }
      }
      if (props.colorScheme === 'light') {
        return {
          color: 'gold.130',
          border: '1.25px solid',
          borderColor: 'gold.130',

          _hover: {
            color: 'gold.100',
            borderColor: 'gold.100'
          },

          '&.active': {
            color: 'gold.100',
            borderColor: 'gold.100'
          },

          _active: {
            color: 'gold.130',
            borderColor: 'gold.130'
          },

          _disabled: {
            color: 'disabled',
            borderColor: 'disabled',
            cursor: 'not-allowed'
          }
        }
      }

      return {}
    },

    hero: (): {} => {
      return {
        background: 'blackAlpha.650',
        border: '1px solid white',
        color: 'white',
        textTransform: 'capitalize',
        _hover: {
          backgroundColor: 'gold.100',
          color: 'white'
        }
      }
    },
    wishlist: (): {} => {
      return {
        background: 'blackProject.100',
        border: '1px solid white',
        color: 'white',
        _hover: {
          backgroundColor: 'gold.100'
        }
      }
    }
  },

  sizes: {
    // New Implementation
    lgb: {
      py: '0',
      px: 's5',
      minHeight: 's56'
    },

    lgb_sticky: {
      py: '0',
      px: 's5',
      minHeight: 's48'
    },

    smb: {
      py: '0',
      px: 's5',
      minHeight: 's24'
    },

    input: {
      py: '0',
      px: 's14',
      h: '100%'
    },

    // Old
    heroLong: {
      fontSize: '1rem',
      fontWeight: 571,
      padding: '1.25rem 1.5rem',
      height: '3.5rem',
      width: '35.125rem'
    },

    heroNormal: {
      fontSize: '1rem',
      fontWeight: 571,
      padding: '1.25rem 1.5rem',
      height: '3.5rem',
      width: '20.5rem',
      '@media screen and (max-width: 30em)': {
        width: 'auto',
        minWidth: '17rem'
      }
    },
    wishlistNormal: {
      fontSize: '1rem',
      fontWeight: 571,
      padding: '1.188rem 1.5rem',
      height: '3.5rem',
      width: '14rem',
      lineHeight: '1.125rem',
      fontFamily: 'fonts.mcm.variable'
    },

    lg: {
      fontSize: '1rem',
      padding: '0 48px',
      minHeight: '3.5rem'
    },

    lg_circle: {
      fontSize: '1rem',
      height: '3.5rem',
      width: '3.5rem',
      borderRadius: '100px',
      padding: '0',

      svg: {
        margin: '0',
        padding: '0px'
      }
    },

    sm: {
      borderRadius: '50px',
      fontSize: '0.75rem',
      padding: '0 12px',
      minHeight: '24px'
    },

    sm_circle: {
      borderRadius: '50px',
      fontSize: '0.75rem',
      height: '24px',
      width: '24px',
      padding: '0',

      svg: {
        margin: '0',
        padding: '0px'
      }
    },

    square_icon: {
      padding: '0',
      height: '58px',
      width: '58px',

      svg: {
        margin: '0',
        padding: '0px'
      }
    }
  },

  defaultProps: {
    colorScheme: 'dark'
  }
}
