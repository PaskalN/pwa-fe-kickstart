interface WindowLocation {
  pathname: string
  search: string
}

declare namespace Project {
  namespace Utils {
    type ObjectKeyString = { [key: string]: string }
    type ObjectKeyUnknown = { [key: string]: unknown }
    type ObjectKeyNumber = { [key: string]: number }
    interface ObjectKeyType<T> {
      [key: string]: T
    }
  }

  namespace SDK {
    interface PaymentInstruments extends Omit<Project.SDK.OrderPaymentInstrument, 'paymentCard'> {
      paymentCard: PaymentCard & {
        additionalMessage: string
      }
    }
    // Custom
    type SelectedVariationAttribute = {
      value?: string
      name?: string
    }

    // Extensible
    type ProductSearchHit<T extends Utils.ObjectKeyUnknown = {}> = T &
      CommerceSDKRef.ProductSearchHit &
      Extension.ProductSearchHit.Custom
    type Address<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.Address
    type Basket<T extends Utils.ObjectKeyUnknown = {}> = T &
      CommerceSDKRef.Basket & {
        expiredBasketRecreateAttempts?: number
      }
    type Category<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.Category
    type Customer<T extends Utils.ObjectKeyUnknown = {}> = T &
      CommerceSDKRef.Customer & {
        login: (_credentials?: { email: string; password: string }) => Promise<Project.SDK.Customer>
        logout: () => Promise<void>
      }
    type CustomerPaymentInstrument<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.CustomerPaymentInstrument
    type CustomerPaymentInstrumentRequest<T extends Utils.ObjectKeyUnknown = {}> = T &
      CommerceSDKRef.CustomerPaymentInstrumentRequest
    type Order<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.Order
    type Product<T extends Utils.ObjectKeyUnknown = {}> = T & {
      variationAttributes?: Array<VariationAttribute>
    } & CommerceSDKRef.Product &
      Extension.Product.Custom
    type Variant<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.Variant

    type OrderPaymentInstrument<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.OrderPaymentInstrument
    type PaymentMethodResult<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.PaymentMethodResult
    type PaymentMethod<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.PaymentMethod
    type ShippingMethodResult<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.ShippingMethodResult
    type ShopperBaskets<T extends Utils.ObjectKeyUnknown = {}> = T & CommerceSDKRef.ShopperBaskets
    type VariationAttribute<T extends Utils.ObjectKeyUnknown = {}> = T &
      CommerceSDKRef.VariationAttribute & {
        selectedValue?: SelectedVariationAttribute
      }
    // Inherit
    type ImageGroup = CommerceSDKRef.ImageGroup
    type ImageGroups = CommerceSDKRef.ImageGroup[]
    type RequireParametersUnlessAllAreOptional = CommerceSDKRef.RequireParametersUnlessAllAreOptional
    type ResetPasswordToken = CommerceSDKRef.ResetPasswordToken

    type VariationAttributeValue$0 = CommerceSDKRef.VariationAttributeValue$0
    type VariationAttributeValue = CommerceSDKRef.VariationAttributeValue
    type ImageGroup = CommerceSDKRef.ImageGroup
    type ImageGroups = CommerceSDKRef.ImageGroup[]
    type Image = CommerceSDKRef.Image
    type PathRecord = CommerceSDKRef.PathRecord
    type ParentCategoryTree = Array<PathRecord>
    type PathRecord = CommerceSDKRef.PathRecord
    type PaymentInstrument = CommerceSDKRef.PaymentInstrument
    type OrderAddress = CommerceSDKRef.OrderAddress
    type ShippingItem = CommerceSDKRef.ShippingItem
    type ProductItem = CommerceSDKRef.ProductItem
    type Shipment = CommerceSDKRef.Shipment
    type OrderPaymentInstrumentRequest = CommerceSDKRef.OrderPaymentInstrumentRequest
    type PaymentCard = CommerceSDKRef.PaymentCard
    type CustomerInfo = CommerceSDKRef.CustomerInfo
    type PriceAdjustment = CommerceSDKRef.PriceAdjustment
    type PromotionResult = CommerceSDKRef.PromotionResult
    type Promotion = CommerceSDKRef.Promotion
    type ProductListShippingAddress = CommerceSDKRef.ProductListShippingAddress
    type ProductResult = CommerceSDKRef.ProductResult

