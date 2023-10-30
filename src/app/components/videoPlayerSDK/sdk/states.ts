import { useState } from 'react'

import { getVideoStates } from './tools'

export const createState = (videoRef: React.RefObject<HTMLVideoElement>): VideoPlayer.SDK.VideoState => {
  const updateState = (
    videoRef: React.RefObject<HTMLVideoElement>,
    options?: VideoPlayer.SDK.UpdateStateOptions
  ): void => {
    const stateOptions = options || {}

    const currentState = getVideoStates(videoRef)

    const state = {
      ...currentState,
      ...stateOptions
    }

    setState(state)
  }

  const state = getVideoStates(videoRef)

  const [currentState, setState] = useState<VideoPlayer.SDK.CurrentState>(state)
  const fullscreenState = useState<boolean>(false)
  const audio = useState<boolean>(false)

  const returnedResult = {
    ref: videoRef,
    currentState,
    setState,
    updateState,
    fullscreenState,
    audio
  }

  return returnedResult
}
