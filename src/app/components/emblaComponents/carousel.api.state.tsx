import React, { useEffect, useState } from 'react'

import { EmblaCarouselType } from 'embla-carousel'

type SetStateActionType<T> = React.Dispatch<React.SetStateAction<T>>

export type CarouselApiStateType = {
  EmblaCarouselApi: {
    value: EmblaCarouselType | undefined
    setEmblaCarouselApi: SetStateActionType<EmblaCarouselType | undefined>
  }
  currentIndex: {
    value: number
    setCurrentIndex: SetStateActionType<number>
  }
  isLastIndex: {
    value: boolean
    setIsLastIndex: SetStateActionType<boolean>
  }
  isFirstIndex: {
    value: boolean
    setIsFirstIndex: SetStateActionType<boolean>
  }
  allIndexes: {
    value: number
    setAllIndexes: SetStateActionType<number>
  }
  singleItem: {
    value: boolean
    setSingleItem: SetStateActionType<boolean>
  }
  lastItemInView: {
    value: boolean
    setLastItemInView: SetStateActionType<boolean>
  }
  firstItemInView: {
    value: boolean
    setFirstItemInView: SetStateActionType<boolean>
  }
  currentSlide: {
    value: HTMLElement | null
    setCurrentSlide: SetStateActionType<HTMLElement | null>
  }
}

const setWatcher = (API: CarouselApiStateType, dependencies: Array<unknown>) => {
  const CarouselEngineApi = API.EmblaCarouselApi.value
  const watchDependencies = [CarouselEngineApi, ...dependencies]

  useEffect(() => {
    if (CarouselEngineApi) {
      const options = CarouselEngineApi.internalEngine().options
      const startSlideIndex = options.startIndex || 0

      CarouselEngineApi.scrollTo(startSlideIndex)
      const currentIndex = CarouselEngineApi.selectedScrollSnap() + 1
      const allIndexes = CarouselEngineApi?.slideNodes().length
      const lastItemInView = CarouselEngineApi.slidesInView().includes(CarouselEngineApi.slideNodes().length - 1)
      const firstItemInView = CarouselEngineApi.slidesInView().includes(0)
      const currentSlide = CarouselEngineApi.slideNodes()[currentIndex - 1]

      API.currentIndex.setCurrentIndex(currentIndex)
      API.allIndexes.setAllIndexes(allIndexes || currentIndex)
      API.isLastIndex.setIsLastIndex(currentIndex === allIndexes)
      API.isFirstIndex.setIsFirstIndex(currentIndex === 1)
      API.singleItem.setSingleItem(allIndexes === 1)
      API.firstItemInView.setFirstItemInView(firstItemInView)
      API.lastItemInView.setLastItemInView(lastItemInView)
      API.currentSlide.setCurrentSlide(currentSlide)

      const onScroll = () => {
        const currentIndex = CarouselEngineApi.selectedScrollSnap() + 1
        const allIndexes = CarouselEngineApi?.slideNodes().length
        const lastItemInView = CarouselEngineApi.slidesInView().includes(CarouselEngineApi.slideNodes().length - 1)
        const firstItemInView = CarouselEngineApi.slidesInView().includes(0)
        const currentSlide = CarouselEngineApi.slideNodes()[currentIndex - 1]

        API.currentIndex.setCurrentIndex(currentIndex)
        API.allIndexes.setAllIndexes(allIndexes || currentIndex)
        API.isLastIndex.setIsLastIndex(currentIndex === allIndexes)
        API.isFirstIndex.setIsFirstIndex(currentIndex === 1)
        API.singleItem.setSingleItem(allIndexes === 1)
        API.firstItemInView.setFirstItemInView(firstItemInView)
        API.lastItemInView.setLastItemInView(lastItemInView)
        API.currentSlide.setCurrentSlide(currentSlide)
      }

      CarouselEngineApi.on('scroll', onScroll)
      return () => {
        CarouselEngineApi.off('scroll', onScroll)
      }
    }
    return () => {}
  }, watchDependencies)
}

const useCarouselApiState = (dependencies?: Array<unknown>): CarouselApiStateType => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isLastIndex, setIsLastIndex] = useState<boolean>(false)
  const [isFirstIndex, setIsFirstIndex] = useState<boolean>(false)
  const [allIndexes, setAllIndexes] = useState<number>(0)
  const [singleItem, setSingleItem] = useState<boolean>(true)
  const [lastItemInView, setLastItemInView] = useState<boolean>(true)
  const [firstItemInView, setFirstItemInView] = useState<boolean>(true)
  const [currentSlide, setCurrentSlide] = useState<HTMLElement | null>(null)

  const [EmblaCarouselApi, setEmblaCarouselApi] = useState<EmblaCarouselType | undefined>(undefined)

  const result = {
    EmblaCarouselApi: {
      value: EmblaCarouselApi,
      setEmblaCarouselApi
    },
    currentIndex: {
      value: currentIndex,
      setCurrentIndex
    },
    isLastIndex: {
      value: isLastIndex,
      setIsLastIndex
    },
    isFirstIndex: {
      value: isFirstIndex,
      setIsFirstIndex
    },
    allIndexes: {
      value: allIndexes,
      setAllIndexes
    },
    singleItem: {
      value: singleItem,
      setSingleItem
    },
    lastItemInView: {
      value: lastItemInView,
      setLastItemInView
    },
    firstItemInView: {
      value: firstItemInView,
      setFirstItemInView
    },
    currentSlide: {
      value: currentSlide,
      setCurrentSlide
    }
  }

  setWatcher(result, dependencies || [])

  return result
}

export default useCarouselApiState
