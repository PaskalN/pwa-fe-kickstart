import globalClassStyles from '../../classStyles/global'
import sizeRem from '../../global/sizeRem'

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles
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
    container: {
      fontFamily: 'fonts.mcm.regular',
      fontWeight: 'normal',
      lineHeight: 'initial',
      padding: '0',
      paddingEnd: '0',
      paddingStart: '0',
      margin: '0',
      marginEnd: '0',
      marginStart: '0',
      listStylePosition: 'inside',

      listStyle: 'none',
      listStyleType: 'none'
    },
    icon: {},
    item: {}
  },
  variants: {
    default: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyleContainer = {}

      const variantStyleIcon = {}

      const variantStyleItem = {}

      return {
        container: { ...colorSchemeStyles, ...classStyles, ...variantStyleContainer },
        icon: { ...colorSchemeStyles, ...classStyles, ...variantStyleIcon },
        item: { ...colorSchemeStyles, ...classStyles, ...variantStyleItem }
      }
    }
  },

  sizes: {
    small_2x: {
      container: {
        fontSize: sizeRem.fs14
      },
      icon: {
        fontSize: sizeRem.fs14
      },
      item: {
        fontSize: sizeRem.fs14
      }
    },
    small: {
      container: {
        fontSize: sizeRem.fs16
      },
      icon: {
        fontSize: sizeRem.fs16
      },
      item: {
        fontSize: sizeRem.fs16
      }
    },
    middle: {
      container: {
        fontSize: sizeRem.fs20
      },
      icon: {
        fontSize: sizeRem.fs20
      },
      item: {
        fontSize: sizeRem.fs20
      }
    },
    large: {
      container: {
        fontSize: sizeRem.fs24
      },
      icon: {
        fontSize: sizeRem.fs24
      },
      item: {
        fontSize: sizeRem.fs24
      }
    }
  },
  colorScheme: 'default',
  parts: ['container', 'icon', 'item']
}
