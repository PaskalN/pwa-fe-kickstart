import React from 'react'

import { useDisclosure } from '@chakra-ui/react'
import { Outlet, useLoaderData } from 'react-router-dom'

import { DisclosureContext } from '../context'

import OAuthModal from '../drawer/oAuthModal'
import Header from '../header'

const App: React.FC<{}> = () => {
  const loaderData = useLoaderData()

  const globalDisclosure = {
    OAUTH: useDisclosure()
  }

  return (
    <>
      <DisclosureContext.Provider value={globalDisclosure}>
        <Header />
        <Outlet context={loaderData} />

        <OAuthModal />
      </DisclosureContext.Provider>
    </>
  )
}

export default App
