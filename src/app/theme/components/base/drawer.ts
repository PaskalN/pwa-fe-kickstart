import _ from 'lodash'

import globalClassStyles from '../../classStyles/global'
const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles,
  'modal-title': {
    textTransform: 'uppercase',
    letterSpacing: '-0.5px'
  }
}

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {},
  neutral: {
    dialog: {
      backgroundColor: 'neutral.30'
    }
  },

  gold: {
    dialog: {
      backgroundColor: 'gold.40'
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

// REMOVE AFTER REFACTORING
const baseStyleReset = {
  header: {
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    boxShadow: 'base'
  },
  body: {
    padding: '0'
  },
  footer: {
    paddingTop: '0',
    paddingRight: '0',
    paddingBottom: '0',
    paddingLeft: '0'
  }
}

export default {
  baseStyle: {
    header: {
      paddingTop: 1,
      paddingRight: [4, 4, 6, 6],
      paddingBottom: 1,
      paddingLeft: [4, 4, 6, 6],
      boxShadow: 'base'
    },
    body: {
      padding: [4, 4, 6, 6]
    },
    footer: {
      paddingTop: 6,
      paddingRight: [4, 4, 6, 6],
      paddingBottom: 11,
      paddingLeft: [4, 4, 6, 6]
    }
  },
  variants: {
    // NEW IMPLEMENTATION
    default: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        dialog: {
          position: 'relative',
          padding: '3.75rem 1.375rem 2rem 1.375rem'
        }
      }

      return _.merge(baseStyleReset, colorSchemeStyles, classStyles, variantStyle)
    },

    sizeGuide: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        dialog: {
          bg: 'red',
          position: 'relative',
          padding: '3.75rem 0rem 0rem 0rem'
        }
      }

      return _.merge(baseStyleReset, colorSchemeStyles, classStyles, variantStyle)
    },

    oAuth: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        // parts dialog, header, body, footer
        body: {},
        header: {
          h: 's64',
          display: 'flex',
          alignItems: 'center',
          flexShrink: 'initial',
          flexBasis: 'initial',
          flexDirection: 'row-reverse',
          boxShadow: 'none'
        },
        dialog: {
          bg: 'neutral.30',
          px: 's21',
          maxWidth: '25.875rem'
        }
      }

      return _.merge(baseStyleReset, colorSchemeStyles, classStyles, variantStyle)
    },

    // OLD IMPLEMENTATION
    footer: {
      header: {
        padding: 0,
        boxShadow: 'none'
      },
      body: {
        paddingLeft: '1.313rem !important',
        paddingRight: '1.313rem !important',
        paddingTop: '4rem !important',
        overflow: 'hidden'
      },
      dialog: {
        position: 'fixed',
        width: '25.875rem !important',
        height: ' ',
        top: 0,
        right: 0,
        background: 'neutral.30',
        boxShadow: '0rem 0.25rem 2.25rem 0.625rem rgba(0, 0, 0, 0.15)'
      }
    },

    refinement: {
      dialog: {
        maxWidth: '100%',
        height: '100%'
      }
    },

    mobilesearch: {
      body: {
        padding: ['1.125rem', '1.125rem', '1.125rem', '1.125rem']
      },
      motion: {
        duration: '3s'
      }
    }
  },

  sizes: {
    vh90: {
      dialog: {
        height: '100vh',
        maxHeight: '90vh'
      }
    },
    vh80: {
      dialog: {
        height: '100vh',
        maxHeight: '80vh'
      }
    },
    vh60: {
      dialog: {
        height: '100vh',
        maxHeight: '60vh'
      }
    },
    vh40: {
      dialog: {
        height: '100vh',
        maxHeight: '40vh'
      }
    },
    vh20: {
      dialog: {
        height: '100vh',
        maxHeight: '20vh'
      }
    }
  }
}
