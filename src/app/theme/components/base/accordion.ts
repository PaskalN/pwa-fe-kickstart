type VariantProps = { colorScheme?: string; className?: string }

export default {
  baseStyle: {
    button: {
      paddingLeft: 0,

      _hover: {
        background: 'none'
      }
    },
    panel: {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  variants: {
    // New Implementation
    default: (_props: VariantProps & Project.Utils.ObjectKeyUnknown): Project.Utils.ObjectKeyUnknown => {
      if (_props.colorScheme === 'none') return {}

      const variantStyle = {
        button: {
          padding: '0'
        },
        container: {
          padding: '0',
          margin: '0',
          border: 'none'
        },
        icon: {},
        panel: {
          paddingLeft: '0',
          paddingRight: '0',
          paddingBottom: '0',
          paddingTop: 's14'
        }
      }

      return {
        ...variantStyle
      }
    }
  }
}
