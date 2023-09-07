export default {
  parts: ['popper'],
  baseStyle: {
    content: {
      '&.scrollBar': {
        '&::-webkit-scrollbar': {
          w: '3',
          h: '7'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '10',
          bg: 'neutral.60'
        }
      },
      '&.scrollBar.scroll': {
        '&::-webkit-scrollbar': {
          w: '0'
        }
      }
    },
    'close-btn': {
      position: 'absolute '
    },
    closeBtn: {
      position: 'absolute '
    }
  },
  sizes: {
    single: {
      body: {
        minW: 'auto',
        maxW: ['17.5rem', '17.5rem', '21.12rem', '28.56rem', '42.5rem', '30.81rem'], // xs, sm, md, lg, xl, base
        minH: ['19.5rem', '21.12rem', '18.75rem', '13rem', '9.5rem', '13rem'],
        maxH: 'auto',
        rounded: '2xl'
      },
      content: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto'
      }
    },
    multiple: {
      body: {
        maxW: ['17.5rem', '17.5rem', '20.87rem', '23.68rem', '35.31rem', '39.43rem', '39.43rem'],
        minH: 'auto',
        alignSelf: 'center',
        rounded: '2xl'
      },
      content: {
        overflow: 'auto',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'row', 'row', 'row'],
        alignContent: 'center',
        alignItems: ['center', 'center', 'center', 'stretch', 'stretch', 'stretch'],
        justifyContent: ['flex-start', 'flex-start', 'flex-start', 'center', 'center', 'center'],
        gap: '16px',
        backgrond: 'blue'
      }
    }
  },
  variants: {
    panel: {
      popper: {
        bg: 'red.300',
        borderColor: 'transparent',
        borderRadius: 'base',
        boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.25)',
        height: '80vh',
        transform: 'none !important',
        position: 'fixed !important',
        top: '20vh !important'
      },
      content: {
        '&.scrollBar': {
          '&::-webkit-scrollbar': {
            w: '3',
            h: '7'
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10',
            bg: 'neutral.60'
          }
        },
        '&.scrollBar.scroll': {
          '&::-webkit-scrollbar': {
            w: '0'
          }
        }
      },
      'close-btn': {
        position: 'absolute '
      },
      closeBtn: {
        position: 'absolute '
      }
    },
    subtle: {
      body: {
        background: 'transparent'
      },
      popper: {
        bg: 'red.300',
        borderColor: 'transparent',
        borderRadius: 'base',
        boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.25)',
        height: '80vh',
        transform: 'none !important',
        position: 'fixed !important',
        top: '20vh !important'
      },
      content: {
        '&.scrollBar': {
          '&::-webkit-scrollbar': {
            w: '3',
            h: '7'
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10',
            bg: 'neutral.60'
          }
        },
        '&.scrollBar.scroll': {
          '&::-webkit-scrollbar': {
            w: '0'
          }
        }
      },
      'close-btn': {
        position: 'absolute '
      },
      closeBtn: {
        position: 'absolute '
      }
    },
    solid: (props: { colorScheme?: string }): {} => ({
      body: {
        background: props.colorScheme || 'white'
      },
      popper: {
        bg: 'red.300',
        borderColor: 'transparent',
        borderRadius: 'base',
        boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.25)',
        height: '80vh',
        transform: 'none !important',
        position: 'fixed !important',
        top: '20vh !important'
      },
      content: {
        '&.scrollBar': {
          '&::-webkit-scrollbar': {
            w: '3',
            h: '7'
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '10',
            bg: 'neutral.60'
          }
        },
        '&.scrollBar.scroll': {
          '&::-webkit-scrollbar': {
            w: '0'
          }
        }
      },
      'close-btn': {
        position: 'absolute '
      },
      closeBtn: {
        position: 'absolute '
      }
    }),
    small: {},
    normal: {
      popper: {
        width: 286
      },
      header: {
        textAlign: 'left',
        fontWeight: 700,
        borderBottom: 'none',
        fontSize: 18,
        px: 7,
        paddingTop: 6
      },
      footer: {
        textAlign: 'left',
        fontSize: 14,
        px: 3,
        borderTop: 'none'
      },
      content: {
        width: 286
      },
      body: {
        py: 0
      }
    },
    fullWidth: {
      popper: {
        width: '100%',
        maxWidth: '100%',
        boxShadow: 'none',
        top: '0',
        right: 'auto',
        bottom: 'auto',
        left: '0'
      },
      content: {
        width: 'auto'
      }
    },
    searchSuggest: {
      popper: {
        height: 'auto',
        top: '0',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      content: {
        width: 'inherit',
        border: '1px solid',
        borderColor: 'gold.100',
        borderTop: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        _before: {
          display: 'block',
          position: 'absolute',
          content: '""',
          height: '4px',
          borderWidth: '0 1px',
          borderColor: 'gold.100',
          top: '-2px',
          left: '-1px',
          right: '-1px'
        }
      }
    }
  }
}
