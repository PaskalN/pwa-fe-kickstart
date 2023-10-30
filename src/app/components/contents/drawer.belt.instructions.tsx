import React, { useEffect, useState } from 'react'

import { Box, Button, Flex, Heading, Show, Text, useBreakpointValue } from '@chakra-ui/react'
import { OptionsType } from 'embla-carousel/components/Options'

import { content } from './content'

import { ParseTemplateCarouselType, parseVideoContent } from '../../utils/amplience-content-parser'
import { EmblaCarousel, EmblaSlide } from '../emblaCarousel'
import useCarouselApiState from '../emblaComponents/carousel.api.state'

import Navigator from '../emblaComponents/carousel.navigator'

import { MCMPlay } from '../mcmIcon'

import VideoPlayerFull from '../videoPlayer/players/VideoPlayerFull'
import PlayerWrapperPlayButton from '../videoPlayer/wrappers/playButton'
import useVideoPlayer from '../videoPlayerSDK/useVideoPlayer'

const BeltInstructions: React.FC<{}> = () => {
  const BeltContentRaw = content as unknown as Amplience.Content.AmplienceContent
  const beltContent = parseVideoContent(BeltContentRaw)

  const apiCarousel = useCarouselApiState([])
  const [firstInitialization, setInitialization] = useState<boolean>(false)

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

  interface VideoSDKType extends ParseTemplateCarouselType {
    api: VideoPlayer.SDK.Definition
  }

  const VideoSDKs: Array<VideoSDKType> = []

  if (beltContent?.templateCarousel) {
    beltContent.templateCarousel.forEach(segment => {
      const startSettings = {
        ...settings,
        ...segment.settings
      }

      startSettings.autoplay = false

      const api = useVideoPlayer(startSettings)

      const result = {
        ...segment,
        api
      }

      VideoSDKs.push(result)
    })
  }

  useEffect(() => {
    if (!apiCarousel.currentIndex.value) return

    const index = apiCarousel.currentIndex.value - 1
    const videoSDK = VideoSDKs[index]

    VideoSDKs.forEach(content => {
      if (!content.api.states.currentState.play) return
      content.api.handlers.defaultScreen.pause()
      content.api.reinit({
        blockControls: true,
        currentTime: 0,
        autoplay: false
      })
    })

    videoSDK.api.reinit({
      blockControls: false,
      currentTime: 0,
      autoplay: !firstInitialization ? !!videoSDK.settings.autoplay : true
    })

    if (!firstInitialization && apiCarousel.currentIndex.value !== 1) {
      setInitialization(true)
    }
  }, [apiCarousel.currentIndex.value, firstInitialization])

  const getH = (
    incomming?: string,
    defaultValue?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  ): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' => {
    if (!incomming) return defaultValue || 'h2'

    const incHType = incomming.toLocaleLowerCase()

    if (incHType === 'h1') return 'h1'
    if (incHType === 'h2') return 'h2'
    if (incHType === 'h3') return 'h3'
    if (incHType === 'h4') return 'h4'
    if (incHType === 'h5') return 'h5'
    if (incHType === 'h6') return 'h6'

    return defaultValue || 'h2'
  }

  return (
    <>
      <Box layerStyle="pageSegment" gap="s16" flexDirection="column" justifyContent="flex-start">
        {beltContent?.tempalte.title && (
          <Flex px="s24">
            <Heading
              as={getH(beltContent?.tempalte.titleStyle?.toString().toLocaleLowerCase())}
              variant="default"
              size="f_T2"
              className="tt-uc"
              dangerouslySetInnerHTML={{
                __html: beltContent?.tempalte.title
              }}
            />
          </Flex>
        )}

        {beltContent?.tempalte.description && (
          <Flex px="s24">
            <Text
              as="p"
              variant="default"
              size="f_body_M"
              maxW={{
                base: '100%',
                l_xl: '50%'
              }}
              dangerouslySetInnerHTML={{
                __html: beltContent?.tempalte.description
              }}
            />
          </Flex>
        )}

        {VideoSDKs.length && (
          <Flex px="s24" direction="column">
            <Show above="l_xl">
              <Flex w="100%">
                <Navigator apiState={apiCarousel} bg="white" />
              </Flex>
            </Show>
            <Flex w="100%">
              <EmblaCarousel apiState={apiState} options={carouselOptions} variant="default" size="videoInstructions">
                {VideoSDKs.map((content, index) => {
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
                          <VideoPlayerFull videoSDK={content.api} videoPoster={content.videoImage.src} active={active}>
                            {content.source.map((segment, index) => (
                              <Box as="source" src={segment} key={index} />
                            ))}
                          </VideoPlayerFull>
                        </PlayerWrapperPlayButton>

                        {content.caption && (
                          <Text
                            variant="default"
                            size="f_body_M"
                            dangerouslySetInnerHTML={{
                              __html: content.caption
                            }}
                          />
                        )}
                      </Flex>
                    </EmblaSlide>
                  )
                })}
              </EmblaCarousel>
            </Flex>
          </Flex>
        )}
      </Box>
    </>
  )
}

export default BeltInstructions
