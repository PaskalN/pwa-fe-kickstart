import React from 'react'

import { Heading } from '@chakra-ui/react'

import { Page, pageGetProps } from './index.getProps'

const Error: Page = () => {
  return <Heading as="h1">Error Page</Heading>
}

Error.getProps = async _props => await pageGetProps(_props)

Error.getTemplateName = () => 'Error Page'

export default Error
