import React, { useEffect, useRef, useState } from 'react'

import { Box, BoxProps } from '@chakra-ui/react'

// import scale from './scale'
import size, { ViewPortZoomSettings } from './size'
import styles from './styles'

type ZoomPichPanScaleFactors = {
  minScaleFactor?: number
  maxScaleFactor?: number
}

type Required<T> = {
  [P in keyof T]-?: T[P]
}

type ZoomPichPanProps = {
  minScaleWidth?: number
  maxScaleWidth?: number
} & ZoomPichPanScaleFactors

const ZoomPinchZoom: React.FC<
  {
    children: React.ReactNode
  } & BoxProps &
    ZoomPichPanProps
> = props => {
  //   const { children, minScaleFactor, maxScaleFactor, minScaleWidth, maxScaleWidth, ...rest } = props
  const { children, ...rest } = props

  // refs
  const container = useRef<HTMLDivElement>(null)
  const child = useRef<HTMLImageElement>(null)

  // styles
  //   const childContainerStyle = styles.generateChildContainerStyles()
  const containerStyle = styles.generateContainerStyles()

  // States
  const [initialZoomState, setInitialZoomState] = useState<ViewPortZoomSettings | null>(null)
  //   const [initialScaleFactor, setInitialScaleFactor] = useState<Required<ZoomPichPanScaleFactors>>({
  const [initialScaleFactor] = useState<Required<ZoomPichPanScaleFactors>>({
    minScaleFactor: 1,
    maxScaleFactor: 1
  })
  //   const [childStyle, setChildStyle] = useState<React.CSSProperties>(styles.generateTransformStyle())
  const [, setChildStyle] = useState<React.CSSProperties>(styles.generateTransformStyle())

  const [noScroll, setNoScroll] = useState<boolean>(false)
  const [scaleFactor, setScaleFactor] = useState<number>(1)

  // Handlers
  const handleZoomFactor = (scrollIn: boolean) => {
    if (!container.current || !child.current) return

    const scaleConstant = 0.1
    const scaleResult = scrollIn ? scaleFactor + scaleFactor * scaleConstant : scaleFactor - scaleFactor * scaleConstant

    if (scaleResult < initialScaleFactor.minScaleFactor) {
      setScaleFactor(initialScaleFactor.minScaleFactor)
      return
    }

    if (scaleResult > initialScaleFactor.maxScaleFactor) {
      setScaleFactor(initialScaleFactor.maxScaleFactor)
      return
    }

    setScaleFactor(scaleResult)
  }

  const onWheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    handleZoomFactor(e.deltaY < 0)

    if (e.cancelable === false) {
      return false
    }

    e.preventDefault()
    return true
  }

  const onMouseEneterHandler = () => {
    if (typeof window === undefined) return

    if (document.body.style.overflow === 'hidden') return

    document.body.style.overflow = 'hidden'
    setNoScroll(true)
  }

  const onMouseLeaveHandler = () => {
    if (typeof window === undefined || !noScroll || document.body.style.overflow !== 'hidden') return

    document.body.style.overflow = 'auto'
  }

  // Effects

  useEffect(() => {
    if (!container.current) return

    const child = container.current.querySelector('imag')
    if (child) {
        child.
    }

    console.log(initialZoomState)
  }, [container.current])

  useEffect(() => {
    if (!initialZoomState) return

    console.log(initialZoomState)
  }, [initialZoomState])

  useEffect(() => {
    if (container.current && child.current) {
      const res = size.getViewportSettings({
        parent: container.current,
        child: child.current
      })
      setInitialZoomState(res)
    }

    // const scaleFactorResult = scale.calculateScaleFactor(container?.current, child.current)
    // setScaleFactor(scaleFactorResult)

    // const scaleFactorCalulation = scale.calculateInitalScaleFactor(
    //   child.current,
    //   minScaleFactor,
    //   maxScaleFactor,
    //   minScaleWidth,
    //   maxScaleWidth
    // )

    // setInitialScaleFactor(scaleFactorCalulation)
    // setScaleFactor((scaleFactorCalulation.maxScaleFactor + scaleFactorCalulation.minScaleFactor) / 2)
  }, [container.current, child.current])

  useEffect(() => {
    const style = styles.generateTransformStyle(scaleFactor, container.current, child.current)
    setChildStyle(style)
  }, [scaleFactor])

  return (
    <Box
      __css={containerStyle}
      {...rest}
      ref={container}
      onWheel={onWheelHandler}
      onMouseEnter={onMouseEneterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
    </Box>
  )
}

export default ZoomPinchZoom
