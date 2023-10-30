// import React from 'react'
import React, { useEffect } from 'react'

import { Box, Button, Flex, Heading, Show, Text, useBreakpointValue } from '@chakra-ui/react'
import { OptionsType } from 'embla-carousel/components/Options'

import { EmblaCarousel, EmblaSlide } from '../emblaCarousel'
import useCarouselApiState from '../emblaComponents/carousel.api.state'
import Navigator from '../emblaComponents/carousel.navigator'

import { MCMPlay } from '../mcmIcon'
import VideoPlayerFull from '../videoPlayer/players/VideoPlayerFull'
import PlayerWrapperPlayButton from '../videoPlayer/wrappers/playButton'
import useVideoPlayer from '../videoPlayerSDK/useVideoPlayer'

const BeltInstructions: React.FC<{}> = () => {
  const apiCarousel = useCarouselApiState([])

  // Static
  const apiState = {
    carouselApi: apiCarousel.EmblaCarouselApi.value,
    setCarouselApi: apiCarousel.EmblaCarouselApi.setEmblaCarouselApi
  }

  // Carousel Options
  const carouselOptions: Partial<OptionsType> = {
    loop: false,
    align: 'start',
    active: true,
    dragFree: false
  }

  const videoContent = {
    thumbImage: 'https://i1.adis.ws/v/mcmworldwide/Step2_MCM_BELT_TUTORIAL_IMPERIAL?w=1152',
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

  const active = useBreakpointValue(
    {
      base: true,
      s_m_ipad_mini: false
    },
    'false'
  )

  const settings = {
    autoplay: false,
    loop: true,
    muted: true,
    allowFullscreen: true,
    nativeFullscreen: active
  }

  const VideoSDKs: Array<VideoPlayer.SDK.Definition> = [useVideoPlayer(settings), useVideoPlayer(settings)]

  useEffect(() => {
    if (!apiCarousel.currentIndex.value) return

    const index = apiCarousel.currentIndex.value - 1
    const videoSDK = VideoSDKs[index]

    VideoSDKs.forEach(api => {
      api.handlers.defaultScreen.pause()
      api.reinit({
        blockControls: true,
        currentTime: 0,
        autoplay: false
      })
    })

    videoSDK.reinit({
      blockControls: false,
      currentTime: 0,
      autoplay: true
    })
  }, [apiCarousel.currentIndex.value])

  return (
    <>
      <Box layerStyle="pageSegment" gap="s16" flexDirection="column" justifyContent="flex-start">
        <Flex px="s24">
          <Heading as="h2" variant="default" size="f_T2" className="tt-uc">
            How to resize your belt
          </Heading>
        </Flex>

        <Flex px="s24">
          <Text
            variant="default"
            size="f_body_M"
            maxW={{
              base: '100%',
              l_xl: '50%'
            }}
          >
            You can stop by any MCM location to have your belt sized, or follow these quick and simple DIY instructions
            at home.
          </Text>
        </Flex>

        <Flex px="s24" direction="column">
          <Show above="l_xl">
            <Flex w="100%">
              <Navigator apiState={apiCarousel} bg="white" />
            </Flex>
          </Show>
          <Flex w="100%">
            <EmblaCarousel apiState={apiState} options={carouselOptions} variant="default" size="videoInstructions">
              {VideoSDKs.map((config, index) => {
                const active = apiCarousel.currentIndex.value - 1 === index
                const ButtonElement = (
                  <Button
                    variant="default"
                    colorScheme="video_play"
                    size="lgb"
                    px="s24"
                    onClick={() => {
                      apiState.carouselApi?.scrollTo(index)
                    }}
                  >
                    <Text variant="button_text" size="f_button_M">
                      <MCMPlay marginRight="s8" />
                      Play Video
                    </Text>
                  </Button>
                )

                return (
                  <EmblaSlide variant="default" size="videoInstructions" key={index}>
                    <Flex flexDirection="column" gap="s16">
                      <PlayerWrapperPlayButton active={active} innerContent={ButtonElement}>
                        <VideoPlayerFull videoSDK={config} videoPoster={videoContent.thumbImage} active={active}>
                          {videoContent.videos.mp4.p720 && <Box as="source" src={videoContent.videos.mp4.p720}></Box>}
                          {videoContent.videos.mp4.p480 && <Box as="source" src={videoContent.videos.mp4.p480}></Box>}
                          {videoContent.videos.mp4.p240 && <Box as="source" src={videoContent.videos.mp4.p240}></Box>}

                          {videoContent.videos.webm.p720 && <Box as="source" src={videoContent.videos.webm.p720}></Box>}
                          {videoContent.videos.webm.p480 && <Box as="source" src={videoContent.videos.webm.p480}></Box>}
                          {videoContent.videos.webm.p240 && <Box as="source" src={videoContent.videos.webm.p240}></Box>}
                        </VideoPlayerFull>
                      </PlayerWrapperPlayButton>
                      <Text variant="default" size="f_body_M">
                        Step 1: Make sure to gather these tools: a measuring tape, a pair of scissors and a flathead
                        screwdriver.
                      </Text>
                    </Flex>
                  </EmblaSlide>
                )
              })}
            </EmblaCarousel>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default BeltInstructions
