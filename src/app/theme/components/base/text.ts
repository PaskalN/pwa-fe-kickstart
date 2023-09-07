import globalClassStyles from '../../classStyles/global'
import fontGuide from '../../foundations/fontGuide'
import sizeRem from '../../global/sizeRem'

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles
}

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {
    color: 'dark'
  },
  neutral: {
    color: 'neutral.100'
  },
  eco_tag: {
    backgroundColor: 'cognac.50',
    color: 'cognac.100'
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
    fontFamily: 'fonts.mcm.regular',
    fontWeight: 'normal',
    lineHeight: 'initial'
  },
  variants: {
    default: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {}

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },

    button_text: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        color: 'inherit'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },

    eco_tag: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        color: 'inherit',
        padding: '0.125rem 0.75rem',
        borderRadius: '50rem'
      }

      return {
        ...classStyles,
        ...variantStyle,
        ...colorSchemeStyles
      }
    }
  },
  sizes: {
    ...fontGuide,

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
