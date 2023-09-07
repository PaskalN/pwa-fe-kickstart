import React from 'react'

import { Button, Flex } from '@chakra-ui/react'

import { useProjectDisclosure } from '../context'

const Header: React.FC<{}> = () => {
  const disclosures = useProjectDisclosure()
  const oAuthDisclosure = disclosures?.OAUTH

  return (
    <Flex>
      <Button variant="default" size="smb" colorScheme="default" onClick={() => oAuthDisclosure?.onOpen()}>
        Account
      </Button>
    </Flex>
  )
}

export default Header
