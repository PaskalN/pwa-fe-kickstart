const card = {
  py: 6,
  px: 4,
  backgroundColor: 'white',
  rounded: 'base',
  boxShadow: 'base'
}

const cardBordered = {
  ...card,
  py: 2,
  px: 2,
  boxShadow: 'none',
  border: '1px solid',
  borderColor: 'neutral.30'
}

const cardBorderedCheckout = {
  ...card,
  py: 6,
  px: 6,
  boxShadow: 'none',
  border: '1px solid',
  borderColor: 'neutral.30'
}

const cardNoShadow = {
  ...card,
  boxShadow: 'none'
}

const pageContainer = {
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: 32,
  alignItems: 'center'
}

const pageSegment = {
  display: 'flex',
  width: '100%',
  maxWidth: 'container.xxl'
}

const section = {}

export default {
  card,

  cardBordered,

  cardNoShadow,

  cardBorderedCheckout,

  ccIcon: {
    width: '34px',
    height: '22px'
  },

  page: {
    px: [4, 4, 6, 6, 8],
    paddingTop: [4, 4, 6, 6, 8],
    paddingBottom: 32,
    width: '100%',
    maxWidth: 'container.xxxl',
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  zoom: {
    maxWidth: 'container.xxxl',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    width: '100vw'
  },

  pageContainer,

  pageSegment,

  section
}
