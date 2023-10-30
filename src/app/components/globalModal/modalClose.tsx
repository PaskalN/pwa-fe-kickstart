import React from 'react'

import { IconProps } from '@chakra-ui/react'

import { MCMCloseButton } from '../mcmIcon'

const ModalClose: React.FC<
  {
    disclosure: ProjectModal.Disclosure
  } & IconProps
> = props => {
  const { disclosure, ...rest } = props
  const { onClose } = disclosure
  return <MCMCloseButton fontSize="s24" color="dark" onClick={onClose} cursor="pointer" {...rest} />
}

export default ModalClose
