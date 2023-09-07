export default {
  notificationButtonWrapper: {
    marginTop: '0rem',
    position: 'relative',
    height: '0',
    width: '100%',
    transition: '0.5s',

    button: {
      width: '100%',
      position: 'relative',
      top: '100%',
      opacity: '0'
    }
  },
  notificationButtonWrapperActive: {
    marginTop: '1.5rem',
    height: '3.5rem',
    button: {
      width: '100%',
      position: 'relative',
      top: '0',
      opacity: '1'
    }
  },

  notificationIconWrapper: {
    width: '0rem',
    height: '1.25rem',
    position: 'relative',
    marginRight: '0',
    transition: '0.5s',
    opacity: '0',
    display: 'inline-table',
    svg: {
      position: 'absolute',
      top: '0',
      right: '-1.5rem'
    }
  },

  notificationIconWrapperActive: {
    width: '1.25rem',
    marginRight: '0.625rem',
    opacity: '1',
    svg: {
      right: '0'
    }
  }
}
