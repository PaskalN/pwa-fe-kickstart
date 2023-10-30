import React from 'react'

import { Flex, FlexProps } from '@chakra-ui/react'

const DrawerContentBody: React.FC<
  {
    children: React.ReactNode
  } & FlexProps
> = props => {
  const { children, ...rest } = props
  return (
    <Flex
      h="100%"
      w="100%"
      overflow="auto"
      flexWrap="wrap"
      data-component="drawer-content-body"
      justifyContent="center"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        w="100%"
        {...rest}
        data-component="drawer-content-child"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default DrawerContentBody
