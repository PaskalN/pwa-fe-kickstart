export const getVideoSourceLinks = (defaultHost: string, name: string, endpoint: string): Array<string> => {
  const srcs: Array<string> = []

  srcs[0] = `https://${defaultHost}/v/${endpoint}/${name}/webm_720p?protocol=https`
  srcs[1] = `https://${defaultHost}/v/${endpoint}/${name}/webm_480p?protocol=https`
  srcs[2] = `https://${defaultHost}/v/${endpoint}/${name}/webm_240p?protocol=https`
  srcs[3] = `https://${defaultHost}/v/${endpoint}/${name}/mp4_720p?protocol=https`
  srcs[4] = `https://${defaultHost}/v/${endpoint}/${name}/mp4_480p?protocol=https`
  srcs[5] = `https://${defaultHost}/v/${endpoint}/${name}/mp4_240p?protocol=https`

  return srcs
}

export const getVideoImage = (defaultHost: string, name: string, endpoint: string): string => {
  return `https://${defaultHost}/v/${endpoint}/${name}?w=1152`
}

export type ParseTemplateCarouselType = {
  caption: string
  videoImage: {
    src: string
    alt: string
    title: string
  }
  source: Array<string>
  settings: {
    autoplay: boolean
    loop: boolean
    muted: boolean
  } & Record<string, string | boolean | number>
}

export const parseTemplateCarousel = (
  templateCarousel?: Amplience.Content.AmplienceTemplateCarousel[]
): Array<ParseTemplateCarouselType> | null => {
  if (!templateCarousel || !Array(templateCarousel) || !templateCarousel[0]) return null

  const result = templateCarousel
    .map(segment => {
      if (!segment.video || segment.video.mediaType !== 'video') return

      const defaultHost = segment.video.defaultHost
      const name = segment.video.name
      const endpoint = segment.video.endpoint

      const videoSource = getVideoSourceLinks(defaultHost, name, endpoint)

      return {
        caption: segment.captionHtml || '',
        videoImage: {
          src: getVideoImage(defaultHost, name, endpoint),
          alt: segment.imageAltText || '',
          title: segment._title || ''
        },
        source: videoSource,
        settings: {
          autoplay: !!segment.autoplay,
          loop: !!segment.loop,
          muted: !!segment.muted
        }
      }
    })
    .filter(content => !!content) as unknown as Array<ParseTemplateCarouselType>

  return result
}

export type ParseVideoContentType = {
  tempalte: {
    numberWatermarkEnabled: boolean | undefined
    ratio: string | undefined
    alignment: string | undefined
    backgroundColor: string | undefined
    title: string | undefined
    titleStyle: string | undefined
    captionHtmlStyle: string | undefined
    description: string | undefined
    currentLocale: string | undefined
  }
  templateCarousel: ParseTemplateCarouselType[] | null
}

export const parseVideoContent = (content?: Amplience.Content.AmplienceContent): ParseVideoContentType | null => {
  if (!content || !Array(content) || !content[0]) return null

  const contentSegment = content[0]

  const {
    numberWatermarkEnabled,
    ratio,
    alignment,
    backgroundColor,
    title,
    titleStyle,
    captionHtmlStyle,
    description,
    currentLocale
  } = contentSegment

  const templateCarouselRaw = contentSegment.templateCarousel
  const templateCarousel = parseTemplateCarousel(templateCarouselRaw)
  const result = {
    tempalte: {
      numberWatermarkEnabled,
      ratio,
      alignment,
      backgroundColor,
      title,
      titleStyle,
      captionHtmlStyle,
      description,
      currentLocale
    },
    templateCarousel
  }

  return result
}
