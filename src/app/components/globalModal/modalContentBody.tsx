import React from 'react'

import { Box, BoxProps, Flex } from '@chakra-ui/react'

const ModalContentBody: React.FC<
  {
    children: React.ReactNode
    offset?: string
    offsetX?: string
    offsetY?: string
  } & BoxProps
> = props => {
  const { offset, offsetY, offsetX, children, ...rest } = props

  const boxPropsOffset = {
    ...(offset ? { paddingLeft: offset, paddingRight: offset, paddingBottom: offset, paddingTop: offset } : {})
  }

  const boxPropsOffsetX = {
    ...(!offset && offsetX ? { paddingLeft: offsetX, paddingRight: offsetX } : {})
  }

  const boxPropsOffsetY = {
    ...(!offset && offsetY ? { paddingTop: offsetY, paddingBottom: offsetY } : {})
  }

  return (
    <Box
      data-component="modal-content-body"
      overflowX="hidden"
      overflowY="auto"
      h="100%"
      {...rest}
      __css={{ ...boxPropsOffset, ...boxPropsOffsetX, ...boxPropsOffsetY }}
    >
      {/* Content Body */}
      <Flex flexDirection="column" alignItems="center" justifyContent="center" h="100%" w="100%">
        {children}
      </Flex>
      {/* Content Body End*/}
    </Box>
  )
}

export default ModalContentBody
