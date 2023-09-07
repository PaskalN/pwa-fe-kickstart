export default {
  baseStyle: {
    heading: {
      textAlign: 'center',
      fontSize: 'xl',
      lineHeight: 7,
      textTransform: 'uppercase',
      letterSpacing: '-0.031rem',
      mb: { base: 6, sm: 8 }
    },
    promotionCard: {
      borderRadius: 4,
      border: '0.063rem solid',
      borderColor: 'neutral.30',
      py: 6,
      px: 3,
      mb: { base: 5, md: 0 }
    },
    promotionCardTitle: {
      fontWeight: 700,
      fontSize: 'md',
      lineHeight: 7,
      mb: 2
    },
    noPromotionsTextContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxW: '84.5rem',
      mx: 'auto',
      h: { base: '7.75rem', md: '10.75rem' },
      bg: 'gray.50',
      borderRadius: 4,
      p: 5
    },
    noPromotionsText: {
      fontSize: 'sm',
      lineHeight: 5,
      letterSpacing: '0.01em',
      textTransform: 'uppercase'
    }
  }
}
