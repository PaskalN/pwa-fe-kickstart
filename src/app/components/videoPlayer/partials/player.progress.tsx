import React from 'react'

import { Box } from '@chakra-ui/react'

const PlayerProgress: React.FC<{
  videoState: VideoPlayer.Hook | null
}> = props => {
  const { videoState } = props

  return (
    <Box
      position="absolute"
      bottom="s1"
      left="0"
      right="0"
      bg="rgb(255, 255, 255, 0.2)"
      data-component="control-progress"
    >
      <Box h="s4" w={`${videoState?.playerStates?.videoProgress || 0}%`} bg="white"></Box>
    </Box>
  )
}

export default PlayerProgress