    type CustomerProductList = CommerceSDKRef.CustomerProductList

    type BonusDiscountLineItem = CommerceSDKRef.BonusDiscountLineItem & {
      c_bonus_products_images?: BonusDiscountLineItemImage[]
    }

    type BonusDiscountLineItemImage = {
      productId: string
      images: Record<string, string>[]
    }

    type ApplicableShippingMethod = {
      id: string
      name: string
      description: string
      price: number
      shippingPromotions: ShippingPromotion[]
    }

    type ShippingMethod = {
      applicableShippingMethods: ApplicableShippingMethod[]
      id: string
      defaultShippingMethodId: string
      name: string
      description: string
    }

    type MarketingInterstitial = {
      name: string
      gapInRows: number
      contentId: string
    }

    type ShippingPromotion = CommerceSDKRef.ShippingPromotion

    type Store = {
      id: string
      name: string
      storeHours: string
      address1: string
      address2: string
      city: string
      postalCode: string
      stateCode: string
      countryCode: string
      country: string
      longitude: number
      latitude: number
      phone: string
      countryFullName: string
      isPreferred: boolean
      c_isPickUpInStore?: boolean
      c_availability: 'store' | 'warehouse' | 'none'
    }

    type StoreResult = {
      count: number
      data: Array<Store>
      stores?: Array<Store>
      next?: string
      total: number
    }

    type PlaceResult = {
      lat: number
      lng: number
      formatted_address: string
    }

    type SortedStoreObj = {
      [key: string]: {
        countryFullName: string
        stores: Store[]
        storesByCityObj: StoresByCityObj
      }
    }

    type StoresByCityObj = {
      [key: string]: Store[]
    }

    type RETURN_SHIPPING_STATUS_TAG =
      | 'InfoReceived'
      | 'InTransit'
      | 'OutForDelivery'
      | 'Delivered'
      | 'Refunded'
      | 'ShipmentLabelGenerated'

    type TrackingData = {
      id: string
      trackingNumber: string
      slug: string
      active: boolean
      customerName?: null
      deliveryTime: number
      expectedDelivery?: null
      tag: RETURN_SHIPPING_STATUS_TAG
      checkpoints: Checkpoint[]
      orderNumber: number
      refundTotal?: number
      refundDate?: string
      returnShipmentLabelURL?: string
    }

    type Checkpoint = {
      checkpointTime: string
      message: string
      slug: string
      location?: null
    }

    type ProductItem<T extends Utils.ObjectKeyUnknown> = T & CommerceSDKRef.ProductItem

    interface ContentFolder {
      folders?: ContentFolder[]
      id: string
      name: string
      parentFolderId?: string
    }

    interface ContentSearchResult {
      hits: ContentHit[]
      next?: string
      total: number
    }

    interface ContentHit {
      _type: string
      id: string
      name: string
      c_ampCA_ContentItemHash: string
      c_ampCA_ContentItemID: string
      c_ampCA_ContentItemTimestamp: string
      c_ampCA_ContentRaw: string
      c_ampCA_ContentTransformed: string
      c_ampCA_TemplateID: string
      c_body: string
    }

    type RecommendationStyleType = 'A' | 'B' | 'C' | 'D' | 'E'
  }

  namespace SimplePage {
    interface GetProps {}
  }

  namespace Adyen {
    type CardsTypes = 'visa' | 'mc' | 'discover' | 'amex' | 'diners'
    type Context = {
      authResponse: { action?: PaymentAction; paymentMethod?: { type?: string } } | null
      action: PaymentAction | null
    }
  }
  interface Component {
    getTemplateName: () => void
    getProps: () => unknown
  }
  namespace Page {
    interface Response {
      set: (_a: string, _b: string) => void
    }

    interface GetPropsFunctionArgs<T> {
      res: Response
      params: T
      location: { search: string }
      api: CommerceSDKRef.CommerceAPI
    }

    type ShouldGetProps = (_prps: { previousLocation: WindowLocation; location: WindowLocation }) => boolean
    type GetPropsFunction<GetPropsReqParams> = (
      _param: Page.GetPropsFunctionArgs<GetPropsReqParams>
    ) => Promise<unknown> | never

