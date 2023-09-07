import globalClassStyles from '../../classStyles/global'
import fontGuide from '../../foundations/fontGuide'
import sizeRem from '../../global/sizeRem'

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles,
  'modal-title': {
    textTransform: 'uppercase',
    letterSpacing: '-0.5px'
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
    fontWeight: 'normal',
    lineHeight: 'initial'
  },
  variants: {
    default: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        fontFamily: 'fonts.mcm.boldExtended'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },

    sectionTitle: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        letterSpacing: '-0.03125rem',
        fontFamily: 'fonts.mcm.regular'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    }
  },
  sizes: {
    ...fontGuide,

    small_3x: {
      fontSize: sizeRem.fs12
    },
    small_2x: {
      fontSize: sizeRem.fs14
    },
    small: {
      fontSize: sizeRem.fs16
    },
    middle: {
      fontSize: sizeRem.fs20
    },
    large: {
      fontSize: sizeRem.fs24
    }
  },
  colorScheme: 'default'
}
