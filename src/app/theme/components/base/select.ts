import fontGuide from '../../foundations/fontGuide'

const colorSchemeStyles: Project.Utils.ObjectKeyType<Project.Utils.ObjectKeyString | {}> = {
  default: {}
}

const getColorSchemeStyle = (colorScheme: string) => {
  const scheme = colorSchemeStyles?.[colorScheme]
  return scheme || {}
}

const mdSize = { height: 11, h: 11, borderRadius: 'base' }

export default {
  baseStyle: {},
  variants: {
    default: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')

      const variantStyle = {
        field: {
          padding: 's14',
          border: '1px solid',
          borderColor: 'neutral.80',
          borderRadius: 's4',
          ...fontGuide.f_body_M
        }
      }

      return {
        ...colorSchemeStyles,
        ...variantStyle
      }
    },

    white: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')

      const variantStyle = {
        field: {
          borderColor: '#8A8D96 !important',
          border: '0.075rem solid',
          backgroundColor: 'white !important',

          _focus: {
            borderColor: 'gold.100',
            boxShadow: 'none'
          },
          _filled: {
            borderColor: 'neutral.80'
          },
          _hover: {
            borderColor: 'none'
          }
        }
      }

      return {
        ...colorSchemeStyles,
        ...variantStyle
      }
    },

    outline: (
      props: { colorScheme?: string; className?: string } & Project.Utils.ObjectKeyUnknown
    ): Project.Utils.ObjectKeyUnknown => {
      const colorSchemeStyles = getColorSchemeStyle(props.colorScheme || 'default')

      const variantStyle = {
        field: {
          borderColor: 'neutral.80',
          border: '0.075rem solid',
          _focus: {
            borderColor: 'gold.100',
            boxShadow: 'none'
          },
          _filled: {
            borderColor: 'gold.100'
          },
          _hover: {
            borderColor: 'none'
          },
          _disabled: {
            cursor: 'not-allowed',
            border: 'none',
            backgroundColor: 'neutral.10'
          },
          _invalid: {
            borderColor: 'system_redish.100',
            boxShadow: 'none'
          }
        }
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
    },

    // Old
    md: {
      field: mdSize
    }
  },
  colorScheme: 'default',

  parts: ['field', 'icon']
}
