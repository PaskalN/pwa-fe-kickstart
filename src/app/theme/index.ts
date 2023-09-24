import { extendTheme } from '@chakra-ui/react'

import { classGenerator } from './classStyles/generators'

const pixelToRem = classGenerator({
  from: 0,
  to: 100,
  key: 's${INDEX}',
  writer: index => `${index / 16}rem`
})
// Foundational style overrides

// Base component style overrides
import Accordion from './components/base/accordion'
import Alert from './components/base/alert'
import Badge from './components/base/badge'
import Button from './components/base/button'
import Card from './components/base/card'
import CarouselControls from './components/base/carouselControls'
import CarouselItem from './components/base/carouselItem'
import Checkbox from './components/base/checkbox'
import Container from './components/base/container'
import Drawer from './components/base/drawer'
import Dropdown from './components/base/dropdown'
import Form from './components/base/form'
import FormError from './components/base/form-error'
import FormLabel from './components/base/formLabel'
import Heading from './components/base/heading'

import Icon from './components/base/icon'
import Input from './components/base/input'
import Link from './components/base/link'
import List from './components/base/list'
import Modal from './components/base/modal'
import Popover from './components/base/popover'
import Progress from './components/base/progress'
import Radio from './components/base/radio'
import Select from './components/base/select'
import Skeleton from './components/base/skeleton'
import Tag from './components/base/tag'
import Text from './components/base/text'
import Textarea from './components/base/textarea'
import TinySlider from './components/base/tinyslider'
import Tooltip from './components/base/tooltip'

// Project Component style overrides
import App from './components/project/_app'
import AccountPromotion from './components/project/account-promotion'
import AddToCartMobileDrawer from './components/project/add-to-cart-mobile-drawer'
import AddressOverlay from './components/project/address-overlay'
import Breadcrumb from './components/project/breadcrumb'
import BreadcrumbPDP from './components/project/breadcrumb-pdp'
import CardPanel from './components/project/card-panel'

import CategoryLandingPage from './components/project/category-landing-page'
import CategoryLinks from './components/project/category-links'
import CheckoutFooter from './components/project/checkout-footer'
import CheckoutSummaryCartItem from './components/project/checkout-summary-cart-item'
import ContactUsPopUp from './components/project/contact-us-pop-up'
import DrawerCard from './components/project/drawer-card'
import DrawerMenu from './components/project/drawer-menu'
import EditorialPage from './components/project/edittorial-page'
import Footer from './components/project/footer'
import Header from './components/project/header'
import HomePage from './components/project/home-page'
import ImageGallery from './components/project/image-gallery'
import ImageZoom from './components/project/image-zoom'
import LinksList from './components/project/links-list'
import ListComponent from './components/project/list-component'
import ListMenu from './components/project/list-menu'
import LoadingLayout from './components/project/loading-layout'
import LocaleSelector from './components/project/locale-selector'
import ModalComponents from './components/project/modal-components'
import NestedAccordion from './components/project/nested-accordion'
import NotificationPopUp from './components/project/notification-pop-up'
import OfflineBanner from './components/project/offline-banner'
import OrderStatus from './components/project/order-status'
import Pagination from './components/project/pagination'
import ProductTile from './components/project/product-tile'
import ProductTileCard from './components/project/product-tile-card'
import ReturnPortal from './components/project/return-portal'
import ServiceCard from './components/project/service-card'
import SocialIcons from './components/project/social-icons'
import StoreDetails from './components/project/store-details'
import StoreLocator from './components/project/store-locator'
import SwatchGroup from './components/project/swatch-group'
import breakpoints from './foundations/breakpoints'
import colors from './foundations/colors'
import fontSizes from './foundations/fontSizes'
import fonts from './foundations/fonts'
import gradients from './foundations/gradients'
import layerStyles from './foundations/layerStyles'
import lineHeights from './foundations/lineHeights'
import shadows from './foundations/shadows'
import sizes from './foundations/sizes'
import space from './foundations/space'
import styles from './foundations/styles'
import * as HomePageStyles from './pages/home.page'
// Page Frame
import ProductDetailsPage from './pages/product-detail'
// Please refer to the Chakra-Ui theme customization docs found
// here https://chakra-ui.com/docs/theming/customize-theme to learn
// more about extending and overriding themes for your project.

// Spaces
const extendProps = {
  styles,
  layerStyles,
  colors,
  sizes: { ...sizes, ...pixelToRem },
  space: { ...space, ...pixelToRem },
  gradients,
  shadows,
  fonts,
  fontSizes: { ...fontSizes, ...pixelToRem },
  breakpoints,
  lineHeights: { ...lineHeights, ...pixelToRem },
  radii: pixelToRem,
  borderWidths: pixelToRem,
  components: {
    // base components
    Accordion,
    Alert,
    Badge,
    Button,
    Card,
    Checkbox,
    Container,
    Drawer,
    Form,
    FormError,
    FormLabel,
    Heading,
    List,
    Icon,
    Input,
    Modal,
    Popover,
    Radio,
    Select,
    Skeleton,
    Textarea,
    Text,
    Tooltip,
    Tag,
    Progress,
    Dropdown,
    TinySlider,
    CarouselControls,
    CarouselItem,
    ListComponent,
    CardPanel,

    App,
    AccountPromotion,
    AddressOverlay,
    Breadcrumb,
    Header,
    ...HomePageStyles,
    Footer,
    CheckoutFooter,
    ContactUsPopUp,
    LinksList,
    ListMenu,
    DrawerMenu,
    DrawerCard,
    NestedAccordion,
    LocaleSelector,
    OfflineBanner,
    SocialIcons,
    Pagination,
    ProductTile,
    ServiceCard,
    ProductTileCard,
    SwatchGroup,
    ImageGallery,
    CheckoutSummaryCartItem,
    NotificationPopUp,
    ImageZoom,
    BreadcrumbPDP,
    StoreDetails,
    StoreLocator,
    OrderStatus,
    ReturnPortal,
    LoadingLayout,
    ModalComponents,
    EditorialPage,
    CategoryLandingPage,
    HomePage,
    CategoryLinks,
    AddToCartMobileDrawer,

    // Frames
    ProductDetailsPage
  }
}

const theme = extendTheme(extendProps)

// Overrides

// Componenets Overrides
theme.components.Button = Button
theme.components.Link = Link
theme.components.Dropdown = Dropdown
theme.components.TinySlider = TinySlider
theme.components.CarouselControls = CarouselControls
theme.components.CarouselItem = CarouselItem
theme.components.NotificationPopUp = NotificationPopUp
theme.components.ImageZoom = ImageZoom
theme.components.BreadcrumbPDP = BreadcrumbPDP
theme.components.ModalComponents = ModalComponents
theme.components.List = List

console.log(theme)

export default theme
