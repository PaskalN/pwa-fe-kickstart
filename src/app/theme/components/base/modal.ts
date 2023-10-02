// overlay
// dialogContainer
// dialog
// header
// closeButton
// body
// footer

const BASE = {
  dialogContainer: {
    h: '100vh !important',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    boxShadow: 'none'
  },
  dialog: {
    h: '100%',
    w: '100%',
    maxWidth: '100%',
    background: 'transparent',
    border: 'none',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    borderRadius: '0px',
    overflow: 'hidden',
    marginLeft: '0px',
    marginRight: '0px',
    marginTop: '0px',
    marginBottom: '0px',
    boxShadow: 'none'
  },

  body: {
    paddingTop: 's8',
    paddingBottom: 's8',
    paddingInlineStart: 's8',
    paddingInlineEnd: 's8',
    h: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const NOTIFY_VARIANT = {
  dialog: {
    background: 'cognac.50',
    border: 'none',
    paddingTop: '72px',
    paddingBottom: '24px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    borderRadius: '1rem',
    overflow: 'hidden'
  },

  body: {
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem'
  }
}

const ZOOM_VARIANT = {
  // dialog = _content
  dialog: {
    border: 'none',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    borderRadius: '0px',
    boxShadow: 'none',
    background: 'transparent',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto'
  },

  // Body
  body: {
    width: 'auto',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    boxShadow: 'none',
    background: 'transparent',
    backgroundColor: 'transparent',
    borderRadius: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const ZOOM_VARIANT_FULL = {
  dialogContainer: {
    backgroundColor: 'white'
  },
  dialog: {
    border: 'none',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    borderRadius: '0px',
    boxShadow: 'none',
    background: 'transparent',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    height: '100vh',
    maxWidth: 'auto',
    maxHeight: '100vh',
    margin: '0',
    padding: '0'
  },

  // Body
  body: {
    width: '100%',
    height: '100%',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    boxShadow: 'none',
    background: 'transparent',
    backgroundColor: 'transparent',
    borderRadius: '0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}

const ADD_TO_CART = {
  dialog: {
    border: 'none',
    paddingTop: '1.5rem',
    paddingBottom: '1rem',
    paddingInlineStart: '0px',
    paddingInlineEnd: '0px',
    borderRadius: '1rem',
    overflow: 'hidden'
  },

  body: {
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingInlineStart: '1rem',
    paddingInlineEnd: '1rem'
  }
}

// overlay
// dialogContainer
// dialog
// header
// closeButton
// body
// footer

// dialogContainer
//   dialog - chakra-modal

const PRODUCT_INFORMATION = {
  dialogContainer: {
    overflow: 'hidden'
  },
  dialog: {
    width: '100%',
    maxWidth: '87.5rem',
    height: 'auto',
    maxHeight: '90vh',
    minHeight: '37.5rem',
    background: 'neutral.30',
    borderRadius: '0',
    overflow: 'hidden'
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3.75rem 1.375rem 2rem 1.375rem',
    overflow: 'hidden',
    flexWrap: 'no-wrap',
    justifyContent: 'center'
  }
}

const SIZE_GUIDE = {
  dialogContainer: {
    overflow: 'hidden'
  },
  dialog: {
    width: '100%',
    maxWidth: '87.5rem',
    height: 'auto',
    maxHeight: '90vh',
    minHeight: '37.5rem',
    background: 'neutral.30',
    borderRadius: '0',
    overflow: 'hidden'
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3.75rem 0 2rem 0',
    overflow: 'hidden',
    flexWrap: 'no-wrap',
    justifyContent: 'center'
  }
}

const CONTACT_US = {
  dialogContainer: {
    overflow: 'hidden'
  },
  dialog: {
    width: '100%',
    maxWidth: '87.5rem',
    height: 'auto',
    maxHeight: '90vh',
    minHeight: '37.5rem',
    background: 'gold.40',
    borderRadius: '0',
    overflow: 'hidden'
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '3.75rem 1.375rem 2rem 1.375rem',
    overflow: 'hidden',
    flexWrap: 'no-wrap',
    justifyContent: 'center'
  }
}

const SHIPPING_AND_RETURNS = {
  dialogContainer: {
    ...BASE.dialogContainer
  },

  dialog: {
    ...BASE.dialog
  },

  body: {
    ...BASE.body
  }
}

const GLOBAL_MODAL = {
  dialogContainer: {
    ...BASE.dialogContainer
  },

  dialog: {
    ...BASE.dialog
  },

  body: {
    ...BASE.body
  }
}

export default {
  baseStyle: {
    dialog: { borderRadius: 'base' }
  },
  variants: {
    notify: {
      ...NOTIFY_VARIANT
    },
    zoom: {
      ...ZOOM_VARIANT
    },
    zoom_full: {
      ...ZOOM_VARIANT_FULL
    },
    addToCart: {
      ...ADD_TO_CART
    },
    productInformation: {
      ...PRODUCT_INFORMATION
    },
    contactUs: {
      ...CONTACT_US
    },
    sizeGuide: {
      ...SIZE_GUIDE
    },
    shippingAndReturns: {
      ...SHIPPING_AND_RETURNS
    },
    globalModal: {
      ...GLOBAL_MODAL
    }
  }
}
