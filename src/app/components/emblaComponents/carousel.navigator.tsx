import React from 'react'

import { Box, BoxProps } from '@chakra-ui/react'

import { CarouselApiStateType } from './carousel.api.state'
import NavigationButton from './carousel.navigation.button'
import CarouselCounter from './counter'

import fontGuide from '../../theme/foundations/fontGuide'

import { MCMArrowLeftIcon, MCMArrowRightIcon } from '../mcmIcon'

const localStyle = {
  container: {
    display: 'flex',
    alignItems: 'center',
    ml: 'auto'
  },
  counter: {
    ...fontGuide.f_caption_S,
    width: 's40',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 's1'
  },
  navButton: {
    width: 's44',
    height: 's44',
    opacity: '0',
    transition: '0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '>div': {
      position: 'relative',
      transition: '0.3s'
    },
    svg: {
      position: 'relative',
      transition: '0.3s'
    }
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navButtonActive: {
    opacity: '1'
  },
  leftArrow: {
    right: '-0.5rem'
  },
  rightArrow: {
    left: '-0.5rem'
  },
  leftArrowActive: {
    right: '0'
  },
  rightArrowActive: {
    left: '0'
  }
}

const Navigator: React.FC<
  {
    apiState: CarouselApiStateType
  } & BoxProps
> = props => {
  const { ...rest } = props
  const { EmblaCarouselApi, currentIndex, allIndexes } = props.apiState

  return (
    <Box __css={localStyle.container}>
      <NavigationButton
        __css={{
          ...localStyle.navButton,
          ...(EmblaCarouselApi.value?.canScrollPrev() ? localStyle.navButtonActive : {})
        }}
        callback={() => {
          if (EmblaCarouselApi.value?.canScrollPrev()) EmblaCarouselApi.value?.scrollPrev()
        }}
      >
        <Box
          w="s24"
          h="s24"
          justifyContent="center"
          alignItems="center"
          borderRadius="s24"
          __css={{
            ...localStyle.iconWrapper,
            ...localStyle.leftArrow,
            ...(EmblaCarouselApi.value?.canScrollPrev() ? localStyle.leftArrowActive : {})
          }}
          {...rest}
        >
          <MCMArrowLeftIcon fontSize="s11" />
        </Box>
      </NavigationButton>

      <CarouselCounter currentIndex={currentIndex.value} allIndexes={allIndexes.value} />
      <NavigationButton
        __css={{
          ...localStyle.navButton,
          ...(EmblaCarouselApi.value?.canScrollNext() ? localStyle.navButtonActive : {})
        }}
        callback={() => {
          if (EmblaCarouselApi.value?.canScrollNext()) EmblaCarouselApi.value?.scrollNext()
        }}
      >
        <Box
          w="s24"
          h="s24"
          justifyContent="center"
          alignItems="center"
          borderRadius="s24"
          __css={{
            ...localStyle.iconWrapper,
            ...localStyle.rightArrow,
            ...(EmblaCarouselApi.value?.canScrollNext() ? localStyle.rightArrowActive : {})
          }}
          {...rest}
        >
          <MCMArrowRightIcon fontSize="s11" />
        </Box>
      </NavigationButton>
    </Box>
  )
}

export default Navigator
