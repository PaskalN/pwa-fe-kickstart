import React from 'react'

import { HStack, Text } from '@chakra-ui/react'

import { MCMCircleCheck, MCMCircleEmpty, MCMCircleError } from '../../../../mcmIcon'

const ValidationBullet: React.FC<{
  message?: string
  status?: number
}> = props => {
  const { message = '', status = 0 } = props

  return (
    <HStack>
      {status === 0 && <MCMCircleEmpty fontSize="s18" w="s18" h="s18" gap="s12" />}
      {status === 1 && <MCMCircleCheck fontSize="s18" w="s18" h="s18" gap="s12" color="gold.100" />}
      {status === 2 && <MCMCircleError fontSize="s18" w="s18" h="s18" gap="s12" color="system_redish.100" />}

      <Text variant="default" size="f_body_S">
        {message}
      </Text>
    </HStack>
  )
}
export default ValidationBullet
