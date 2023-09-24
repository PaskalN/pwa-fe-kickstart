import React from 'react'

import { Box, Flex } from '@chakra-ui/react'

const PlayerProgressDesktop: React.FC<{
  videoState: VideoPlayer.Hook | null
}> = props => {
  const { videoState } = props

  return (
    <Flex
      w="100%"
      justifyContent="center"
      flexDirection="column"
      data-component="control-progress-desktop"
      bg="rgba(255, 255, 255, 0.20);"
      h="s4"
    >
      <Box h="s4" w={`${videoState?.playerStates?.videoProgress || 0}%`} bg="white"></Box>
    </Flex>
  )
}

export default PlayerProgressDesktop
