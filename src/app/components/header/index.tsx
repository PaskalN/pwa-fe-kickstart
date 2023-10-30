import React from 'react'

import { Button, Flex } from '@chakra-ui/react'

import { useProjectDisclosure } from '../context'

const Header: React.FC<{}> = () => {
  const disclosures = useProjectDisclosure()
  const oAuthDisclosure = disclosures?.OAUTH
  const global = disclosures?.GLOBAL

  return (
    <Flex>
      <Button variant="default" size="smb" colorScheme="default" onClick={() => oAuthDisclosure?.onOpen()}>
        Account
      </Button>

      <Button variant="default" size="smb" colorScheme="default" onClick={() => global?.onOpen()}>
        Open Gloval Drawer
      </Button>
    </Flex>
  )
}

export default Header
