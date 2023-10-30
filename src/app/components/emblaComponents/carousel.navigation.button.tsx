import React from 'react'

import { Box } from '@chakra-ui/react'

const NavigationButton: React.FC<{
  __css?: Project.Utils.ObjectKeyUnknown
  children?: React.ReactNode | React.ReactNode[]
  callback?: () => void
}> = props => {
  const { __css = {}, callback = () => {}, children = null } = props
  return (
    <Box __css={{ ...__css }} onClick={callback}>
      {children}
    </Box>
  )
}

export default NavigationButton
