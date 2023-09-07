import React from 'react'

import { Heading } from '@chakra-ui/react'

import { Page, pageGetProps } from './index.getProps'

const Home: Page = () => {
  return (
    <Heading as="h1" variant="default" size="f_T1">
      Home Page
    </Heading>
  )
}

Home.getProps = async _props => await pageGetProps(_props)

Home.getTemplateName = () => 'Home Page'

export default Home
