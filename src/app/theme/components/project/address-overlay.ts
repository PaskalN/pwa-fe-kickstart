export default {
  baseStyle: {
    container: {
      background: 'neutral.30',
      boxShadow: '0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)',
      zIndex: 1100,
      marginTop: '9.375rem',
      marginBottom: 0,
      height: 'calc(100% - 9.375rem)',
      borderRadius: 0,
      bg: 'neutral.30',
      color: 'blackProject.100'
    },
    buttonContainer: {
      marginTop: {
        base: '3.938rem',
        md: '0rem'
      },
      display: 'flex',
      flexDirection: {
        base: 'column',
        md: 'row'
      },
      position: {
        base: 'unset',
        sm: 'absolute',
        md: 'unset'
      },
      top: ['unset', 'unset', '74.563rem', 'unset'],
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      padding: '0rem',
      gap: '1rem',
      maxWidth: {
        base: '32.625rem',
        sm: '21.563rem',
        md: '29rem'
      },
      width: {
        base: '100%',
        md: '29rem'
      },
      height: '3.5rem',
      order: 1
    },
    cancelButton: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1.188rem 1.5rem',
      gap: '0.5rem',
      width: '14rem',
      height: '3.5rem',
      background: 'white',
      border: '0.075rem solid',
      borderColor: 'blackProject.100',
      flex: 'none',
      order: 0,
      flexGrow: 0
    },
    saveButton: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1.188rem 1.5rem',
      gap: '0.5rem',
      color: 'white',
      width: '14rem',
      height: '3.5rem',
      background: 'blackProject.100',
      flex: 'none',
      order: 1,
      flexGrow: 0
    },
    stack: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    form: {
      width: '100%'
    },
    title: {
      marginBottom: '2rem'
    },
    input: {
      backgroundColor: 'white'
    }
  }
}
