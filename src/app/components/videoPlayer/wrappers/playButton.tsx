import React from 'react'

import { BoxProps, Flex, Image } from '@chakra-ui/react'

const PlayerWrapperPlayButton: React.FC<
  {
    children: React.ReactNode | Array<React.ReactNode>
    active?: boolean
    innerContent?: string | JSX.Element
    videoPoster?: string
  } & BoxProps
> = props => {
  const { children, innerContent, active = false, videoPoster = '', ...rest } = props

  if (active) {
    return <>{children}</>
  }

  return (
    <Flex position="relative" {...rest}>
      {children}

      {videoPoster && (
        <Image
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          justifyContent="center"
          alignItems="center"
          zIndex="90"
          src={videoPoster}
        />
      )}

      <Flex
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        justifyContent="center"
        alignItems="center"
        zIndex="100"
      >
        {innerContent ? innerContent : null}
      </Flex>
    </Flex>
  )
}

export default PlayerWrapperPlayButton