    interface Component<GetPropsReqParams, TPageComponentPropsProperties> {
      getTemplateName: () => void
      shouldGetProps: ShouldGetProps
      getProps: GetPropsFunction<GetPropsReqParams>
      (_props: TPageComponentPropsProperties): void
    }

    type getPaymentMethodsForBasket<T extends Utils.ObjectKeyUnknown = {}> = T &
      CommerceSDKRef.getPaymentMethodsForBasket
  }

  namespace Apple {
    type ApplePayShippingMethod = {
      label: string
      detail: string
      amount: string
      identifier: string
    }

    interface ApplePayHandler<RES, REJ, E> {
      (_resolve: (_res: RES) => void, _reject: (_rej: REJ) => void, _event: E): void
    }
  }

  namespace Config {
    interface Definition {
      [x: string]: unknown
      dw: DW
      gtm: {
        gtmId: string
        gtmScriptNonce: string
        currencyCode: string
        gtmSha256Nonce: string
        region: string
        taxationPolicy: string
      }
      app: {
        rakutenMerchantId: string
        fetchPageContent: boolean
        tenantId: string
        addressInstance: string
        oneTrustAppId: string
        address: {
          addressLoqate: string
          countryCode: string
        }
        commerceAPI: {
          parameters: {
            clientId: string
            organizationId: string
            shortCode: string
            siteId: string
          }
          proxyPath: string
        }
        defaultSite: string
        instanceType: string
        einsteinAPI: unknown
        url: {
          locale: string
          showDefaults: boolean
          storefrontUrl: string
        }
        sites: Project.MultiSite.Site[]
        returnOrderCountryBlacklist: string[]
      }
      ssrParameters: {
        proxyConfigs: { host: string; path: string }[]
        ssrFunctionNodeVersion: string
      }
    }
    interface Env {
      taxationPolicy: string
      mrUser: string
      mrKey: string
      mrProjectName: string
      mrBuildNamePrefix: string
      mrTarget: string
      storefrontUrl: string
      storybookPassword: string
      chromaticBaseHost: string
      chromaticBranchName: string
      chromaticProjectToken: string
      dwssoBasicAuthKey: string
      gtmId: string
      gtmScriptNonce: string
      rakutenMerchantId: string
      region: string
      locales: string[]
      defaultLocale: string
      currencyCodes: string[]
      defaultCurrencyCode: string
      gtmSha256Nonce: string
      defaultSite: string
      addressLoqate: string
      enableBasicAuth: boolean
      authUsername: string
      authPassword: string
      oneTrustAppId: string
      fetchPageContent?: boolean
      returnOrderCountryBlacklist: string[]
    }

    interface DW {
      instance: string
      shortcode: string
      organizationId: string
      site: string
      einsteinId: string
      tenantId: string
      slasId: string
      defaultLocale: string
      instanceType: string
    }

    interface DW_SSR {
      bm_password: string
      client_password: string

      bm_instance: string
      bm_user: string
      basicToken: string
      client_id: string
      organizationId: string
      siteId: string
      shortCode: string
      tenantId: string
    }
  }

  namespace Extenstion {
    namespace Product {
      type ExtCustomAttributes = {
        c_custom_attributes: {
          refinementColor?: string
          titleTag?: string
          fitInfo?: string
          isNew?: boolean
          titleTagEnabled?: boolean
          productBadge?: boolean
          lowStockThreshold?: number
          lowUltraStockThreshold?: number
          fitInformationImageIDs?: Array<string>
          details: {
            material: {
              show: boolean
              isIngredient: boolean
              ingredientMessage: string
              bullets: Array<string>
            }
            careInstructions: {
              show: boolean
              bullets: Array<string>
            }
            productDetails: {
              productID: string
              show: boolean
              bullets: Array<string>
              fitInfo: string
              hasFitInfo: boolean
            }
          }
        }
      }

      type ExtSelectableAttributes = {
        c_selectable_attributes: CSelectableAttribute
      }

      type ExtVariationStockLevels = {
        c_variants_stock_levels: ProductVariationsStockLevel
      }

      type GlobalExtend = {
        c_extend: ProductGlobalExtend
      }

