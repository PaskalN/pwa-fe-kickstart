export default {
  baseStyle: (): {} => ({
    container: {
      maxWidth: { base: '7rem', xs: '10.7rem', sm: '16rem', md: '10.5rem', lg: '20.8125rem' },
      fontFamily: 'fonts.mcm.regular',
      color: 'dark',
      fontSize: '0.875rem',
      width: 'full',
      h2: {
        fontWeight: '571',
        marginBottom: '0.25rem',
        padding: '0 0.75rem',
        fontSize: 'inherit',
        lineHeight: '1rem'
      },
      p: {
        lineHeight: '1rem',
        marginBottom: '0.5rem',
        padding: '0 0.75rem',
        fontSize: 'inherit'
      },
      '.loading-box': {
        display: 'block',
        '& + .loading-box': {
          display: 'none'
        }
      }
    },
    price: {
      padding: '0 0.75rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      fontSize: 'inherit',
      lineHeight: '1.25rem',
      display: 'block',
      span: {
        _first: {
          textDecoration: 'line-through',
          marginRight: '0.25rem'
        }
      }
    },
    imageContainer: {
      marginBottom: '0.5rem'
    },
    imageWrapper: {
      marginBottom: '0.5rem'
    },
    containerMainImage: {
      position: 'relative',
      picture: {
        _last: {
          img: {
            '&.img-set': {
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              opacity: 1,
              transition: '0.2s',
              _hover: {
                opacity: 0
              }
            }
          }
        }
      }
    },
    colorSwatch: {
      display: 'flex',
      gap: '0.25rem',
      marginBottom: '0.5rem',
      padding: '0 0.75rem'
    },
    colorSwatchItem: {
      w: '0.75rem',
      h: '0.75rem',
      bg: 'red',
      borderRadius: '1rem'
    },
    heartWrapper: {
      width: '1.0625rem',
      height: '1.25rem',
      position: 'absolute',
      top: '1.25rem',
      right: '1.0625rem',
      zIndex: '1',
      lineHeight: '0',
      cursor: 'pointer',
      '&.loading': {
        opacity: '0.5',
        cursor: 'not-allowed'
      }
    },
    heartIconDefault: {
      color: 'dark',
      width: '100%',
      height: '100%'
    },
    heartIconFill: {
      color: 'gold.100',
      position: 'absolute',
      opacity: '0',
      transition: '0.2s',
      left: 0,
      top: 0,
      transform: 'scale(2)',
      '&.selected': {
        opacity: '1',
        transform: 'scale(1)'
      }
    },
    tag: {
      lineHeight: '0.875rem',
      fontFamily: 'fonts.mcm.regular',
      fontSize: '0.875rem',
      color: 'cognac.100'
    },
    topTag: {
      position: 'absolute',
      top: '1rem',
      left: '0.75rem',
      zIndex: '1',
      w: { base: '50%', lg: '17%' }
    },
    downTag: {
      padding: '0 0.75rem',
      marginBottom: '0.25rem'
    },
    sizeTag: {
      fontFamily: 'fonts.mcm.regular',
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
      fontWeight: '400',
      color: 'blackProject.100',
      padding: '0 0.75rem'
    },
    square: {
      width: '100%',
      background: 'neutral.10',
      _after: {
        content: '""',
        display: 'block',
        paddingBottom: '108%'
      }
    }
  }),
  parts: ['container', 'colorSwatch', 'colorSwatchItem', 'price', 'imageContainer']
}
