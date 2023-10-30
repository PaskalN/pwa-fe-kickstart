import { useEffect } from 'react'

import {
  applyRefToRefSettings,
  availableWindow,
  getVideoStates,
  hasAudio,
  playDefaultScreen,
  stopAll,
  updateRefWithState
} from './tools'

export const getEvents = (
  videoRefs: VideoPlayer.SDK.References,
  videoState: VideoPlayer.SDK.VideoState,

  initializedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
  initialSettings: VideoPlayer.SDK.Settings
): VideoPlayer.SDK.Events => {
  const states = videoState
  const [fullscreen] = states.fullscreenState
  const [initialized, setInitialized] = initializedState

  /**
   * @name synchronizeFromFullscreen
   *
   * @description Handler that applies fullscreen ref props to default screen ref props
   *
   * @returns void
   */
  const synchronizeFromFullscreen = () => {
    applyRefToRefSettings(videoRefs.fullscreen, videoRefs.defaultScreen)
  }

  /**
   * @name defaultPlayerEnded
   *
   * @description Reset Player Settings once the default player ends
   *
   * @returns void
   */
  const defaultPlayerEnded = () => {
    if (initialSettings.loop) return

    const currentState = getVideoStates(videoRefs.defaultScreen)
    const settings = {
      ...currentState,
      currentTime: 0,
      autoplay: false,
      play: false,
      paused: true
    }

    updateRefWithState(videoRefs.defaultScreen, settings)
    states.updateState(videoRefs.defaultScreen, settings)
  }

  /**
   * @name fullscreenPlayerEnded
   *
   * @description Reset Player Settings once the fullplayer ends
   *
   * @returns void
   */
  const fullscreenPlayerEnded = () => {
    if (initialSettings.loop) return

    const currentState = getVideoStates(videoRefs.fullscreen)
    const settings = {
      ...currentState,
      currentTime: 0,
      autoplay: false,
      play: false,
      paused: true
    }

    updateRefWithState(videoRefs.fullscreen, settings)
    states.updateState(videoRefs.fullscreen, settings)
  }

  /**
   * @name documentFullScreenChangeHandler
   *
   * @description Event Handler when document request fullscreen
   * The handler has two states - Fullscreen, Normalscreen
   * The handler sets fullscreen state when the screen changes
   *
   * @returns void
   */
  const documentFullScreenChangeHandler = (): void => {
    if (!availableWindow()) return
    const [, setFullscreen] = videoState.fullscreenState

    // In case native fullscreen - use the native browser player
    // Do not interact with states
    if (initialSettings.nativeFullscreen) {
      return
    }

    // Going Default Screen
    if (!document.fullscreenElement) {
      // 1. Synch Default Screen Ref Settings with Fullscreen Ref Settings
      synchronizeFromFullscreen()

      // 2.Indicate Default Screen
      setFullscreen(false)
      return
    }
  }

  /**
   * @name onInitialize
   *
   * @description Executes once the component is initialized by React and loads events for default screen
   *
   * @returns void
   */
  const onInitialize = (): void => {
    useEffect(() => {
      if (!availableWindow()) return

      document.addEventListener('fullscreenchange', documentFullScreenChangeHandler)
      videoRefs.defaultScreen.current?.addEventListener('ended', defaultPlayerEnded)

      return () => {
        if (!availableWindow()) return
        document.removeEventListener('fullscreenchange', documentFullScreenChangeHandler)
        videoRefs.defaultScreen.current?.removeEventListener('ended', defaultPlayerEnded)
      }
    }, [])
  }

  /**
   * @name onInitializeFullscreen
   *
   * @description Executes once the component is initialized by React and loads events for fullscreen
   *
   * @returns void
   */
  const onInitializeFullscreen = (): void => {
    useEffect(() => {
      if (!availableWindow()) return

      videoRefs.fullscreen.current?.addEventListener('ended', fullscreenPlayerEnded)

      return () => {
        if (!availableWindow()) return

        videoRefs.fullscreen.current?.removeEventListener('ended', fullscreenPlayerEnded)
      }
    }, [])
  }

  /**
   * @name onDefaultScreeen
   *
   * @description Watch initializer - Serves to handle all states when
   * the Video Player is ran by React in default screen mode
   *
   * @returns void
   */

  const onDefaultScreeen = (): void => {
    onInitialize()

    useEffect(() => {
      if (!videoRefs.defaultScreen.current) return
      states.updateState(videoRefs.defaultScreen)
    }, [videoRefs.defaultScreen])

    useEffect(() => {
      if (initialized || !states.currentState.ref?.current) return
      if (!videoRefs.defaultScreen.current) return

      if (initialSettings.afterInit) {
        initialSettings.afterInit()
      }

      const audio = hasAudio(videoRefs)
      const [, setAudio] = states.audio
      setAudio(audio)

      const currentState = getVideoStates(videoRefs.defaultScreen)
      const settings = {
        ...currentState,
        ...initialSettings,
        redo: true
      }

      updateRefWithState(videoRefs.defaultScreen, settings)
      states.updateState(videoRefs.defaultScreen, settings)
      setInitialized(true)

      if (initialSettings.afterInit) {
        initialSettings.afterInit()
      }
    }, [initialSettings, initialized, videoRefs.defaultScreen, states.currentState])

    useEffect(() => {
      if (!initialized || !states.currentState.ref?.current) return

      if (!states.currentState.redo) return

      // Wait until normal screen
      if (fullscreen) {
        return
      }

      if (states.currentState.play) {
        playDefaultScreen(videoRefs)
      } else {
        stopAll(videoRefs, videoState)
      }

      const currentState = getVideoStates(videoRefs.defaultScreen)
      const nextState = {
        ...currentState,
        ...{
          redo: false
        }
      }

      states.setState(nextState)
    }, [initialized, states.currentState])
  }

  /**
   * @name onOpenFullscreen
   *
   * @description Watch initializer - Serves to handle all states when
   * the Video Player is ran by React in fullscreen mode
   *
   * @returns void
   */
  const onOpenFullscreen = (): void => {
    const states = videoState
    const [fullscreen] = states.fullscreenState

    onInitializeFullscreen()

    useEffect(() => {
      // Stop the custom fullscreen if the conditions are available
      if (!videoRefs.fullscreen.current) return
      if (!initialSettings.allowFullscreen) return
      if (initialSettings.nativeFullscreen) return
      if (!fullscreen) return

      applyRefToRefSettings(videoRefs.defaultScreen, videoRefs.fullscreen)
      states.updateState(videoRefs.fullscreen)
    }, [videoRefs.fullscreen])
  }

  return {
    onDefaultScreeen,
    onOpenFullscreen
  }
}
