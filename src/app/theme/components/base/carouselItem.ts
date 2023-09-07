export default {
  baseStyle: {
    container: {
      '.simple-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&.white': {
          backgroundColor: 'white'
        },

        '&.grey': {
          backgroundColor: 'neutral.30'
        },

        '&.sm': {
          h: '300px'
        },

        '&.md': {
          h: '450px'
        },

        '&.lg': {
          h: '600px'
        }
      }
    }
  },
  parts: []
}
