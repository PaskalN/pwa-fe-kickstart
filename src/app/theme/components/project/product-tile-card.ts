import globalClassStyles from '../../classStyles/global'

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles
}

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {}
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
      display: 'flex',
      width: '100%',
      flexDirection: 'column'
    }
  },
  variants: {
    PLP: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        container: {
          maxWidth: '20.8125rem',
          gap: 's8'
        },
        details: {
          px: 's12',
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: 's8'
        }
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    }
  },
  sizes: {},
  colorScheme: 'default',
  parts: ['container']
}
