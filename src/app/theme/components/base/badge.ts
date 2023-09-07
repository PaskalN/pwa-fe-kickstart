export default {
  baseStyle: {
    background: 'neutral.10',
    borderRadius: 4,
    padding: 1,
    minWidth: 5,
    fontSize: 'xs',
    fontWeight: 400,
    fontFamily: 'fonts.mcm.regular',
    lineHeight: 4,
    textTransform: 'none',
    color: 'neutral.100'
  },
  variants: {
    notification: {
      display: 'inline-flex',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      right: 0,
      minWidth: 5,
      height: 5,
      color: 'white',
      fontSize: 'xs',
      backgroundColor: 'blue.500',
      border: '1px solid',
      borderColor: 'white',
      borderRadius: 'full'
    },
    primary: {
      background: 'neutral.10',
      color: 'neutral.100'
    },
    secondary: {
      background: 'cognac.40',
      color: 'blackProject.100'
    },
    tertiary: {
      background: 'MCM.40',
      color: 'blackProject.100'
    }
  }
}
