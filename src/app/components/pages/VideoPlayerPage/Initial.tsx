import React from 'react'

import { AspectRatio } from '@chakra-ui/react'

import Header from '../../header'

import VideoPlayer from '../../videoPlayer'

const data = {
  thumbImage: 'https://images.mcmworldwide.com/v/mcmworldwide/MWTCSSX01J8001_VID',
  videos: {
    mp4: {
      p720: 'https://images.mcmworldwide.com/v/mcmworldwide/MWTCSSX01J8001_VID/mp4_720p?protocol=https',
      p480: 'https://images.mcmworldwide.com/v/mcmworldwide/MWTCSSX01J8001_VID/mp4_480p?protocol=https',
      p240: 'https://images.mcmworldwide.com/v/mcmworldwide/MWTCSSX01J8001_VID/mp4_240p?protocol=https'
    },
    webm: {
      p720: 'https://images.mcmworldwide.com/v/mcmworldwide/MWTCSSX01J8001_VID/webm_720p?protocol=https',
      p480: 'https://images.mcmworldwide.com/v/mcmworldwide/MWTCSSX01J8001_VID/webm_480p?protocol=https',
      p240: 'https://images.mcmworldwide.com/v/mcmworldwide/MWTCSSX01J8001_VID/webm_240p?protocol=https'
    }
  }
}

const VideoPlayerPage: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <AspectRatio ratio={1} w="600px">
        <VideoPlayer videoContents={[data]} />
      </AspectRatio>
    </>
  )
}

export default VideoPlayerPage
