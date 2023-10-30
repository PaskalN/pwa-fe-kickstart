declare namespace Amplience {
  namespace Content {
    type AmplienceContent = Array<
      AmplienceContentTemplate<
        {
          numberWatermarkEnabled?: boolean
          ratio?: string
          alignment?: string
          backgroundColor?: string
          title?: string
          titleStyle?: string
          captionHtmlStyle?: string
          description?: string
        },
        AmplienceTemplateCarousel
      >
    >

    type AmplienceContentTemplate<T, V> = T & {
      '@id'?: string
      '@type'?: string
      _title?: string
      currentLocale?: string
      templateCarousel?: Array<V>
    }

    type AmplienceTemplateCarousel = {
      '@id'?: string
      '@type'?: string
      _title?: string
      autoplay: boolean
      muted?: boolean
      loop?: boolean
      imageAltText?: string
      captionHtml?: string
      video?: {
        '@id': string
        '@type': string
        mediaType: string
        name: string
        endpoint: string
        defaultHost: string
      }
    }
  }
}
