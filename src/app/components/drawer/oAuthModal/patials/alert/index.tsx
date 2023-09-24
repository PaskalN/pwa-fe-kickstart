import React, { useState } from 'react'

import { HStack, Text } from '@chakra-ui/react'

import { MCMCloseButtonDrawer, MCMError } from '../../../../mcmIcon'

const FormAlert: React.FC<{
  message?: string
  state?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}> = props => {
  const { message = '', state = useState<boolean>(false) } = props
  const [show, setShow] = state

  if (!show) return null

  return (
    <HStack
      alignItems="stretch"
      borderRadius="s4"
      border="0.075rem solid"
      borderColor="system_redish.100"
      p="s16"
      gap="s16"
      justifyContent="space-between"
    >
      <HStack gap="s8" alignItems="flex-start">
        <MCMError fontSize="s24" color="system_redish.100" />
        <Text variant="default" size="f_body_M" color="system_redish.100">
          {message}
        </Text>
      </HStack>
      <MCMCloseButtonDrawer color="system_redish.100" fontSize="s14" onClick={() => setShow(false)} cursor="pointer" />
    </HStack>
  )
}
export default FormAlert
