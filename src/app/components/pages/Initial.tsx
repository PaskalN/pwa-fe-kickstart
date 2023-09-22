import React from 'react'

import { useDisclosure } from '@chakra-ui/react'

import { DisclosureContext } from '../context'
import OAuthModal from '../drawer/oAuthModal'
import Header from '../header'

const InitialPage: React.FC<{}> = () => {
  const globalDisclosure = {
    OAUTH: useDisclosure()
  }

  return (
    <DisclosureContext.Provider value={globalDisclosure}>
      <Header />

      <OAuthModal />
    </DisclosureContext.Provider>
  )
}

export default InitialPage
