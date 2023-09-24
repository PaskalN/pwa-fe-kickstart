import React, { useEffect } from 'react'

import { Flex, FlexProps, useBreakpointValue } from '@chakra-ui/react'

import PlayerControlBox from './player.control.box'
import PlayerProgressDesktop from './player.progress.desktop'
import PlayerTimer from './player.timer'

import { mobileState } from './video.player.hooks'

import { MCMMinimize, MCMNoSound, MCMPause, MCMPlay, MCMSound } from '../../mcmIcon'

const PlayerFullScreenControls: React.FC<
  {
    videoState: VideoPlayer.Hook | null
    show: boolean
  } & FlexProps
> = props => {
  const { videoState, show, ...rest } = props

  const mobile = useBreakpointValue(mobileState, 'false')

  useEffect(() => {
    if (mobile && videoState?.playerStates?.desktopFullscreen) {
      videoState?.toggles.toggleFullscreenHandler()
    }
  }, [mobile])

  return (
    <Flex
      position="fixed"
      w="100%"
      maxWidth="53.0625rem"
      left="s16"
      right="s16"
      bottom={!show ? '-2.75rem' : 's24'}
      borderRadius="s4"
      bg="rgba(34, 34, 34, 0.80)"
      margin="auto"
      px="s12"
      zIndex="9999"
      justifyContent="center"
      alignItems="center"
      minH="s44"
      transition="0.3s"
      data-component="full-screen-controls"
      {...rest}
    >
      <Flex gap="s8">
        <PlayerControlBox onClick={() => videoState?.toggles.togglePlay()} videoState={videoState}>
          {videoState?.playerStates?.play && (
            <MCMPause color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
          )}
          {videoState?.playerStates?.stop && (
            <MCMPlay color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
          )}
        </PlayerControlBox>
        <PlayerTimer videoState={videoState} />
      </Flex>
      <Flex w="100%" px="s16" justifyContent="center" alignItems="center">
        <PlayerProgressDesktop videoState={videoState} />
      </Flex>
      <Flex>
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
        <PlayerControlBox onClick={() => videoState?.toggles.toggleFullscreenHandler?.()} videoState={videoState}>
          <MCMMinimize color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
        </PlayerControlBox>
      </Flex>
    </Flex>
  )
}

export default PlayerFullScreenControls
