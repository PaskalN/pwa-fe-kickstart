const tabStyles = {
  px: 3,
  py: 4,
  bg: 'white',
  border: '0.063rem solid',
  borderColor: 'neutral.30',
  borderRadius: 4,
  minWidth: '7.5rem',
  h: '5.625rem',
  mr: 4,
  mb: 4,
  whiteSpace: 'pre-wrap'
}

export default {
  baseStyle: {
    container: {
      fontFamily: 'fonts.mcm.regular',
      color: 'blackProject.100',
      mt: { base: 7, lg: 14 }
    },
    heading: {
      fontSize: { base: '3xl', lg: '2rem' },
      lineHeight: { base: 8, lg: 9 },
      textTransform: 'uppercase',
      mb: 4
    },
    folderTabContainer: {
      pos: 'relative',
      bg: 'neutral.10',
      p: 6,
      pb: 2,
      mb: 8
    },
    folderTabWrapper: {
      maxW: '50rem',
      mx: 'auto',
      minH: 20,
      display: { base: 'flex', lg: 'block' },
      overflow: { base: 'auto', lg: 'unset' }
    },
    folderTab: {
      ...tabStyles
    },
    folderActiveTab: {
      ...tabStyles,
      color: 'gold.100',
      borderColor: 'gold.100'
    },
    folderContentContainer: {
      px: 6,
      maxW: '90rem',
      mx: 'auto',
      pos: 'relative',
      mb: 10,
      minH: 96,
      '.content-item-cards-component': {
        p: 0
      }
    },
    folderContentHeading: {
      textAlign: 'center',
      mb: 6,
      fontSize: 'xl',
      lineHeight: 7,
      letterSpacing: '-0.031rem',
      textTransform: 'uppercase'
    },
    folderContentGrid: {
      gap: 6
    },
    folderContentCardImage: {
      pos: 'relative',
      '.image-with-loader-image': {
        objectFit: 'cover',
        w: 'full',
        h: { base: '17.5rem', lg: '18.688rem' }
      }
    },
    folderContentCardHeading: {
      fontSize: 'sm',
      lineHeight: 5,
      mt: 3,
      textTransform: 'uppercase',
      letterSpacing: '0.009rem'
    },
    paginationContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      mt: 14
    }
  }
}
