type ZoomElementBoundary =
  | (DOMRect & {
      widthCenter: number
      heightCenter: number
      ratio: number

      bottom: number
      height: number
      left: number
      right: number
      top: number
      width: number
      x: number
      y: number
    })
  | Record<string, number>

const getElementBoundary = (element: HTMLDivElement): ZoomElementBoundary => {
  if (!element) return {}

  const boundaries = element.getBoundingClientRect()

  const { bottom, height, left, right, top, width, x, y } = boundaries

  const widthCenter = width ? width / 2 : 0
  const heightCenter = height ? height / 2 : 0

  const ratio = height / width

  return {
    bottom,
    height,
    left,
    right,
    top,
    width,
    x,
    y,
    widthCenter,
    heightCenter,
    ratio
  }
}

type WidthState = {
  width: number
  maxWidth: number
  minWidth: number
}

const calculateWidth = (props: { width?: number; maxWidth?: number; minWidth?: number }): WidthState => {
  const { width, maxWidth, minWidth } = props

  const result = {
    width: 0,
    maxWidth: 0,
    minWidth: 0
  }

  if (!width) return result
  result.width = width

  if (!maxWidth) {
    result.maxWidth = width
  } else {
    result.maxWidth = maxWidth < width ? width : maxWidth
  }

  if (!minWidth) {
    result.minWidth = 10
  } else {
    result.minWidth = minWidth > width ? width : minWidth < 0 ? 0 : minWidth
  }

  if (result.maxWidth < result.minWidth) {
    result.maxWidth = result.minWidth
  }

  return result
}

export type ViewPortZoomSettings = {
  parentBoundary: ZoomElementBoundary
  childBoundary: ZoomElementBoundary
  widthState: WidthState
  canPan: boolean
  canZoom: boolean
}

const getViewportSettings = (props: {
  parent: HTMLDivElement
  child: HTMLDivElement
  maxWidth?: number
  minWidth?: number
}): ViewPortZoomSettings => {
  const { parent, child } = props

  const parentBoundary = getElementBoundary(parent)
  const childBoundary = getElementBoundary(child)

  const { maxWidth, minWidth } = props

  const widthState = calculateWidth({
    width: childBoundary.width,
    maxWidth,
    minWidth
  })

  const canPan = childBoundary.width > parentBoundary.width
  const canZoom = childBoundary.width < widthState.maxWidth

  return {
    parentBoundary,
    childBoundary,
    widthState,
    canPan,
    canZoom
  }
}

export default {
  getViewportSettings
}
