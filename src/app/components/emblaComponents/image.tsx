import React from 'react'

import { Box, Image } from '@chakra-ui/react'

const CarouselImage: React.FC<{
  link: string
  alt?: string
  title?: string
  __css?: Project.Utils.ObjectKeyUnknown
  onLoad?: () => void
  onError?: () => void
}> = props => {
  const { link, alt, title, onLoad = () => {}, onError = () => {}, __css = {} } = props
  return (
    <Box __css={{ ...__css }}>
      <Image src={link} alt={alt || ''} title={title || ''} onLoad={() => onLoad()} onError={() => onError()} />
    </Box>
  )
}

export default CarouselImage
