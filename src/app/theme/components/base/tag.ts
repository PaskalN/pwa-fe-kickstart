export default {
  baseStyle: {
    container: {
      bg: 'white',
      background: 'white',
      borderRadius: 1,
      padding: 1,
      minWidth: 5
    },
    label: {
      fontSize: 'xs',
      fontWeight: 500,
      fontFamily: 'fonts.mcm.regular',
      lineHeight: 4,
      textTransform: 'none',
      color: 'gold.100'
    },
    closeButton: {
      marginLeft: 3,
      fontSize: 'md',
      opacity: 1,
      width: 4,
      height: 4,
      color: 'blackProject.100',
      ':hover': {
        opacity: 1
      }
    }
  },
  sizes: {
    md: {
      container: {
        borderRadius: 4,
        padding: 1,
        paddingInlineStart: 1,
        paddingInlineEnd: 1
      }
    }
  }
}
