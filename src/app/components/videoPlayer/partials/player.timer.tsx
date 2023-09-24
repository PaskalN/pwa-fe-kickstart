import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'

const PlayerTimer: React.FC<{
  videoState: VideoPlayer.Hook | null
}> = props => {
  const { videoState } = props

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box data-component="control-timer" border="1px solid" borderColor="white" borderRadius="s4">
        <Text variant="default" size="f_body_XS" color="white" px="s6">
          {videoState?.playerStates?.time}
        </Text>
      </Box>
    </Flex>
  )
}

export default PlayerTimer
