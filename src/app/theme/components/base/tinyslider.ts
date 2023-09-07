export default {
  baseStyle: {
    container: {
      '.tns-outer': {
        padding: '0 !important'
      },
      '.tns-outer [hidden]': {
        display: 'none'
      },
      '.tns-outer [aria-controls]': {
        cursor: 'pointer'
      },
      '.tns-outer [data-action]': {
        cursor: 'pointer'
      },
      '.tns-slider': {
        transition: 'all 0s',

        '>.tns-item': {
          boxSize: 'border-box'
        }
      },
      '.tns-horizontal': {
        '&.tns-subpixel': {
          whiteSpace: 'nowrap',

          '>.tns-item': {
            display: 'inline-block',
            verticalAlign: 'top',
            whiteSpace: 'normal'
          }
        },

        '&.tns-no-subpixel': {
          _after: {
            content: '""',
            display: 'table',
            clear: 'both'
          },

          '>.tns-item': {
            float: 'left'
          }
        },

        '&.tns-carousel': {
          '&.tns-no-subpixel': {
            '>.tns-item': {
              marginRight: '-100%'
            }
          }
        }
      },

      '.tns-no-calc': {
        position: 'relative',
        left: '0'
      },

      '.tns-gallery': {
        position: 'relative',
        left: '0',
        minHeight: '1px',

        '>.tns-item': {
          position: 'absolute',
          left: '-100%',
          transition: 'transform 0s, opacity 0s'
        },

        '>.tns-slide-active': {
          position: 'relative',
          left: 'auto !important'
        },

        '>.tns-moving': {
          transition: 'all 0.25s'
        }
      },

      '.tns-autowidth': {
        display: 'inline-block'
      },

      '.tns-lazy-img': {
        transition: 'opacity 0.6s',
        opacity: '0.6',

        '&.tns-complete': {
          opcity: '1'
        }
      },

      '.tns-ah': {
        opcity: '1'
      },

      '.tns-ovh': {
        overflow: 'hidden'
      },

      '.tns-visually-hidden': {
        position: 'absolute',
        left: '-10000em'
      },

      '.tns-transparent': {
        opacity: '0',
        visibility: 'hidden'
      },

      '.tns-fadeIn': {
        opacity: '1',
        filter: 'alpha(opacity=100)',
        zIndex: '0'
      },

      '.tns-normal': {
        opacity: '0',
        filter: 'alpha(opacity=0)',
        zIndex: '-1'
      },

      '.tns-fadeOut': {
        opacity: '0',
        filter: 'alpha(opacity=0)',
        zIndex: '-1'
      },

      '.tns-vpfix': {
        whiteSpace: 'nowrap',

        '>div': {
          display: 'inline-block'
        },

        '>li': {
          display: 'inline-block'
        }
      },

      '.tns-t-subp2': {
        margin: '0 auto',
        width: '310px',
        position: 'relative',
        height: '10px',
        overflow: 'hidde'
      },

      '.tns-t-ct': {
        width: 'calc(100% * 70 / 3)',
        position: 'absolute',
        right: ''
      },

      '.tns-t-ct:after': {
        content: '""',
        display: 'table',
        clear: 'both'
      },

      '.tns-t-ct>div': {
        width: 'calc(100% / 70)',
        height: '10px',
        float: 'left'
      }
    } // container end
  },
  defaultProps: {},
  parts: ['container']
}
