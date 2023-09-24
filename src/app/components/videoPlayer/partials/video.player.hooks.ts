import { useEffect, useState } from 'react'

export const mobileState = {
  base: true,
  l_xl: false
}

function hasAudio(video?: HTMLVideoElement | null): boolean {
  if (!video) return false

  if ('mozHasAudio' in video) {
    return !!video.mozHasAudio
  }

  if ('webkitAudioDecodedByteCount' in video) {
    return !!video.webkitAudioDecodedByteCount
  }

  if ('audioTracks' in video) {
    const audioTracks = video.audioTracks

    if (audioTracks && typeof audioTracks === 'object' && 'length' in audioTracks) {
      return !!audioTracks.length
    }
  }

  return false
}

function getTimeString(video?: HTMLVideoElement | null): string {
  if (!video) return '00:00'

  const currentTime = video.currentTime

  const h = Math.floor(currentTime / 3600)
  const m = Math.floor(currentTime / 60)
  const s = Math.floor(currentTime % 60)

  const hs = h.toString().length < 2 ? `0${h}` : h
  const ms = m.toString().length < 2 ? `0${m}` : m
  const ss = s.toString().length < 2 ? `0${s}` : s

  if (!h) {
    return `${ms}:${ss}`
  }

  return `${hs}:${ms}:${ss}`
}

export const useVideoState = (): VideoPlayer.Hook => {
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null)
  const [pause, setPause] = useState<boolean>(true)
  const [mute, setMute] = useState<boolean>(false)
  const [desktopFullscreen, setDesktopFullscreen] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [playerStates, setPlayerStates] = useState<VideoPlayer.States | null>(null)
  const [videoHover, setVideoHover] = useState<boolean>(false)

  const getPlayerState = (videoElement?: HTMLVideoElement | null) => {
    if (!videoElement) return

    const play = !!(
      videoElement.currentTime > 0 &&
      !videoElement.paused &&
      !videoElement.ended &&
      videoElement.readyState > 2
    )
    const stop = !play
    const videoProgress = (videoElement.currentTime / videoElement.duration) * 100
    const audio = hasAudio(videoElement)
    const duration = videoElement?.duration
    const time = getTimeString(videoElement)

    return {
      play,
      stop,
      desktopFullscreen,
      videoProgress,
      mute,
      audio,
      duration,
      videoElement,
      time,
      videoHover
    }
  }

  useEffect(() => {
    if (!videoElement) return
    const state = getPlayerState(videoElement)

    if (state) {
      setPlayerStates(state)
    }
  }, [videoElement, pause, mute, desktopFullscreen, progress, videoHover])

  // Effect: Watch Escape hit
  useEffect(() => {
    if (typeof document === undefined) return

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setDesktopFullscreen(false)
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [])

  const togglePlay = () => {
    if (!videoElement) return

    if (videoElement.paused || videoElement.ended) {
      videoElement.play()
      return
    }

    videoElement.pause()
  }

  const toggleFullscreenHandler = () => {
    if (desktopFullscreen) {
      setDesktopFullscreen(false)
      return
    }

    setDesktopFullscreen(true)
  }

  const toggleMute = () => {
    // if (!element || !videoState.hasAudio) return
    if (!videoElement) return

    videoElement.muted = !videoElement.muted
    setMute(videoElement.muted)
  }

  return {
    playerStates,
    toggles: {
      toggleFullscreenHandler,
      toggleMute,
      togglePlay
    },
    handlers: {
      setVideoElement,
      setPause,
      setMute,
      setDesktopFullscreen,
      setProgress,
      setVideoHover
    }
  }
}
