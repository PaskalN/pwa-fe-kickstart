/**
 * @name availableWindow
 *
 * @description Tool that detects is the window object available
 * Usefull when SRR
 *
 * @returns boolean
 */
export const availableWindow = (): boolean => {
  return typeof window !== undefined
}

/**
 * @name checkVideoPlayState
 *
 * @description Returns the play state for the given video ref
 *
 * @param videoElement HTMLVideoElement | null [optional]
 * @returns boolean
 */
export const checkVideoPlayState = (videoElement?: HTMLVideoElement | null): boolean => {
  if (!videoElement) return false

  return !!(videoElement.currentTime > 0 && !videoElement.paused && !videoElement.ended && videoElement.readyState > 2)
}

/**
 * @name stopAll
 *
 * @description Pause default screen and fullscreen if such exists
 * In case of existing fullscreen after pause the views are synchronized
 *
 * @param videoRefs VideoPlayer.SDK.References
 * @param videoState VideoPlayer.SDK.VideoState
 */
export const stopAll = (videoRefs: VideoPlayer.SDK.References, videoState: VideoPlayer.SDK.VideoState): void => {
  const defaultScreenRef = videoRefs.defaultScreen
  const fullscreenRef = videoRefs.fullscreen

  if (fullscreenRef.current) {
    fullscreenRef.current?.pause()
    const currentState = getVideoStates(fullscreenRef)
    const settings = getUpdatedSettings(currentState, {})
    updateRefWithState(fullscreenRef, settings)

    if (defaultScreenRef.current) {
      defaultScreenRef.current?.pause()
      defaultScreenRef.current.currentTime = fullscreenRef.current?.currentTime || 0
      updateRefWithState(defaultScreenRef, settings)
    }

    videoState.updateState(fullscreenRef)
  }

  if (defaultScreenRef.current) {
    defaultScreenRef.current?.pause()
    const currentState = getVideoStates(defaultScreenRef)
    const settings = getUpdatedSettings(currentState, {})

    defaultScreenRef.current.currentTime = fullscreenRef.current?.currentTime || 0

    updateRefWithState(defaultScreenRef, settings)
    videoState.updateState(defaultScreenRef)
  }
}

/**
 * @name playDefaultScreen
 *
 * @description Starts the Default Screen view
 *
 * @param videoRefs VideoPlayer.SDK.References
 */
export const playDefaultScreen = (videoRefs: VideoPlayer.SDK.References): void => {
  const defaultScreenRef = videoRefs.defaultScreen
  const fullscreenRef = videoRefs.fullscreen

  const isPlayingDefaultScreen = checkVideoPlayState(defaultScreenRef.current)
  const isPlayingFullscreen = checkVideoPlayState(fullscreenRef.current)

  if (!isPlayingDefaultScreen) {
    defaultScreenRef.current?.play().finally(() => {
      if (isPlayingFullscreen) {
        fullscreenRef.current?.pause()
      }
    })
  } else {
    if (isPlayingFullscreen) {
      fullscreenRef.current?.pause()
    }
  }
}

/**
 * @name hasAudio
 *
 * @description Checks if the given video source has audio layer
 *
 * @param videoRefs VideoPlayer.SDK.References
 * @returns boolean
 */
export const hasAudio = (videoRefs: VideoPlayer.SDK.References): boolean => {
  if (!videoRefs.defaultScreen.current) return false

  const video = videoRefs.defaultScreen.current

  if ('mozHasAudio' in video && video.mozHasAudio) {
    return !!video.mozHasAudio
  }

  if ('webkitAudioDecodedByteCount' in video && video.webkitAudioDecodedByteCount) {
    return !!video.webkitAudioDecodedByteCount
  }

  if ('audioTracks' in video && video.audioTracks) {
    const audioTracks = video.audioTracks as Array<unknown>
    return !!audioTracks.length
  }

  return false
}

/**
 * @name getVideoStates
 *
 * @description Returns the video state object from the given Video React Reference
 *
 * @param videoRef React.RefObject<HTMLVideoElement>
 * @returns VideoPlayer.SDK.CurrentState
 */
