import React from 'react'

import { Flex } from '@chakra-ui/react'

import { MCMFullscreen, MCMNoSound, MCMPause, MCMPlay, MCMSound } from '../../../../mcmIcon'
import PlayerControlBox from '../common/player.control.box'

const PlayerTopControls: React.FC<{
  videoSDK: VideoPlayer.SDK.Definition
  hovered?: boolean
  fullscreenButton?: boolean
  playButton?: boolean
  soundButton?: boolean
}> = props => {
  const { videoSDK, fullscreenButton = true, playButton = true, soundButton = true, hovered = false } = props

  const [audio] = videoSDK.states.audio

  return (
    <>
      <Flex
        justifyContent="space-between"
        position="absolute"
        left="0"
        right="0"
        top="0"
        zIndex="20"
        data-component="control-top"
      >
        <Flex>
          {playButton && (
            <PlayerControlBox onClick={() => videoSDK.handlers.defaultScreen.togglePlayPause()} hovered={hovered}>
              {videoSDK.states.currentState.play && (
                <MCMPause color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              )}
              {!videoSDK.states.currentState.play && (
                <MCMPlay color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              )}
            </PlayerControlBox>
          )}
        </Flex>
        <Flex>
          {audio && soundButton && (
            <PlayerControlBox active={audio} onClick={() => videoSDK.handlers.defaultScreen.mute()} hovered={hovered}>
              {!audio || videoSDK.states.currentState.muted ? (
                <MCMNoSound color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              ) : (
                <MCMSound color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              )}
            </PlayerControlBox>
          )}

          {fullscreenButton && (
            <PlayerControlBox onClick={() => videoSDK.handlers.player.requestFullscreen()} hovered={hovered}>
              <MCMFullscreen color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
            </PlayerControlBox>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default PlayerTopControls
