import _COLOR from './product-details/color.style'
import _CTA from './product-details/cta.style'
import _FIND_IN_STORE from './product-details/find.in.store'
import _GLOBAL from './product-details/global.style'
import _IMAGE_VIEW from './product-details/image.view.style'
import _LOADING_SCREEN from './product-details/loading.screen.style'
import _MODAL from './product-details/modal.style'
import _PRICE from './product-details/price.style'
import _SIZE from './product-details/size.style'
import _SWATCH from './product-details/swatch.style'
import _TAG from './product-details/tag.style'
import _TITLE from './product-details/title.style'
import _WISHLIST from './product-details/wishlist.style'

export default {
  baseStyle: {
    ..._GLOBAL,

    ..._TAG,

    ..._SWATCH,

    ..._CTA,

    ..._IMAGE_VIEW,

    ..._PRICE,

    ..._COLOR,

    ..._SIZE,

    ..._LOADING_SCREEN,

    ..._WISHLIST,

    ..._TITLE,

    ..._MODAL,

    ..._FIND_IN_STORE,

    productInformation: {
      width: '18rem',
      height: '6rem'
    },
    productInformationMask: {
      width: '18rem',
      height: '6rem',
      maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 15%,rgba(0, 0, 0, 0.5) 25%, rgba(0,0,0,0) 80%)'
    }
  },
  defaultProps: {},
  parts: ['segment']
}
