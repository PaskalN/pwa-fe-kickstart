export default {
  baseStyle: {
    container: {
      bg: 'neutral.10',
      overflow: 'hidden',
      p: { base: 4, lg: 6 },
      pt: { base: 0, lg: '0.375rem' },
      px: { base: 5, lg: 6 },
      '.tns-controls': {
        display: 'none'
      },
      '.tns-nav': {
        display: 'none'
      },
      '.category-link-box:last-of-type a': {
        margin: 0
      }
    },
    carouselContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    categoryLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minW: '7.5rem',
      h: { base: '4.813rem', lg: '5.625rem' },
      bg: 'white',
      border: '1px',
      borderColor: 'neutral.30',
      borderRadius: 4,
      textTransform: 'capitalize',
      p: 2
    }
  },
  variants: {
    small: {
      categoryLink: {
        minW: '8.75rem',
        h: { base: '4rem', lg: '4rem' }
      }
    }
  }
}
