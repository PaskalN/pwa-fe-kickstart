export default {
  baseStyle: {
    container: {
      _active: {
        borderColor: 'gold.130'
      },
      _focusWithin: {
        outline: '2px solid red',
        outlineOffset: '2px'
      },
      _hover: {
        boxShadow: '0px 0px 8px rgba(0,0,0,0.2)'
      },
      _selected: {
        borderColor: 'gold.100'
      },
      alignItems: 'center',
      backgroundColor: 'white',
      border: '1px solid',
      borderColor: 'neutral.30',
      borderRadius: 16,
      flexDirection: 'column',
      maxWidth: '21.5625rem',
      minHeight: '13.563rem',
      padding: 5,
      textAlign: 'center',
      width: ['full', '12.25rem'],
      wordBreak: 'break-word'
    },
    heading: {
      color: 'blackProject.100',
      fontSize: 'md',
      fontFamily: 'fonts.mcm.favorit',
      letterSpacing: '0.01em',
      lineHeight: 5,
      marginBottom: 4,
      textTransform: 'uppercase'
    },
    description: {
      color: 'blackProject.100',
      fontFamily: 'fonts.mcm.favorit',
      fontSize: 'sm',
      lineHeight: 6,
      marginBottom: 4
    },
    button: {
      _groupHover: {
        backgroundColor: 'gold.100'
      },
      _focus: {
        backgroundColor: 'gold.100'
      },
      _groupActive: {
        backgroundColor: 'gold.130'
      },
      fontFamily: 'fonts.mcm.favorit',
      justifySelf: 'flex-end',
      marginBlockStart: 'auto',
      size: 'sm',
      variant: 'primary'
    }
  },
  variants: {},
  sizes: {},
  defaultProps: { variant: null, size: null },
  parts: ['container', 'heading', 'description', 'button']
}
