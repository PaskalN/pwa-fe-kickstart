import React from 'react'

import { Flex, useBreakpointValue } from '@chakra-ui/react'

import PlayerControlBox from './player.control.box'

import { mobileState } from './video.player.hooks'

import { MCMFullscreen, MCMNoSound, MCMPause, MCMPlay, MCMSound } from '../../mcmIcon'

const PlayerTopControls: React.FC<{
  videoState: VideoPlayer.Hook | null
  fullscreenButton?: boolean
  playButton?: boolean
  soundButton?: boolean
}> = props => {
  const { videoState, fullscreenButton = true, playButton = true, soundButton = true } = props

  const mobile = useBreakpointValue(mobileState, 'false')

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
            <PlayerControlBox onClick={() => videoState?.toggles.togglePlay()} videoState={videoState}>
              {videoState?.playerStates?.play && (
                <MCMPause color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              )}
              {videoState?.playerStates?.stop && (
                <MCMPlay color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              )}
            </PlayerControlBox>
          )}
        </Flex>
        <Flex>
          {soundButton && (
            <PlayerControlBox
              active={!!videoState?.playerStates?.audio}
              onClick={() => {
                if (videoState?.playerStates?.audio) {
                  videoState?.toggles.toggleMute()
                }
              }}
              videoState={videoState}
            >
              {!videoState?.playerStates?.audio || videoState?.playerStates?.mute ? (
                <MCMNoSound color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              ) : (
                <MCMSound color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
              )}
            </PlayerControlBox>
          )}

          {fullscreenButton && (
            <PlayerControlBox
              onClick={() => {
                if (!mobile) {
                  videoState?.toggles.toggleFullscreenHandler()
                } else {
                  videoState?.playerStates?.videoElement?.requestFullscreen()
                }
              }}
              videoState={videoState}
            >
              <MCMFullscreen color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
            </PlayerControlBox>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default PlayerTopControls
