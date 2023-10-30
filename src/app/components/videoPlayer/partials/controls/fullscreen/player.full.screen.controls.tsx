import React from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

import PlayerProgress from './player.progress'
import PlayerTimer from './player.timer'

import { MCMMinimize, MCMNoSound, MCMPause, MCMPlay, MCMSound } from '../../../../mcmIcon'
import PlayerControlBox from '../common/player.control.box'

const PlayerFullScreenControls: React.FC<
  {
    videoSDK: VideoPlayer.SDK.Definition
    show: boolean
  } & FlexProps
> = props => {
  const { videoSDK, show, ...rest } = props
  const [audio] = videoSDK.states.audio

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
        <PlayerControlBox onClick={() => videoSDK.handlers.fullscreen.togglePlayPause()}>
          {videoSDK.states.currentState.play && (
            <MCMPause color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
          )}
          {!videoSDK.states.currentState.play && (
            <MCMPlay color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
          )}
        </PlayerControlBox>
        <PlayerTimer videoRef={videoSDK.refs.fullscreen} />
      </Flex>

      <Flex w="100%" px="s16" justifyContent="center" alignItems="center">
        <PlayerProgress videoRef={videoSDK.refs.fullscreen} />
      </Flex>

      <Flex>
        {audio && (
          <PlayerControlBox active={audio} onClick={() => videoSDK.handlers.fullscreen.mute()}>
            {!audio || videoSDK.states.currentState.muted ? (
              <MCMNoSound color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
            ) : (
              <MCMSound color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
            )}
          </PlayerControlBox>
        )}

        <PlayerControlBox onClick={() => videoSDK.handlers.player.closeFullscreen()}>
          <MCMMinimize color="white" fontSize="s18" filter="drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.20))" />
        </PlayerControlBox>
      </Flex>
    </Flex>
  )
}

export default PlayerFullScreenControls