      interface ProductVariationStockLevel {
        inStock: boolean
        available: boolean
        stockLevel: number
      }

      interface ProductVariationsStockLevel {
        [key: string]: _ProductVariationStockLevel
      }

      interface ProductGlobalExtend {
        masterProductId: string
        id: string
        priceInfo: CProductPriceInfo
      }

      // Custom Response Attributes
      interface CProductPriceInfo {
        originalPrice: CProductPrice
        salePrice: CProductPrice
        promotionPrice?: CProductPromotionPrice
      }

      interface CProductPrice {
        value: number | bigint
        currency: string
        pricebook: string
      }

      interface CProductPromotionPrice {
        value: number | bigint
        currency: string
        promoDetails: {
          id: string
          name: string
          callOut: string | null
          details: string | null
          image: string | null
        }
      }

      interface CSelectableAttribute {
        [k: string]: {
          [k: string]: ObjectKeyType<boolean>
        }
      }
    }
  }

  namespace MultiSite {
    type BuildUrlFn = (_pathname: string, _siteRef?: string, _localeRef?: string) => string
    interface Definition {
      buildUrl: BuildUrlFn
      locale: Locale
      originalFn: BuildUrlFn
      site: Site
    }
    interface Locale {
      alias?: string
      id: string
      preferredCurrency: string
    }
    interface Site {
      alias?: string
      id: string
      l10n: {
        supportedCurrencies: string[]
        defaultCurrency: string
        defaultLocale: string
        supportedLocales: Locale[]
      }
    }
  }

  namespace SAP {
    type BillingAddress = {
      firstName: string
      lastName: string
      addressLine1: string
      addressLine2: null
      houseNumber: null
      city: string
      state: string
      postCode: string
      country: string
      region: null
      district: null
      phoneNumber: string
    }

    type ShippingAddress = {
      firstName: string
      lastName: string
      addressLine1: string
      addressLine2: null
      houseNumber: null
      isCompanyAddress: null
      companyName: null
      city: string
      state: string
      postCode: string
      country: string
      region: null
      district: null
      phoneNumber: string
      altPhoneNumber: null
      email: string
    }

    type OrderSummary = {
      orderSubTotal: string
      promotionName: null
      promotionDiscount: string
      shippingPrice: string
      totalTax: string
      totalDuty: string
      orderTotal: string
    }

    type Order = {
      orderPlacedDate: string
      lineItem: Array<LineItem>
      shippingAddress: Array<ShippingAddress>
      billingAddress: Array<BillingAddress>
      giftWrapping: Array<{
        wrappingName: null
        wrappingprice: string
        giftMessage: null
      }>
      orderStatus: string
      orderSummary: Array<OrderSummary>
      paymentDetails: Array<{
        paymentMethodName: string
        amount: string
        currency: string
        cardType: string
        cardExpiryDate: string
        cardLast4Digits: string
        refundDate: string
      }>
      creationDate: string
      status: Array<Array<LineItem>>
      orderNumber: string
      statusheading: [
        'Placed',
        'Processing',
        'Shipped',
        'Ready for Pick Up',
        'Pick Up Confirmed',
        'Delivered',
        'Return Processing',
        'Refund confirmed',
        'Cancelled',
        'Returned'
      ]
      isReturnsCenterEnabled: boolean
    }

    type ProductStatus = 'Shipping Request' | 'Shipped' | 'Return request' | 'Refund confirm' | 'Order cancel'

    type LineItem = {
      productId: string
      productName: string
      productColor: string
      productSize: string
      productPrice: string
      quantity: string
      shippingMethod: string
      shippingMethodName: string
      expectedShippingDate: null
      shipmentStatus: ProductStatus
      shipmentTrackingCode: string | null
      shipmentDate: string | null
      shipmentTrackingURL: string | null
      refundStatus: ProductStatus
      refundTotal: string | null
      returnStatus: ProductStatus
      returnOrderNumber: null
      returnShipmentTrackingNumber: null
      returnShipmentCarrierId: null
    }

    type ErrorResponse = {
      errorDescription: string
    }

    type OrderDetailsResponse = {
      action: string
      locale: string
      message: string
      queryString: string
      response: Order | ErrorResponse
      success: boolean
    }
  }
}
