const SWATCH_ACTIVE = {
  _active: {
    borderColor: 'gold.130'
  }
}

const SWATCH_HOVER = {
  _hover: {
    boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2)'
  }
}

const SWATCH_SELECTED = {
  borderColor: 'gold.100'
}

const SWATCH_BASE = {
  transition: '0.3s',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  height: '3.5rem',
  border: '0.075rem solid',
  borderColor: 'transparent'
}

const SWATCH_INNER_TEXT = {
  color: 'dark',
  fontSize: '0.875rem',
  lineHeight: '1rem',
  fontWeight: '571',
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export default {
  swatchContainer: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'nowrap',
    justifyContent: 'center'
  },

  colorSwatch: {
    ...SWATCH_BASE,
    width: '3.5rem',
    img: {
      width: 'full',
      height: 'full'
    },
    '&.not-orderable': {
      img: {
        opacity: '0.5'
      },
      '&:not(.selected)': {
        ...SWATCH_HOVER
      }
    },
    '&.selected': {
      ...SWATCH_SELECTED
    },
    '&.available': {
      ...SWATCH_HOVER,
      ...SWATCH_ACTIVE
    }
  },

  sizeSwatch: {
    ...SWATCH_BASE,
    minWidth: '3.5rem',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'fonts.mcm.favorit',

    a: {
      ...SWATCH_INNER_TEXT
    },

    span: {
      ...SWATCH_INNER_TEXT
    },

    '&.not-orderable': {
      a: {
        textDecoration: 'line-through',
        opacity: '0.6'
      },
      span: {
        textDecoration: 'line-through',
        opacity: '0.6'
      },
      '&:not(.selected)': {
        ...SWATCH_HOVER
      }
    },
    '&.selected': {
      ...SWATCH_SELECTED
    },
    '&.available': {
      ...SWATCH_HOVER,
      ...SWATCH_ACTIVE
    }
  },
  swatchWrapper: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid',
    borderColor: 'transparent',
    transition: '0.3s',
    borderRadius: '0.5rem',
    padding: '0.625rem 0',
    marginLeft: {
      base: '1.25rem',
      sm: '0rem'
    },
    marginRight: {
      base: '1.25rem',
      sm: '0rem'
    }
  },

  swatchWrapperTopOffset: {
    marginTop: '0.625rem'
  },

  swatchWrapperBottomOffset: {
    marginBottom: '0.625rem'
  }
}
