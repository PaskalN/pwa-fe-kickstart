export default {
  variants: {
    outline: {
      backgroundColor: '#FFFFFF',
      borderColor: 'neutral.80',
      order: '1.2px solid',
      _focus: {
        borderColor: 'gold.100',
        boxShadow: 'none'
      },
      _hover: {
        borderColor: 'none'
      },
      _disabled: {
        cursor: 'not-allowed',
        border: 'none',
        backgroundColor: 'neutral.10'
      },
      _invalid: {
        borderColor: 'system_redish.100',
        boxShadow: 'none'
      }
    }
  }
}
