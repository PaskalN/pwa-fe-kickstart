import React from 'react'

import { Flex, FlexProps, useModalContext } from '@chakra-ui/react'

const ModalCloseButton: React.FC<
  {
    children: React.ReactNode
  } & FlexProps
> = props => {
  const { children, ...rest } = props
  const { onClose } = useModalContext()

  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      w="s44"
      h="s44"
      right="0"
      top="0"
      onClick={onClose}
      data-component="modal-close-button"
      {...rest}
    >
      {children}
    </Flex>
  )
}
export default ModalCloseButton
