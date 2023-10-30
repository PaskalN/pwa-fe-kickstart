import { useRef } from 'react'

export const getReferences = (): VideoPlayer.SDK.References => {
  const defaultScreen = useRef<HTMLVideoElement>(null)
  const fullscreen = useRef<HTMLVideoElement>(null)

  return {
    defaultScreen,
    fullscreen
  }
}
