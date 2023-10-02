import { CSSProperties } from 'react'

import { CSSObject } from '@chakra-ui/react'

const getElementBoundary = (
  scaleFactor: number,
  element?: HTMLDivElement | null
): {
  width: number
  height: number
  widthCenter: number
  heightCenter: number
} => {
  if (!element) {
    return {
      width: 0,
      height: 0,
      widthCenter: 0,
      heightCenter: 0
    }
  }

  const width = element.clientWidth ? element.clientWidth / scaleFactor : 0
  const height = element.clientHeight ? element.clientHeight / scaleFactor : 0

  return {
    width: width,
    height: height,
    widthCenter: width ? width / 2 : 0,
    heightCenter: height ? height / 2 : 0
  }
}

const generateContainerStyles = (): CSSObject => {
  return {
    overflow: 'hidden',
    img: generateImageElementStyles()
  }
}

const generateImageElementStyles = (): CSSObject => {
  return {
    minW: 'auto',
    maxW: 'initial',
    minH: 'auto',
    maxH: 'initial',
    display: 'block'
  }
}

const generateChildContainerStyles = (): CSSObject => {
  return {
    transition: '0.15s',
    minW: 'auto',
    maxW: 'initial',
    minH: 'auto',
    maxH: 'initial',
    display: 'inline-block'
  }
}

const generateTransformStyle = (
  scaleFactor?: number | null,
  parent?: HTMLDivElement | null,
  child?: HTMLDivElement | null
): CSSProperties => {
  const factor = scaleFactor || 1

  const parentBoundary = getElementBoundary(scaleFactor || 1, parent)
  const childBoundary = getElementBoundary(1, child)

  console.log(childBoundary)

  if (childBoundary.width * factor < parentBoundary.width) {
    return {
      transformOrigin: '0px 0px',
      transform: `scale(${factor}) translate3d(${parentBoundary.widthCenter - childBoundary.widthCenter}px, ${
        parentBoundary.heightCenter - childBoundary.heightCenter
      }px, 0)`
    }
  }
  return {
    transformOrigin: '0px 0px',
    transform: `scale(${factor}) translate3d(${0}px, ${0}px, 0)`
  }
}

export default {
  generateChildContainerStyles,
  generateContainerStyles,
  generateTransformStyle
}
