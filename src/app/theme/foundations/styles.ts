export default {
  global: {
    'html, body': {
      backgroundColor: 'white',
      color: 'dark',
      fontSize: '16px'
    },
    body: {
      minHeight: '100vh',
      '&.no-scroll': {
        overflowY: 'hidden'
        // '&::-webkit-scrollbar': {
        //   // w: '0'
        //   opacity: '0',
        //   zIndex: 0,
        //   visibility: 'hidden'
        // }
      }
    },
    '.react-target': {
      display: 'flex',
      minHeight: '100vh'
    }
  }
}
