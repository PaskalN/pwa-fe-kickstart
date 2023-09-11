import React from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { MCMRequire } from '../mcmIcon'

const InputLabel: React.FC<{
  text?: string
  required?: boolean
}> = props => {
  const { text = '', required = false } = props

  if (!text) return null

  return (
    <Flex gap="s4">
      <Text as="span" variant="default" size="f_body_S" fontWeight="bold">
        {text}
      </Text>
      {required && <MCMRequire w="s8" h="s8" color="red" />}
    </Flex>
  )
}
export default InputLabel
