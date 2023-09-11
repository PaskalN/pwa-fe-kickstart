import React from 'react'

import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex } from '@chakra-ui/react'

import OAuthContent from './patials/OAuthContent'

import { useProjectDisclosure } from '../../context'

import { MCMCloseButtonDrawer } from '../../mcmIcon'

const OAuthModal: React.FC<{}> = () => {
  const disclosures = useProjectDisclosure()
  const oAuthDisclosure = disclosures?.OAUTH

  if (!oAuthDisclosure) return null

  const { isOpen, onClose } = oAuthDisclosure

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} variant="oAuth">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex w="s30" h="s30" alignItems="center" justifyContent="center">
              <MCMCloseButtonDrawer color="dark" fontSize="s24" onClick={() => onClose()} cursor="pointer" />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <OAuthContent />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default OAuthModal
