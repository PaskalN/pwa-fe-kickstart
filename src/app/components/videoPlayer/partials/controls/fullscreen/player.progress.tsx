import React, { useEffect, useState } from 'react'

import { Box } from '@chakra-ui/react'

const PlayerProgress: React.FC<{
  videoRef: React.RefObject<HTMLVideoElement>
}> = props => {
  const { videoRef } = props
  const [progress, setProgress] = useState<number>(0)

  const timeUpdate = (e: Event) => {
    const video = e.currentTarget as HTMLVideoElement
    const currentTime = video.currentTime
    const duration = video.duration

    const result = (currentTime / duration) * 100

    setProgress(result)
  }

  useEffect(() => {
    if (typeof window === undefined) return

    videoRef.current?.addEventListener('timeupdate', timeUpdate)

    return () => {
      if (!videoRef || !videoRef.current) return
      videoRef.current?.removeEventListener('timeupdate', timeUpdate)
    }
  }, [])

  return (
    <Box
      w="100%"
      justifyContent="center"
      flexDirection="column"
      data-component="control-progress-desktop"
      bg="rgba(255, 255, 255, 0.20);"
      h="s4"
    >
      <Box h="s4" w={`${progress}%`} bg="white"></Box>
    </Box>
  )
}

export default PlayerProgress
