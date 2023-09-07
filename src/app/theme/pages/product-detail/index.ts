import colorStyles from './color.style'
import ctaStyles from './cta.style'
import globalStyles from './global.style'
import imageViewStyles from './image-view.style'
import loadingScreenStyles from './loading.screen.style'
import modalStyles from './modal.style'
import priceStyles from './price.style'
import sizeStyles from './size.style'
import swatchStyles from './swatch.style'
import tagStyles from './tag.style'
import titleStyles from './title.style'
import wishlistStyles from './wishlist.style'

export default {
  baseStyle: {
    ...colorStyles,
    ...ctaStyles,
    ...globalStyles,
    ...imageViewStyles,
    ...loadingScreenStyles,
    ...modalStyles,
    ...priceStyles,
    ...sizeStyles,
    ...swatchStyles,
    ...tagStyles,
    ...titleStyles,
    ...wishlistStyles,
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
