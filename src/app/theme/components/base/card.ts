const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {}
}

const getColorSchemeStyle = (colorScheme: string) => {
  const scheme = colorSchemeStyles?.[colorScheme]
  return scheme || {}
}

export default {
  baseStyle: {
    container: {
      bg: 'white'
    },
    header: {},
    body: {},
    footer: {}
  },
  variants: {
    default: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')

      const variantStyle = {
        container: {
          borderRadius: 's16'
        },
        header: {},
        body: {},
        footer: {}
      }

      return {
        ...colorSchemeStyles,
        ...variantStyle
      }
    },
    clear: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')

      const variantStyle = {
        container: {
          bg: 'transparent'
        },
        header: {},
        body: {},
        footer: {}
      }

      return {
        ...colorSchemeStyles,
        ...variantStyle
      }
    }
  },
  sizes: {
    default: {
      container: {},
      header: {},
      body: {
        padding: 's16'
      },
      footer: {}
    }
  },
  colorScheme: 'default',

  parts: ['container', 'header', 'body', 'footer']
}
