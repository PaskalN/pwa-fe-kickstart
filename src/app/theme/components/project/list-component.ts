import globalClassStyles from '../../classStyles/global'
import fontGuide from '../../foundations/fontGuide'
import sizeRem from '../../global/sizeRem'

const mapFontGuideToComponents = (): Project.Utils.ObjectKeyUnknown => {
  const dataObject: Project.Utils.ObjectKeyUnknown = {}
  const fontGuider: Project.Utils.ObjectKeyUnknown = fontGuide

  Object.keys(fontGuider).forEach(key => {
    dataObject[key] = {
      container: fontGuider[key]
      // Uncomment if needed
      // bullet: fontGuider[key]
    }
  })

  return dataObject
}

const fontGuideMapped = mapFontGuideToComponents()

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles,
  default: {},
  circle: {
    _before: {
      mx: 's12',
      content: "'\\25CF'"
    }
  }
}

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {
    color: 'dark'
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

export default {
  baseStyle: {
    // The Default Style for the UL or OL
    container: {
      color: 'dark',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'fonts.mcm.regular',
      fontWeight: 'normal',
      lineHeight: 'initial'
    },
    bullet: {
      display: 'flex',
      alignItems: 'flex-start',
      alignContent: 'center',
      _before: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center'
      }
    }
  },
  variants: {
    default: (
      props: { colorScheme?: string; className?: string; bulletStyle?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const containerStyle = {}
      const bulletStyle = props.bulletStyle ? getClassStyles(props.bulletStyle) : {}

      return {
        container: {
          ...colorSchemeStyles,
          ...classStyles,
          ...containerStyle
        },
        bullet: {
          ...colorSchemeStyles,
          ...classStyles,
          ...bulletStyle
        }
      }
    },
    legalPage: (
      props: { colorScheme?: string; className?: string; bulletStyle?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const containerStyle = {}
      const bulletStyle = props.bulletStyle ? getClassStyles(props.bulletStyle) : {}

      const variantContainerStyle = {}

      const variantBulletStyle = {
        borderBottom: {
          base: '1px solid',
          md: 'none'
        },
        borderColor: 'blackProject.100',
        '&:last-of-type': {
          margin: '0'
        },
        paddingTop: { base: '1', md: '0' },
        paddingBottom: { base: '1', md: '0' },
        marginBottom: { base: '0', md: '3' }
      }

      return {
        container: {
          ...colorSchemeStyles,
          ...classStyles,
          ...containerStyle,
          ...variantContainerStyle
        },
        bullet: {
          ...colorSchemeStyles,
          ...classStyles,
          ...bulletStyle,
          ...variantBulletStyle
        }
      }
    }
  },
  sizes: {
    ...fontGuideMapped,

    small_2x: {
      container: {
        fontSize: sizeRem.fs14
      },
      bullet: {}
    },
    small: {
      container: {
        fontSize: sizeRem.fs16
      },
      bullet: {}
    },
    middle: {
      container: {
        fontSize: sizeRem.fs20
      },
      bullet: {}
    },
    large: {
      container: {
        fontSize: sizeRem.fs24
      },
      bullet: {}
    }
  },
  parts: ['container', 'bullet']
}
