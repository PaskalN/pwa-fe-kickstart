export default {
  baseStyle: {
    container: {
      'div.content-wrapper__outer': {
        transition: '0.2s',
        display: 'none',
        position: {
          base: 'fixed',
          sm: 'static'
        },
        h: {
          base: '100%',
          sm: 'auto'
        },
        w: {
          base: '100%',
          sm: 'auto'
        },
        bottom: '0',
        left: '0',
        background: 'transparent',
        zIndex: '1100'
      },

      'div.content-wrapper__children': {
        height: '100%',
        background: {
          base: 'neutral.30',
          sm: 'transparent'
        },
        padding: {
          base: '3.875rem 1.25rem 1.25rem 1.25rem',
          sm: '0'
        }
      },

      'div.content-wrapper__inner': {
        transition: '0.2s',
        position: {
          base: 'fixed',
          sm: 'relative'
        },
        left: '0',
        top: {
          base: 'auto',
          sm: '-15px'
        },
        bottom: {
          base: '-100%',
          sm: 'auto'
        },
        h: {
          base: '90%',
          sm: 'auto'
        },
        opacity: {
          base: '1',
          sm: '0'
        }
      },

      // OPEN
      '&.open': {
        '.toggler-button': {
          span: {
            transform: 'rotate(-180deg)'
          }
        },

        'div.content-wrapper__outer': {
          display: 'block'
        }
      },

      // ANIMATE
      '&.animate': {
        'div.content-wrapper__outer': {
          background: {
            base: 'rgba(0, 0, 0, 0.25)',
            sm: 'transparent'
          }
        },
        'div.content-wrapper__inner': {
          bottom: {
            base: '0'
          },
          top: {
            sm: '0'
          },
          opacity: '1'
        }
      },

      // BUTTON
      '.toggler-button': {
        span: {
          transform: 'rotate(0deg)',
          transition: '0.2s'
        }
      }
    }
  },
  defaultProps: {},
  parts: ['container']
}
