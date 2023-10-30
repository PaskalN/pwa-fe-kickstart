import React from 'react'

import { Box, Flex, useBreakpointValue, useDisclosure } from '@chakra-ui/react'

// import BeltInstructions from '../contents/beltInstructions'
import BeltInstructions from '../contents/drawer.belt.instructions'
import { DisclosureContext } from '../context'
import OAuthModal from '../drawer/oAuthModal'
import GlobalDrawer from '../globalModal/drawer'
import DrawerContentBody from '../globalModal/drawerContentBody'
import ModalCloseButton from '../globalModal/modalCloseButton'
import Header from '../header'
import { MCMCloseButton } from '../mcmIcon'
import VideoPlayerFull from '../videoPlayer/players/VideoPlayerFull'
import useVideoPlayer from '../videoPlayerSDK/useVideoPlayer'

const InitialPage: React.FC<{}> = () => {
  const globalDisclosure = {
    OAUTH: useDisclosure(),
    GLOBAL: useDisclosure()
  }

  const active = useBreakpointValue(
    {
      base: true,
      s_m_ipad_mini: false
    },
    'false'
  )

  const videoContent = {
    thumbImage: 'https://i1.adis.ws/v/mcmworldwide/Step1_MCM_BELT_TUTORIAL_IMPERIAL',
    videos: {
      mp4: {
        p720: 'https://i1.adis.ws/v/mcmworldwide/Step1_MCM_BELT_TUTORIAL_IMPERIAL/mp4_720p',
        p480: 'https://i1.adis.ws/v/mcmworldwide/Step1_MCM_BELT_TUTORIAL_IMPERIAL/mp4_480p',
        p240: 'https://i1.adis.ws/v/mcmworldwide/Step1_MCM_BELT_TUTORIAL_IMPERIAL/mp4_240p'
      },
      webm: {
        p720: 'https://i1.adis.ws/v/mcmworldwide/Step1_MCM_BELT_TUTORIAL_IMPERIAL/webm_720p',
        p480: 'https://i1.adis.ws/v/mcmworldwide/Step1_MCM_BELT_TUTORIAL_IMPERIAL/webm_480p',
        p240: 'https://i1.adis.ws/v/mcmworldwide/Step1_MCM_BELT_TUTORIAL_IMPERIAL/webm_240p'
      }
    }
  }

  const settings = {
    autoplay: false,
    loop: true,
    muted: true,
    allowFullscreen: true,
    nativeFullscreen: active,
    currentTime: 6
  }

  const settings2 = {
    autoplay: false,
    loop: true,
    muted: true,
    allowFullscreen: true,
    nativeFullscreen: active
  }

  const videoSDK = useVideoPlayer(settings)
  const videoSDK2 = useVideoPlayer(settings2)

  return (
    <DisclosureContext.Provider value={globalDisclosure}>
      <Header />

      <video preload="metadata" autoPlay muted>
        <source
          src="https://images.mcmworldwide.com/v/mcmworldwide/MMBDATA01BK001_VID/mp4_720p?protocol=https"
          type="video/mp4"
        />
        <source
          src="https://images.mcmworldwide.com/v/mcmworldwide/MMBDATA01BK001_VID/mp4_480p?protocol=https"
          type="video/mp4"
        />
        <source
          src="https://images.mcmworldwide.com/v/mcmworldwide/MMBDATA01BK001_VID/mp4_240p?protocol=https"
          type="video/mp4"
        />
        <source
          src="https://images.mcmworldwide.com/v/mcmworldwide/MMBDATA01BK001_VID/webm_720p?protocol=https"
          type="video/webm"
        />
        <source
          src="https://images.mcmworldwide.com/v/mcmworldwide/MMBDATA01BK001_VID/webm_480p?protocol=https"
          type="video/webm"
        />
        <source
          src="https://images.mcmworldwide.com/v/mcmworldwide/MMBDATA01BK001_VID/webm_240p?protocol=https"
          type="video/webm"
        />
      </video>

      <GlobalDrawer
        disclosure={globalDisclosure.GLOBAL}
        h="90vh"
        headerComponent={
          <ModalCloseButton position="absolute" zIndex="100" borderRadius="s44" bg="neutral.30" top="s24" right="s24">
            <MCMCloseButton fontSize="s13" color="dark" cursor="pointer" />
          </ModalCloseButton>
        }
      >
        <DrawerContentBody paddingTop="s50">
          <BeltInstructions />
        </DrawerContentBody>
      </GlobalDrawer>

      <Flex flexDirection="row-reverse">
        <VideoPlayerFull videoSDK={videoSDK}>
          <Box as="source" src={videoContent.videos.mp4.p720}></Box>
          <Box as="source" src={videoContent.videos.mp4.p480}></Box>
          <Box as="source" src={videoContent.videos.mp4.p240}></Box>

          <Box as="source" src={videoContent.videos.webm.p720}></Box>
          <Box as="source" src={videoContent.videos.webm.p480}></Box>
          <Box as="source" src={videoContent.videos.webm.p240}></Box>
        </VideoPlayerFull>
      </Flex>

      <Flex flexDirection="row-reverse">
        <VideoPlayerFull videoSDK={videoSDK2}>
          <Box as="source" src={videoContent.videos.mp4.p720}></Box>
          <Box as="source" src={videoContent.videos.mp4.p480}></Box>
          <Box as="source" src={videoContent.videos.mp4.p240}></Box>

          <Box as="source" src={videoContent.videos.webm.p720}></Box>
          <Box as="source" src={videoContent.videos.webm.p480}></Box>
          <Box as="source" src={videoContent.videos.webm.p240}></Box>
        </VideoPlayerFull>
      </Flex>
      <OAuthModal />
    </DisclosureContext.Provider>
  )
}

export default InitialPage
