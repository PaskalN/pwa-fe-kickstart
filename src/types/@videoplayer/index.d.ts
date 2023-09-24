declare namespace VideoPlayer {
  export type Content = {
    thumbImage: string
    videos: {
      mp4: {
        p720: string
        p480: string
        p240: string
      }
      webm: {
        p720: string
        p480: string
        p240: string
      }
    }
  }

  type States = {
    play: boolean
    stop: boolean
    desktopFullscreen: boolean
    videoProgress: number
    mute: boolean
    audio: boolean
    time: string
    videoElement: HTMLVideoElement | null
    videoHover: boolean
  }

  type Toggles = {
    toggleFullscreenHandler: () => void
    toggleMute: () => void
    togglePlay: () => void
  }

  type Handlers = {
    setVideoElement: React.Dispatch<React.SetStateAction<HTMLVideoElement | null>>
    setPause: React.Dispatch<React.SetStateAction<boolean>>
    setMute: React.Dispatch<React.SetStateAction<boolean>>
    setDesktopFullscreen: React.Dispatch<React.SetStateAction<boolean>>
    setProgress: React.Dispatch<React.SetStateAction<number>>
    setVideoHover: React.Dispatch<React.SetStateAction<boolean>>
  }

  interface Hook {
    playerStates: States | null
    toggles: Toggles
    handlers: Handlers
  }
}
