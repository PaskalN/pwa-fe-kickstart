import React, { useEffect, useState } from 'react'

import { Box, BoxProps, Flex, useBreakpointValue } from '@chakra-ui/react'

const designState = {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    border: '0px solid',
    borderColor: 'transparent',
    borderRadius: 's50',
    bg: 'transparent',
    transition: '0.2s'
  },

  playerHover: {
    border: '3px solid',
    bg: 'rgba(34, 34, 34, 0.8)',
    borderColor: 'rgba(34, 34, 34, 0.8)'
  },

  hover: {
    _hover: {
      border: '7px solid',
      bg: 'gold.100',
      borderColor: 'gold.100'
    }
  },

  pressed: {
    _hover: {
      border: '7px solid',
      bg: 'gold.130',
      borderColor: 'gold.130'
    }
  }
}

const PlayerControlBox: React.FC<
  {
    active?: boolean
    type?: 'default' | 'small'
    children: React.ReactNode | Array<React.ReactNode>
    videoState: VideoPlayer.Hook | null
  } & BoxProps
> = props => {
  const { videoState, children, active = true, ...rest } = props
  const [mousedown, setMousedown] = useState<boolean>(false)
  const mobile = useBreakpointValue(
    {
      base: true,
      l_xl: false
    },
    'false'
  )

  useEffect(() => {
    videoState?.handlers.setVideoHover(false)
  }, [videoState?.handlers.setDesktopFullscreen])

  return (
    <Flex
      w="s44"
      h="s44"
      justifyContent="center"
      alignItems="center"
      data-component="control-box"
      cursor="pointer"
      onMouseDown={() => setMousedown(true)}
      onMouseUp={() => setMousedown(false)}
      {...rest}
    >
      <Box
        __css={
          active
            ? {
                ...designState.base,
                ...(!mobile && videoState?.playerStates?.videoHover && !videoState?.playerStates?.desktopFullscreen
                  ? designState.playerHover
                  : {}),
                ...(!mobile ? designState.hover : {}),
                ...(mousedown ? designState.pressed : {})
              }
            : {
                opacity: '0.8s'
              }
        }
      >
        {children}
      </Box>
    </Flex>
  )
}

export default PlayerControlBox
