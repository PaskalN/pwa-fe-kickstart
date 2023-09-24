import React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { render } from 'react-dom'

import { Fonts } from './app/components/fonts'

import InitialPage from './app/components/pages/Initial'
import theme from './app/theme'

const themeExt = extendTheme(theme)

render(
  <div>
    <ChakraProvider theme={themeExt}>
      <Fonts />

      <InitialPage />
    </ChakraProvider>
  </div>,
  document.getElementById('root')
)
