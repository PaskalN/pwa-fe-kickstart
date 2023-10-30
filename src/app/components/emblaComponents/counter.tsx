import React from 'react'

import { Text } from '@chakra-ui/react'

const CarouselCounter: React.FC<{
  currentIndex: number
  allIndexes: number
}> = props => {
  const { currentIndex, allIndexes } = props

  return (
    <Text variant="default" size="f_caption_S" letterSpacing="-1px" minW="s50" textAlign="center">
      {currentIndex} / {allIndexes}
    </Text>
  )
}

export default CarouselCounter
