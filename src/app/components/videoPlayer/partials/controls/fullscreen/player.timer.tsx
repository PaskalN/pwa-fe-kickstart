import React, { useEffect, useState } from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'

const PlayerTimer: React.FC<{
  videoRef: React.RefObject<HTMLVideoElement>
}> = props => {
  const { videoRef } = props

  const [time, setTime] = useState<string>('00:00')

  const getTimeString = (
    time: number
  ): {
    hours: number
    minutes: number
    seconds: number
    fullString: string
  } => {
    const num = Math.floor(time)

    const hours = num / 3600
    const rhours = Math.floor(hours)

    const minutes = (num - rhours * 3600) / 60
    const rminutes = Math.round(minutes)
    const min = rminutes || 0

    const seconds = num - rhours * 3600 - rminutes * 60
    const rseconds = Math.round(seconds)
    const sec = rseconds || 0

    const fullString = `${rhours ? rhours.toString() + ':' : ''}${
      min < 10 ? '0' + min.toString() + ':' : min.toString() + ':'
    }${sec < 10 ? '0' + sec.toString() : sec.toString()}`

    return {
      hours: rhours,
      minutes: rminutes,
      seconds: seconds,
      fullString
    }
  }

  const timeUpdate = (e: Event) => {
    const video = e.currentTarget as HTMLVideoElement
    const currentTime = video.currentTime
    setTime(getTimeString(currentTime).fullString)
  }

  useEffect(() => {
    if (typeof window === undefined) return

    videoRef.current?.addEventListener('timeupdate', timeUpdate)

    return () => {
      if (!videoRef.current) return
      videoRef.current?.removeEventListener('timeupdate', timeUpdate)
    }
  }, [])

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box data-component="control-timer" border="1px solid" borderColor="white" borderRadius="s4">
        <Text variant="default" size="f_body_XS" color="white" px="s6">
          {time}
        </Text>
      </Box>
    </Flex>
  )
}

export default PlayerTimer
