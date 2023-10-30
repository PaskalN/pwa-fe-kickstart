import React, { useEffect } from 'react'

import { Box, useMultiStyleConfig } from '@chakra-ui/react'

import { EmblaCarouselType, EmblaPluginType } from 'embla-carousel'
import { OptionsType } from 'embla-carousel/components/Options'
import useEmblaCarousel from 'embla-carousel-react'

export const EmblaCarousel: React.FC<{
  apiState: {
    carouselApi: EmblaCarouselType | undefined
    setCarouselApi: React.Dispatch<React.SetStateAction<EmblaCarouselType | undefined>>
  }
  children?: React.ReactElement | React.ReactElement[] | React.ReactNode | React.ReactNode[]
  variant?: string
  size?: string
  colorScheme?: string
  type?: string
  options?: Partial<OptionsType>
  plugins?: EmblaPluginType[]
}> = props => {
  const {
    apiState,
    children,
    variant = '',
    size = '',
    colorScheme = '',
    type = 'A',
    options = {},
    plugins = []
  } = props
  const style = useMultiStyleConfig('Embla', {
    variant,
    size,
    colorScheme,
    type
  })
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

  useEffect(() => {
    apiState.setCarouselApi(emblaApi)
  }, [emblaApi])

  return (
    <>
      <Box ref={emblaRef} __css={{ ...style.main }} data-carousel-component="embla-main">
        <Box
          __css={{ ...style.container, ...(options.active ? style.active : style.deactive) }}
          data-carousel-component="embla-container"
        >
          {children}
        </Box>
      </Box>
    </>
  )
}

export const EmblaSlide: React.FC<{
  children?: React.ReactElement
  variant?: string
  size?: string
  colorScheme?: string
  type?: Project.SDK.RecommendationStyleType
}> = props => {
  const { children, variant = '', size = '', colorScheme = '', type } = props
  const style = useMultiStyleConfig('Embla', {
    variant,
    size,
    colorScheme,
    type
  })

  return (
    <Box __css={{ ...style.slide }} data-carousel-component="embla-slide">
      {children}
    </Box>
  )
}
