import { applyRefToRefSettings, availableWindow, getVideoStates, updateRefWithState } from './tools'

export const getHandlers = (
  videoRefs: VideoPlayer.SDK.References,
  videoState: VideoPlayer.SDK.VideoState,
  initialSettings: VideoPlayer.SDK.Settings
): VideoPlayer.SDK.Handlers => {
  const blockControls = initialSettings.blockControls

  const defaultScreen = {
    play: () => {
      if (blockControls) return
      const currentVideoState = getVideoStates(videoRefs.defaultScreen)
      const playState = {
        ...currentVideoState,
        play: true,
        autoplay: true,
        paused: false
      }

      updateRefWithState(videoRefs.defaultScreen, playState)
      videoState.updateState(videoRefs.defaultScreen, playState)
    },

    pause: () => {
      if (blockControls) return

      const currentVideoState = getVideoStates(videoRefs.defaultScreen)
      const playState = {
        ...currentVideoState,
        play: false,
        autoplay: false,
        paused: true
      }

      updateRefWithState(videoRefs.defaultScreen, playState)
      videoState.updateState(videoRefs.defaultScreen, playState)
    },

    togglePlayPause: () => {
      if (blockControls) return
      if (videoState.currentState.play) {
        defaultScreen.pause()
        return
      }

      defaultScreen.play()
    },

    mute: () => {
      const [audio] = videoState.audio
      if (blockControls) return
      if (!audio) return
      if (!videoRefs.defaultScreen.current) return
      if (blockControls) return

      const currentVideoState = getVideoStates(videoRefs.defaultScreen)

      currentVideoState.muted = !videoRefs.defaultScreen.current.muted
      updateRefWithState(videoRefs.defaultScreen, currentVideoState)
      videoState.updateState(videoRefs.defaultScreen, currentVideoState)
    }
  }

  const fullscreen = {
    play: () => {
      if (!initialSettings.allowFullscreen) return
      if (blockControls) return

      const currentVideoState = getVideoStates(videoRefs.fullscreen)
      const playState = {
        ...currentVideoState,
        play: true,
        autoplay: true,
        paused: false
      }

      updateRefWithState(videoRefs.fullscreen, playState)
      videoState.updateState(videoRefs.fullscreen, playState)

      const defaultScreenState = getVideoStates(videoRefs.fullscreen)
      const defaultScreenStateNext = {
        ...defaultScreenState,
        play: false,
        autoplay: false,
        paused: true
      }

      updateRefWithState(videoRefs.defaultScreen, defaultScreenStateNext)
    },

    pause: () => {
      if (!initialSettings.allowFullscreen) return
      if (blockControls) return

      const currentVideoState = getVideoStates(videoRefs.fullscreen)
      const playState = {
        ...currentVideoState,
        play: false,
        autoplay: false,
        paused: true
      }

      updateRefWithState(videoRefs.fullscreen, playState)
      videoState.updateState(videoRefs.fullscreen, playState)
      applyRefToRefSettings(videoRefs.fullscreen, videoRefs.defaultScreen)
    },

    togglePlayPause: () => {
      if (!initialSettings.allowFullscreen) return
      if (blockControls) return
      if (videoState.currentState.play) {
        fullscreen.pause()
        return
      }

      fullscreen.play()
    },
    mute: () => {
      const [audio] = videoState.audio
      if (!audio) return
      if (!videoRefs.fullscreen.current) return
      if (blockControls) return

      const currentVideoState = getVideoStates(videoRefs.fullscreen)

      currentVideoState.muted = !videoRefs.fullscreen.current.muted
      updateRefWithState(videoRefs.fullscreen, currentVideoState)
      videoState.updateState(videoRefs.fullscreen, currentVideoState)
    }
  }

  const player = {
    requestFullscreen: () => {
      if (!availableWindow()) return
      if (blockControls) return

      // stop any event actions in case the fullscreen is not allowed
      if (!initialSettings.allowFullscreen) return

      // in case the player is requested with native settings
      // request the player native fullscreen and exit from other operations
      if (initialSettings.nativeFullscreen) {
        videoRefs.defaultScreen.current?.requestFullscreen()
        return
      }

      // Request Fullscreen mode for the custom fullscreen player
      if (!document.fullscreenElement) {
        window.document.body.requestFullscreen()
        const [, setFullscreen] = videoState.fullscreenState
        setFullscreen(true)
      }
    },

    closeFullscreen: () => {
      if (blockControls) return

      // This method will be executed only of the player use the custom fullscreen
      if (document.fullscreenElement) {
        if (!availableWindow()) return

        if (initialSettings.nativeFullscreen) {
          return
        }

        document.exitFullscreen()
      }
    },

    resetCurrentTime: () => {
      if (blockControls) return

      if (videoRefs.defaultScreen.current) {
        videoRefs.defaultScreen.current.currentTime = 0
      }

      if (videoRefs.fullscreen.current) {
        videoRefs.fullscreen.current.currentTime = 0
      }

      const videoRef = videoRefs.fullscreen || videoRefs.defaultScreen
      const currentVideoState = getVideoStates(videoRef)

      updateRefWithState(videoRef, currentVideoState)
      videoState.updateState(videoRef, currentVideoState)
    }
  }

  return { defaultScreen, fullscreen, player }
}
