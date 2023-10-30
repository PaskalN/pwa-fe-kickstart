type CarouselTypes = { colorScheme?: string; className?: string; type?: Project.SDK.RecommendationStyleType }

export default {
  baseStyle: {
    main: {
      overflow: 'hidden'
    },

    container: {
      display: 'flex'
    },

    slide: {
      flex: '0 0 100%'
    }
  },

  variants: {
    default: (): Project.Utils.ObjectKeyUnknown => {
      return {}
    },
    zoom: (): Project.Utils.ObjectKeyUnknown => {
      return {}
    },
    swatch: (): Project.Utils.ObjectKeyUnknown => {
      return {
        main: {
          w: '100%'
        },
        container: {
          gap: 's8'
        },
        slide: {
          flex: '0 0 auto',
          minWidth: '0',
          boxSizing: 'border-box',
          marginTop: 's3',
          marginBottom: 's3'
        },
        deactive: {
          justifyContent: 'center'
        }
      }
    },
    recommendation: (props: CarouselTypes): Project.Utils.ObjectKeyUnknown => {
      const typeA = {
        wrapper: {
          mx: {
            base: '0',
            lg: '-1.5rem'
          }
        },
        main: {
          w: '100%'
        },
        container: {
          gap: {
            base: 's8',
            lg: '0'
          }
        },
        slide: {
          width: '100%',
          minWdith: '0',

          flex: {
            base: '0 0 4.75rem',
            sm: '0 0 6.25rem',
            md: '0 0 7.125rem',
            lg: '0 0 16.66666%'
          },

          px: {
            base: '0',
            lg: 's24'
          }
        },
        deactive: {}
      }

      const typeB = {
        ...typeA,
        wrapper: {
          mx: {
            base: '0'
          }
        },
        container: {
          gap: {
            base: 's8',
            lg: 's24'
          }
        },
        slide: {
          flex: {
            base: '0 0 80%',
            md: '0 0 45%',
            lg: '0 0 33.333%'
          },
          '[data-component="product-tile-container"]': {
            maxW: 'full'
          }
        }
      }

      const typeC = {
        ...typeA,
        wrapper: {
          mx: {
            base: '0'
          }
        },
        container: {
          gap: {
            base: 's8'
          }
        },
        slide: {
          flex: {
            base: '0 0 28.57%',
            md: '0 0 22.2222%',
            lg: '0 0 16.6666%'
          },
          '[data-component="product-tile-container"]': {
            maxW: 'full'
          }
        }
      }

      if (props.type === 'A') {
        return typeA
      }

      if (props.type === 'B') {
        return typeB
      }

      if (props.type === 'C') {
        return typeC
      }

      return typeA
    }
  },
  sizes: {
    full: {
      main: {
        height: '100%'
      },
      container: {
        height: '100%'
      },
      slide: {
        height: '100%',
        paddingX: 's16',
        flex: '0 0 100%'
      }
    },
    videoInstructions: {
      main: {
        height: '100%',
        w: '100%'
      },
      container: {
        height: '100%',
        gap: {
          base: 's8',
          l_xl: 's14',
          xxl: 's24'
        }
      },
      slide: {
        height: '100%',
        flex: {
          base: '0 0 85%',
          l_xl: '0 0 66.666%'
        }
      }
    }
  },

  parts: ['main', 'counter', 'slide', 'active', 'deactive']
}
