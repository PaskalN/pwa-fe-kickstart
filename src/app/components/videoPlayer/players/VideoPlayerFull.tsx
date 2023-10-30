import React, { useState } from 'react'

import { Box } from '@chakra-ui/react'

import PlayerProgress from '../partials/controls/defaultScreen/player.progress'
import PlayerTopControls from '../partials/controls/defaultScreen/player.top.controls'
import VideoPlayerSDKTemplate from '../player'

const VideoPlayerFull: React.FC<{
  children: React.ReactNode | Array<React.ReactNode>
  videoSDK: VideoPlayer.SDK.Definition
  videoPoster?: string
  active?: boolean
}> = props => {
  const { children, videoSDK, videoPoster, active = true } = props
  const [hovered, setHover] = useState(false)

  return (
    <>
      <Box position="relative" data-component="video-player">
        <Box
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          zIndex="10"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {active && (
            <>
              <PlayerTopControls hovered={hovered} videoSDK={videoSDK} />
              <Box position="absolute" left="0" right="0" bottom="0">
                <PlayerProgress videoRef={videoSDK.refs.defaultScreen} />
              </Box>
            </>
          )}
        </Box>

        <VideoPlayerSDKTemplate videoSDK={videoSDK} videoPoster={videoPoster}>
          {children}
        </VideoPlayerSDKTemplate>
      </Box>
    </>
  )
}

export default VideoPlayerFull
