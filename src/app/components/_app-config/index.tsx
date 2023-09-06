import React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import theme from '../../theme'

const AppConfig: React.FC<{
  children: React.ReactElement | Array<React.ReactElement>
}> = props => {
  const { children } = props
  const themeExt = extendTheme(theme)

  return (
    <>
      <ChakraProvider theme={themeExt}>{children}</ChakraProvider>
    </>
  )
}

export default AppConfig
