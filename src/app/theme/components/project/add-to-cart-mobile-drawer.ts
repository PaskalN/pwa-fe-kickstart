export default {
  baseStyle: {
    container: {
      '.header': {
        display: 'flex',
        justifyContent: 'space-between'
      },
      '.modal-title': {
        fontSize: 'sm',
        fontWeight: 400,
        lineHeight: 5,
        letterSpacing: '0.009rem'
      },
      '.no-of-items': {
        fontSize: 'xs',
        lineHeight: 4,
        fontWeight: 400
      },
      '.chakra-modal__body': {
        pt: 0
      },
      '.button-group-container': {
        pt: 4,
        '&::before': {
          content: '""',
          height: '0.063rem',
          width: '100vw',
          background: 'neutral.30',
          position: 'absolute',
          top: 0,
          left: -4
        }
      }
    }
  }
}
