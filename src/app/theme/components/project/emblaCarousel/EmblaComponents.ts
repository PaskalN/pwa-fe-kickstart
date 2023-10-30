export default {
  baseStyle: {
    navButton: {
      w: '1.5rem',
      h: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '0',
      backgroundColor: 'white',
      borderRadius: '4rem',
      transition: '0.3s'
    },

    navButtonCenter: {
      position: 'absolute',
      left: '0',
      right: '0',
      bottom: '0',
      top: '0',
      margin: 'auto'
    },

    navButtonLeft: {
      marginLeft: '1rem',
      opacity: '0'
    },

    navButtonRight: {
      marginRight: '1rem',
      opacity: '0'
    },

    navButtonLeftShow: {
      marginLeft: '0.625rem',
      opacity: '1'
    },

    navButtonRightShow: {
      marginRight: '0.625rem',
      opacity: '1'
    },

    // Image Component
    imageComponent: {
      overflow: 'hidden',
      img: {
        width: '100%'
      }
    },

    imageComponentFull: {
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      img: {
        width: 'auto',
        height: '100%',
        maxWidth: 'initial'
      }
    },

    // Index Component
    indexComponentLeftBottom: {
      position: 'absolute',
      left: '0.75rem',
      bottom: '0.75rem'
    },

    indexComponentRightBottom: {
      position: 'absolute',
      right: '0.75rem',
      bottom: '0.75rem'
    },

    indexComponent: {
      w: '2.5rem',
      h: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      color: 'dark',
      fontFamily: 'fonts.mcm.regular',
      marginTop: '1px',
      lineHeight: '0'
    }
  },
  parts: ['navButton', 'navButtonCenter']
}
