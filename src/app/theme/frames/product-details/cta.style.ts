export default {
  ctaContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: { base: '100%', lg: '27.125rem' },
    width: '100%'
  },

  ctaButtons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: { base: 4, lg: 5 },
    alignItems: 'center',
    width: '100%',

    button: {
      width: '100%',
      fontWeight: 'bold'
    },

    '&.inactive': {
      marginBottom: '0'
    }
  },

  ctaButtonsSticky: {
    position: 'fixed',
    bottom: '-100%',
    left: '0',
    zIndex: 100,

    display: 'flex',
    alignItems: 'center',
    width: '100%',

    transition: '.5s',

    '&.visible': {
      bottom: '0%'
    },

    button: {
      width: '100%'
    }
  },

  ctaStickyText: {
    fontFamily: 'fonts.mcm.favorit',
    fontSize: '0.85rem',
    lineHeight: '1rem',
    color: 'dark',
    padding: '2px 0'
  },

  ctaStickyTextAlert: {
    color: 'system_redish.100'
  }
}
