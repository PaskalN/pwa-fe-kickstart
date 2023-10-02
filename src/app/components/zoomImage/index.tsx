import React, { useRef } from 'react'

import { Box, BoxProps, Image } from '@chakra-ui/react'

const ZoomImage: React.FC<
  {
    src: string
    alt: string
    title: string
  } & BoxProps
> = props => {
  const container = useRef<HTMLDivElement>(null)
  const zoomImage = useRef<HTMLImageElement>(null)

  const { src, ...rest } = props

  const mouseMove = (event: React.MouseEvent) => {
    const { currentTarget } = event
    const rect = currentTarget.getBoundingClientRect()

    const offsetX = event.clientX - rect.left
    const offsetY = event.clientY - rect.top

    const offsetXRatio = offsetX / currentTarget.clientWidth
    const offsetYRatio = offsetY / currentTarget.clientHeight

    console.log(`X: ${offsetXRatio} Y: ${offsetYRatio}`)

    if (zoomImage.current) {
      zoomImage.current.style.opacity = '1'

      zoomImage.current.style.left = `-${
        offsetXRatio * zoomImage.current.clientWidth - offsetXRatio * currentTarget.clientWidth
      }px`
      zoomImage.current.style.top = `-${
        offsetYRatio * zoomImage.current.clientHeight - offsetYRatio * currentTarget.clientHeight
      }px`
    }
  }

  const touchMove = (event: React.TouchEvent) => {
    const { currentTarget } = event
    const rect = currentTarget.getBoundingClientRect()

    const offsetX = event.touches[0].clientX - rect.left
    const offsetY = event.touches[0].clientY - rect.top

    const offsetXRatio = offsetX / currentTarget.clientWidth
    const offsetYRatio = offsetY / currentTarget.clientHeight

    console.log(`X: ${offsetXRatio} Y: ${offsetYRatio}`)

    if (zoomImage.current) {
      zoomImage.current.style.opacity = '1'

      zoomImage.current.style.left = `-${
        offsetXRatio * zoomImage.current.clientWidth - offsetXRatio * currentTarget.clientWidth
      }px`
      zoomImage.current.style.top = `-${
        offsetYRatio * zoomImage.current.clientHeight - offsetYRatio * currentTarget.clientHeight
      }px`
    }
  }

  const mouseLeave = () => {
    if (zoomImage.current) {
      zoomImage.current.style.opacity = '0'
    }
  }

  return (
    <Box
      overflow="hidden"
      {...rest}
      ref={container}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      onTouchStart={touchMove}
      onTouchMove={touchMove}
      onTouchEnd={mouseLeave}
      position="relative"
    >
      <Image src={src} />

      <Image
        src={src}
        width="auto"
        height="auto"
        maxWidth="inherit"
        maxHeight="inherit"
        ref={zoomImage}
        position="absolute"
        top="0"
        left="0"
        opacity="0"
        transition="opacity 0.3s"
      />
    </Box>
  )
}

export default ZoomImage
