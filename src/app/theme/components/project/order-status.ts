const attributeHeadingStyle = {
  fontWeight: 600,
  fontSize: 'sm',
  lineHeight: 4,
  textTransform: 'capitalize'
}

export default {
  baseStyle: {
    container: {
      color: 'blackProject.100',
      fontFamily: 'fonts.mcm.regular',
      textAlign: 'center'
    },
    heading: {
      fontSize: { base: '3xl', lg: '2rem' },
      lineHeight: { base: 8, lg: 9 },
      textTransform: 'uppercase',
      px: 5,
      textAlign: 'center',
      my: { base: 6, lg: 8 }
    },
    tabText: {
      fontSize: 'xl',
      lineHeight: 7,
      letterSpacing: '-0.031rem',
      textTransform: 'uppercase',
      mb: 8,
      px: 5,
      textAlign: 'center',
      color: 'black'
    },
    shipmentTabContainer: {
      bg: 'neutral.10',
      py: 6,
      px: 5,
      mb: { base: 6, lg: 8 },
      justifyContent: 'center'
    },
    shipmentTab: {
      h: { base: '4.813rem', lg: '5.625rem' },
      py: 4,
      px: 6,
      border: '0.063rem solid',
      borderColor: 'neutral.30',
      borderRadius: 4,
      w: '50%',
      maxW: '11rem',
      mx: 1
    },
    shipmentActiveTab: {
      borderColor: 'gold.100',
      color: 'gold.100'
    },
    orderTrackingContainer: {
      justifyContent: 'center',
      alignItems: 'baseline',
      mb: { base: 6, lg: 14 },
      '.order-tracking': {
        padding: { base: '0 1.25rem', lg: '0 1.875rem' },
        position: 'relative',
        textAlign: 'center',
        '&:first-of-type': {
          '::before': {
            display: 'none'
          }
        },
        '::before': {
          content: '""',
          display: 'block',
          height: '0.063rem',
          width: '1.25rem',
          position: 'absolute',
          top: '1.438rem',
          left: '-0.625rem',
          border: '0.063rem dashed',
          borderColor: 'blackProject.100',
          zIndex: 0
        }
      }
    },
    subHeading: {
      fontSize: 'xl',
      lineHeight: 7,
      textTransform: 'uppercase',
      mb: 3
    },
    separator: {
      w: 'full',
      borderTop: 0,
      borderBottom: '0.063rem solid',
      borderColor: 'neutral.30',
      mb: { base: 6, lg: 8 }
    },
    orderStatusContainer: {
      px: 5,
      textAlign: 'left',
      maxW: { base: '24.625rem', lg: '38.875rem' },
      mx: 'auto'
    },
    productItemContainer: {
      border: '1px',
      borderColor: 'neutral.30',
      borderRadius: 8,
      p: 4,
      pb: 2,
      minH: { lg: '9rem' },
      mb: { base: 4, lg: 6 },
      '.chakra-aspect-ratio': {
        img: {
          borderRadius: '0.875rem'
        }
      }
    },
    productItemImage: {
      minW: { base: '5rem', sm: '7rem', lg: '5.813rem' },
      alignSelf: 'flex-start',
      borderRadius: 8,
      mr: 4
    },
    productItemHeading: {
      fontSize: 'sm',
      lineHeight: 5,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
      color: 'black'
    },
    productItemSideContainer: {
      w: { lg: '30%' },
      display: { base: 'none', lg: 'flex' },
      textAlign: 'right',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    shipmentDetailAttributeHeading: {
      ...attributeHeadingStyle,
      mb: 2
    },
    shipmentHistoryHeading: {
      ...attributeHeadingStyle,
      mb: 4
    },
    shipmentInfoRowContainer: {
      fontSize: 'sm',
      lineHeight: 6,
      '.shipment-info-row': {
        borderBottom: '0.063rem solid',
        borderColor: 'neutral.30',
        pb: 4,
        mb: 4,
        '&:last-child': {
          border: 'none'
        }
      }
    }
  }
}
