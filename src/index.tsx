import React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { render } from 'react-dom'

import { Fonts } from './app/components/fonts'

import InitialPage from './app/components/pages/Initial'

// import VideoPlayerPage from './app/components/pages/VideoPlayerPage/Initial'

import theme from './app/theme'

const themeExt = extendTheme(theme)

render(
  <div>
    <ChakraProvider theme={themeExt}>
      <Fonts />

      <InitialPage />
      {/* <VideoPlayerPage /> */}
    </ChakraProvider>
  </div>,
  document.getElementById('root')
)
