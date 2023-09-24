import React, { useEffect, useRef, useState } from 'react'

import { Box, BoxProps, useBreakpointValue } from '@chakra-ui/react'

import PlayerFullScreenControls from './partials/player.full.screen.controls'
import PlayerProgress from './partials/player.progress'
import PlayerTopControls from './partials/player.top.controls'
import { mobileState, useVideoState } from './partials/video.player.hooks'

// Styles
const fullscreenStyle = {
  position: 'fixed',
  left: '0',
  right: '0',
  bottom: '0',
  top: '0',
  zIndex: '9998',
  video: {
    width: '100%',
    height: '100%',
    minWidth: '100%',
    minHeight: '100%',
    margin: 'auto'
  }
}

const VideoPlayer: React.FC<
  {
    videoContents?: Array<VideoPlayer.Content>
    fullscreenButton?: boolean
    playButton?: boolean
    soundButton?: boolean
    playOnScreen?: boolean
    isOnScreen?: boolean
  } & BoxProps
> = props => {
  const {
    videoContents,
    fullscreenButton = true,
    playButton = true,
    soundButton = true,
    playOnScreen = false,
    isOnScreen = false,
    ...rest
  } = props

  // State
  const [mouseMoveTimeout, setMouseMoveTimeout] = useState<NodeJS.Timeout | undefined>(undefined)
  const [showDesktopControls, setShowDesktopControls] = useState<boolean>(false)
  const mobile = useBreakpointValue(mobileState, 'false')

  // Hooks
  const videoContainer = useRef<HTMLVideoElement | null>(null)
  const videoState = useVideoState()

  // Effects
  useEffect(() => {
    if (videoContainer.current) {
      videoState.handlers.setVideoElement(videoContainer.current)
    }
  }, [videoContainer])

  useEffect(() => {
    if (!playOnScreen) return

    if (isOnScreen) {
      videoState.handlers.setPause(false)
      videoState?.playerStates?.videoElement?.play()
    } else {
      videoState.handlers.setPause(true)
      videoState?.playerStates?.videoElement?.pause()
    }
  }, [playOnScreen, isOnScreen])

  // Inital check
  if (!videoContents || !videoContents.length) return null
  const videoContent = videoContents[0]

  const mouseMoveHandler = () => {
    setShowDesktopControls(true)
    clearTimeout(mouseMoveTimeout)
    const timeout = setTimeout(() => setShowDesktopControls(false), 3000)
    setMouseMoveTimeout(timeout)
  }

  return (
    <Box position="relative" onMouseMove={mouseMoveHandler} {...rest}>
      <Box
        data-component="fullscreen"
        __css={videoState.playerStates?.desktopFullscreen ? fullscreenStyle : {}}
        background="black"
        onMouseEnter={() => {
          videoState.handlers.setVideoHover(true)
        }}
        onMouseLeave={() => {
          videoState.handlers.setVideoHover(false)
        }}
      >
        {!videoState.playerStates?.desktopFullscreen && (
          <>
            <PlayerTopControls
              videoState={videoState}
              fullscreenButton={fullscreenButton}
              playButton={playButton}
              soundButton={soundButton}
            />
            <PlayerProgress videoState={videoState} />
          </>
        )}

        <video
          ref={videoContainer}
          preload="metadata"
          poster={videoContent.thumbImage}
          loop
          onPlay={() => {
            videoState.handlers.setPause?.(false)
          }}
          onPause={() => {
            videoState.handlers.setPause?.(true)
          }}
          onTimeUpdate={() => {
            const progress = (videoContainer.current?.currentTime || 0) / (videoContainer.current?.duration || 0)
            videoState.handlers.setProgress(isNaN(progress) ? 0 : progress * 100)
          }}
          className={mobile ? '' : 'noControlsFullscreen'}
        >
          <Box as="source" src={videoContent.videos.mp4.p720}></Box>
          <Box as="source" src={videoContent.videos.mp4.p480}></Box>
          <Box as="source" src={videoContent.videos.mp4.p240}></Box>

          <Box as="source" src={videoContent.videos.webm.p720}></Box>
          <Box as="source" src={videoContent.videos.webm.p480}></Box>
          <Box as="source" src={videoContent.videos.webm.p240}></Box>
        </video>

        {videoState.playerStates?.desktopFullscreen && (
          <>
            <PlayerFullScreenControls
              videoState={videoState}
              show={showDesktopControls}
              onMouseOver={() => setShowDesktopControls(true)}
            />
          </>
        )}
      </Box>
    </Box>
  )
}

export default VideoPlayer
