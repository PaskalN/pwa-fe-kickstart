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

  namespace SDK {
    interface HandlersProps {
      play: () => void
      pause: () => void
      mute: () => void
      togglePlayPause: () => void
    }
    interface Handlers {
      defaultScreen: HandlersProps
      fullscreen: HandlersProps
      player: {
        requestFullscreen: () => void
        closeFullscreen: () => void
        resetCurrentTime: () => void
      }
    }

    interface Events {
      onDefaultScreeen: () => void
      onOpenFullscreen: () => void
    }

    type CurrentState = {
      ref: React.RefObject<HTMLVideoElement> | null
      time: number
      play: boolean
      muted: boolean
      autoplay: boolean
      controls: boolean
      crossOrigin: string | null
      currentTime: number
      defaultMuted: boolean
      defaultPlaybackRate: number
      loop: boolean
      playbackRate: number
      preload: '' | 'none' | 'metadata' | 'auto'
      volume: number
      redo: boolean
    } & Record<string, unknown>

    interface References {
      defaultScreen: React.RefObject<HTMLVideoElement>
      fullscreen: React.RefObject<HTMLVideoElement>
    }

    interface VideoState {
      ref: React.RefObject<HTMLVideoElement>
      currentState: SDK.CurrentState
      setState: React.Dispatch<React.SetStateAction<SDK.CurrentState>>
      updateState: (_videoRef: React.RefObject<HTMLVideoElement>, _options?: SDK.UpdateStateOptions) => void
      fullscreenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
      audio: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    }

    interface Settings {
      fullscreen?: boolean
      time?: number
      muted?: boolean
      autoplay?: boolean
      controls?: boolean
      crossOrigin?: string | null
      currentTime?: number
      defaultMuted?: boolean
      defaultPlaybackRate?: number
      loop?: boolean
      playbackRate?: number
      preload?: '' | 'none' | 'metadata' | 'auto'
      volume?: number

      allowFullscreen?: boolean
      nativeFullscreen?: boolean
      blockControls?: boolean

      afterInit?: () => void
      beforeInit?: () => void
    }

    interface UpdateStateOptions {
      fullscreen?: boolean
      time?: number
      play?: boolean
      muted?: boolean
      ref?: React.RefObject<HTMLVideoElement> | null
      autoplay?: boolean
      controls?: boolean
      crossOrigin?: string | null
      currentTime?: number
      defaultMuted?: boolean
      defaultPlaybackRate?: number
      loop?: boolean
      playbackRate?: number
      preload?: '' | 'none' | 'metadata' | 'auto'
      volume?: number
      redo?: boolean
    }

    interface Definition {
      handlers: SDK.Handlers
      events: SDK.Events
      states: SDK.VideoState
      refs: SDK.References
      reinit: (_settings: SDK.Settings) => void
    }
  }
}
