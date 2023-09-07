const containerMaxWidthStyles = {
  maxW: '48.5rem',
  mx: 'auto'
}

const headingStyles = {
  fontSize: 'md',
  lineHeight: 5,
  letterSpacing: '0.01em',
  textTransform: 'uppercase',
  mb: 6
}

const storeLocatorCardContainer = {
  borderRadius: 8,
  p: 3,
  border: '0.063rem solid',
  mb: 4
}

export default {
  baseStyle: {
    container: {
      color: 'blackProject.100',
      fontFamily: 'fonts.mcm.regular',
      maxW: '120rem',
      mx: 'auto',
      mt: { base: 5, lg: 0 }
    },
    bannerContainer: {
      textAlign: 'center',
      px: 5,
      ...containerMaxWidthStyles
    },
    gridContainer: {
      pos: 'relative',
      ...containerMaxWidthStyles
    },
    autoCompleteContainer: {
      bg: 'cognac.40',
      p: 4,
      mb: { base: 8, lg: 10 },
      borderRadius: 8
    },
    storeListCountryHeading: headingStyles,
    formattedAddress: {
      ...headingStyles,
      mb: 4
    },
    storeListCityHeading: {
      ...headingStyles,
      fontSize: 'xs',
      lineHeight: 4,
      my: 6
    },
    storeListAddToCartBtn: {
      my: 4,
      '.chakra-button': { w: 'full' }
    },
    autocompleteList: {
      pos: 'absolute',
      top: '100%',
      left: 0,
      bg: 'white',
      zIndex: 'dropdown',
      border: '0.063rem solid',
      borderColor: 'neutral.30',
      borderRadius: 8,
      '.autocomplete-list-item:last-child': {
        border: 'none'
      }
    },
    autocompleteListItem: {
      cursor: 'pointer',
      p: 3,
      borderBottom: '0.063rem solid',
      borderColor: 'neutral.30',
      '&:hover': {
        bg: 'neutral.10'
      }
    },
    autocompleteErrorMessage: {
      mt: 1,
      fontSize: 'sm',
      lineHeight: 6,
      color: 'system_redish.100'
    },
    autocompleteHelperText: {
      mt: { base: 2, lg: 4 },
      lineHeight: 4,
      fontWeight: 500,
      textDecoration: 'underline',
      textTransform: 'capitalize',
      color: 'blackProject.100',
      fontSize: 'sm',
      cursor: 'pointer'
    },
    modalContent: {
      mx: 5,
      bg: 'cognac.50',
      borderRadius: 16,
      boxShadow: '0 0.25rem 2.25rem 0.625rem rgba(0, 0, 0, 0.15)'
    },
    modalHeader: {
      pt: '4.75rem',
      fontWeight: 700,
      fontSize: 'xl',
      lineHeight: 7,
      letterSpacing: '-0.031rem',
      textTransform: 'uppercase',
      mb: 4,
      pb: 0,
      px: 4
    },
    modalCloseButton: {
      w: 11,
      h: 11,
      top: 6,
      right: 4,
      ':hover': { background: 'none' }
    },
    modalBody: {
      px: 4,
      py: 0,
      fontSize: 'md',
      lineHeight: 7,
      mb: 2
    },
    storeLocatorCardContainer: {
      ...storeLocatorCardContainer,
      borderColor: 'neutral.30'
    },
    storeLocatorSelectedCardContainer: {
      ...storeLocatorCardContainer,
      borderColor: 'gold.100'
    },
    storeLocatorCardHeading: {
      fontSize: 'sm',
      lineHeight: 5,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      color: 'black'
    },
    storeLocatorCardAddress: {
      fontSize: 'sm',
      lineHeight: 6,
      color: 'neutral.100',
      mb: 2
    },
    storeLocatorCardPhone: {
      ml: 1,
      fontSize: 'sm',
      lineHeight: 4,
      mt: '0.063rem'
    },
    storeLocatorCardDirections: {
      mr: 1,
      fontSize: 'sm',
      lineHeight: 4,
      mt: '0.063rem'
    },
    storeLocatorCardPickUpInStoreText: {
      mt: 2,
      color: 'system_green.100',
      fontSize: 'sm',
      lineHeight: 6
    },
    storeLocatorCardFavoriteText: {
      fontWeight: 500,
      fontSize: 'sm',
      lineHeight: 4,
      textTransform: 'capitalize'
    },
    storeLocatorOverlayHeading: {
      fontSize: 'md',
      lineHeight: 5,
      mr: 6,
      textTransform: 'uppercase',
      letterSpacing: '0.01em',
      color: 'black'
    },
    storeLocatorOverlayEditBtn: {
      fontSize: 'sm',
      fontWeight: 500,
      lineHeight: 4,
      textDecoration: 'underline'
    },
    storeLocatorOverlayPreferredStoreHeading: {
      fontWeight: 700,
      fontSize: 'xs',
      lineHeight: 4,
      textTransform: 'uppercase',
      letterSpacing: '0.01em'
    },
    storeLocatorOverlayPreferredStoreHeadingValue: {
      fontSize: 'md',
      lineHeight: 7,
      textTransform: 'uppercase',
      letterSpacing: '0.01em'
    },
    storeLocatorOverlayModalContent: {
      m: 0,
      mt: { lg: '12.813rem' },
      h: { base: 'full', lg: 'calc(100% - 12.813rem)' },
      borderRadius: 0,
      bg: 'neutral.30',
      color: 'blackProject.100'
    },
    storeLocatorOverlayModalCloseBtn: {
      w: 'auto',
      height: 'auto',
      top: '50%',
      transform: 'translateY(-50%)',
      right: 6,
      sx: { ':hover': { background: 'none' } }
    },
    storeLocatorOverlayModalBody: {
      py: 0,
      px: 5,
      overflowY: 'auto',
      color: 'blackProject.100',
      pos: 'relative'
    },
    storeLocatorAccountPreferenceHeading: {
      fontSize: 'xl',
      lineHeight: 7,
      letterSpacing: '-0.031rem',
      textTransform: 'uppercase',
      mb: 4
    }
  }
}
