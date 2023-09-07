export default {
  baseStyle: {
    // Controls
    control: {
      w: '1.5rem',
      h: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '0',
      svg: {
        lineHeight: '0'
      },
      '.tns-button__hide': {
        display: 'none'
      }
    },

    controlTile: {
      position: 'absolute',
      left: '0',
      right: '0',
      bottom: '0',
      top: '0',

      '&.tns-button__hide': {
        display: 'none'
      }
    },

    controlLeft: {
      marginRight: '0.625rem'
    },

    controlLeftTile: {
      margin: 'auto auto auto 24px'
    },

    controlRight: {
      marginLeft: '0.625rem'
    },

    controlRightTile: {
      margin: 'auto 24px auto auto'
    },

    controlButton: {
      w: '100%',
      h: '100%'
    },

    controlLeftButton: {
      borderRadius: '30rem'
    },

    controlRightButton: {
      borderRadius: '30rem'
    },

    // Index
    index: {
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
    },

    // Dots
    dotContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      right: '0.8125rem',
      bottom: '0.5rem',

      '.dot-item': {
        width: '2px',
        height: '2px',
        backgroundColor: 'grey.dot',
        margin: '0 1px',
        opacity: '0.7',

        '.tns-nav-active': {
          opacity: '1'
        }
      }
    }
  },

  variants: {
    white: (): {} => {
      return {
        index: {
          background: 'white'
        },

        controlLeftButton: {
          background: 'white'
        },

        controlRightButton: {
          background: 'white'
        }
      }
    }
  },
  parts: ['controls', 'index', 'controlLeft', 'controlRight']
}