export const getVideoStates = (videoRef: React.RefObject<HTMLVideoElement>): VideoPlayer.SDK.CurrentState => {
  const video = videoRef.current

  if (!video) {
    return {
      ref: null,
      time: 0,
      play: false,
      autoplay: false,
      controls: false,
      crossOrigin: null,
      currentTime: 0,
      defaultMuted: false,
      defaultPlaybackRate: 0,
      loop: false,
      muted: false,
      playbackRate: 0,
      preload: '',
      volume: 0,
      redo: false
    }
  }

  return {
    ref: videoRef,
    time: video.currentTime || 0,
    play: video.autoplay,
    autoplay: video.autoplay,
    controls: video.controls,
    crossOrigin: video.crossOrigin,
    currentTime: video.currentTime,
    defaultMuted: video.defaultMuted,
    defaultPlaybackRate: video.defaultPlaybackRate,
    loop: video.loop,
    muted: video.muted,
    playbackRate: video.playbackRate,
    preload: video.preload,
    volume: video.volume,
    redo: false
  }
}

/**
 * @name applyRefToRefSettings
 *
 * @description Handler that applies the settings from one video api to another video video api
 *
 * @param refFrom React.RefObject<HTMLVideoElement>
 * @param refTo React.RefObject<HTMLVideoElement>
 * @returns void
 */
export const applyRefToRefSettings = (
  refFrom: React.RefObject<HTMLVideoElement>,
  refTo: React.RefObject<HTMLVideoElement>
): void => {
  if (!refFrom.current || !refTo.current) return

  const fromSettings = getVideoStates(refFrom)

  refTo.current.autoplay = fromSettings.autoplay
  refTo.current.controls = fromSettings.controls
  refTo.current.crossOrigin = fromSettings.crossOrigin
  refTo.current.currentTime = fromSettings.currentTime
  refTo.current.defaultMuted = fromSettings.defaultMuted
  refTo.current.defaultPlaybackRate = fromSettings.defaultPlaybackRate
  refTo.current.loop = fromSettings.loop
  refTo.current.muted = fromSettings.muted
  refTo.current.playbackRate = fromSettings.playbackRate
  refTo.current.preload = fromSettings.preload
  refTo.current.volume = fromSettings.volume

  if (fromSettings.play) {
    refTo.current.play()
  } else {
    refTo.current.pause()
  }
}

/**
 * @name updateRefWithState
 *
 * @description Handler that updates video api with given State object
 *
 * @param videoRef React.RefObject<HTMLVideoElement>
 * @param state VideoPlayer.SDK.CurrentState
 * @returns void
 */
export const updateRefWithState = (
  videoRef: React.RefObject<HTMLVideoElement>,
  state: VideoPlayer.SDK.CurrentState
): void => {
  if (!videoRef.current) return

  videoRef.current.autoplay = state.autoplay
  videoRef.current.controls = state.controls
  videoRef.current.crossOrigin = state.crossOrigin
  videoRef.current.currentTime = state.currentTime
  videoRef.current.defaultMuted = state.defaultMuted
  videoRef.current.defaultPlaybackRate = state.defaultPlaybackRate
  videoRef.current.loop = state.loop
  videoRef.current.muted = state.muted
  videoRef.current.playbackRate = state.playbackRate
  videoRef.current.preload = state.preload
  videoRef.current.volume = state.volume

  if (state.play) {
    videoRef.current.play()
  } else {
    videoRef.current.pause()
  }
}

/**
 * @name getUpdatedSettings
 *
 * @description Simple tool that returns overwriten state object
 *
 * @param state VideoPlayer.SDK.CurrentState
 * @param settings VideoPlayer.SDK.UpdateStateOptions
 * @returns VideoPlayer.SDK.CurrentState
 */
export const getUpdatedSettings = (
  state: VideoPlayer.SDK.CurrentState,
  settings: VideoPlayer.SDK.UpdateStateOptions
): VideoPlayer.SDK.CurrentState => {
  const result = { ...state, ...settings }

  result.play = result.autoplay

  return result
}
