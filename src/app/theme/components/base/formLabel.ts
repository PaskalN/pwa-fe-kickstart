import globalClassStyles from '../../classStyles/global'
import fontGuide from '../../foundations/fontGuide'

const resetDefeault = {
  margin: '0',
  paddgin: '0',
  fontSize: 'inherit',
  fontFamily: 'inherit'
}

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles
}

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {
    color: 'dark'
  },
  neutral: {
    color: 'neutral.100'
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
    marginBottom: 1,
    fontSize: 'sm',
    fontFamily: 'fonts.mcm.regular'
  },
  variants: {
    // New Implementation
    default: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {}

      return {
        ...resetDefeault,
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },

    // Old Implementation
    signup: {
      fontSize: 'sm',
      fontWeight: 700,
      fontFamily: 'fonts.mcm.boldExtended',
      lineHeight: 5,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      color: 'blackProject.100',
      marginBottom: 4
    }
  },

  sizes: {
    ...fontGuide
  },

  _error: {
    color: 'MCM.100'
  }
}
