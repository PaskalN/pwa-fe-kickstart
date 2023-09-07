const _COMMON = {
  color: 'neutral.100',
  fontFamily: 'fonts.mcm.variable',
  fontWeight: 'bold',
  fontSize: '0.75rem',
  lineHeight: '1rem',
  _hover: {
    color: 'neutral.100'
  },
  _focus: {
    color: 'neutral.100'
  },
  _visited: {
    color: 'neutral.100'
  }
}

const _COMMON_MOBILE = {
  color: 'dark',
  fontFamily: 'fonts.mcm.variable',
  fontWeight: 'bold',
  fontSize: '0.75rem',
  lineHeight: '1.5rem',
  _hover: {
    color: 'dark'
  },
  _focus: {
    color: 'dark'
  },
  _visited: {
    color: 'dark'
  }
}

export default {
  baseStyle: {
    container: {
      a: {
        ..._COMMON
      },
      span: {
        ..._COMMON,
        marginInlineStart: '0 25rem !important',
        marginInlineEnd: '0 25rem !important'
      }
    },
    containerMobile: {
      a: {
        ..._COMMON_MOBILE
      },
      span: {
        ..._COMMON_MOBILE,
        marginInlineStart: '0 25rem !important',
        marginInlineEnd: '0 25rem !important'
      }
    },
    inImage: {
      position: 'absolute',
      top: '1.75rem',
      left: '1.75rem',
      zIndex: 10
    }
  }
}
