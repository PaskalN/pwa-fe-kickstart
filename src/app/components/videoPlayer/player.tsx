import React, { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/react'
import { createPortal } from 'react-dom'

import PlayerFullScreenControls from './partials/controls/fullscreen/player.full.screen.controls'

const FullScreenView: React.FC<{
  videoSDK: VideoPlayer.SDK.Definition
  children: React.ReactNode | Array<React.ReactNode>
}> = props => {
  const { videoSDK, children } = props

  videoSDK.events.onOpenFullscreen()

  const setTimer = () => {
    return setTimeout(function () {
      setShow(false)
    }, 5000)
  }

  const [show, setShow] = useState<boolean>(true)

  let time: null | NodeJS.Timeout = null

  useEffect(() => {
    if (!show) return

    if (time) {
      clearTimeout(time)
    }

    time = setTimer()
  }, [show])

  const style = {
    container: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
      zIndex: 2000,
      bg: 'dark',

      video: {
        w: '100%',
        h: '100%'
      }
    }
  }

  return (
    <Box __css={style.container} data-component="video-player-fullscreen-view">
      <video ref={videoSDK.refs.fullscreen}>{children}</video>

      <Box position="fixed" top="0" bottom="0" left="0" right="0" zIndex="10" onMouseMove={() => setShow(true)}>
        <PlayerFullScreenControls videoSDK={videoSDK} show={show} />
      </Box>
    </Box>
  )
}

const VideoPlayerSDKTemplate: React.FC<{
  children: React.ReactNode | Array<React.ReactNode>
  videoSDK: VideoPlayer.SDK.Definition
  videoPoster?: string
}> = props => {
  const { children, videoSDK, videoPoster } = props

  videoSDK.events.onDefaultScreeen()

  const [fullscreen] = videoSDK.states.fullscreenState

  return (
    <>
      {fullscreen &&
        createPortal(
          <>
            <FullScreenView videoSDK={videoSDK}>{children}</FullScreenView>
          </>,
          document.body
        )}

      <video muted ref={videoSDK.refs.defaultScreen} poster={videoPoster}>
        {children}
      </video>
    </>
  )
}

export default VideoPlayerSDKTemplate
