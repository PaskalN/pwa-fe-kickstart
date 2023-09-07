import globalClassStyles from '../../classStyles/global'

const classStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  ...globalClassStyles
}

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {
    color: 'dark'
  },
  contactUs: {
    border: '1px solid',
    borderColor: 'neutral.30'
  },
  legalPage: {
    borderTop: '1px solid',
    borderColor: 'neutral.30'
  },
  clear: {
    backgroundColor: 'transparent'
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
    lineHeight: 'initial',
    display: 'flex',
    flexDirection: 'column',
    bg: 'white',
    width: '100%'
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
    displayNone: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        display: 'none'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },
    claer: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        gap: 's16',
        padding: 's16',
        alignItems: 'flex-start'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },
    cardModalInfo: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        padding: 's16',
        borderRadius: 's16',
        gap: 's16'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },
    cardContactUs: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        padding: 's24',
        borderRadius: 's16',
        gap: 's16',
        alignItems: 'center'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    },
    details: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')
      const classStyles = props.className ? getClassStyles(props.className) : {}

      const variantStyle = {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 's16'
      }

      return {
        ...colorSchemeStyles,
        ...classStyles,
        ...variantStyle
      }
    }
  },
  sizes: {
    card: {
      width: '100%',
      maxWidth: '22.375rem'
    },

    card_eco: {
      width: '100%',
      maxWidth: {
        base: '100%',
        sm: '16.375rem'
      }
    },

    contactUs: {
      width: '100%',
      minWidth: {
        base: '100%',
        sm: '11.875rem'
      },
      maxWidth: {
        base: '100%',
        sm: '11.875rem'
      }
    },

    legalPageClear: {
      width: '100%',
      minWidth: 'unset',
      maxWidth: 'unset'
    },

    contactUsClear: {
      width: '100%',
      maxWidth: {
        base: '100%',
        sm: '16.375rem'
      }
    }
  },
  colorScheme: 'default'
}
