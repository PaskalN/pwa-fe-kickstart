import React from 'react'

import { Box, Flex, FlexProps, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'

import { generateID } from '../../utils/global-utils'

const GlobalModal: React.FC<
  {
    children: React.ReactNode | Array<React.ReactNode>
    disclosure: ProjectModal.Disclosure
    headerComponent?: React.ReactNode
    footerComponent?: React.ReactNode
  } & FlexProps
> = props => {
  const { disclosure, children, headerComponent, footerComponent, ...rest } = props
  const tokenID = generateID(6)

  const { onClose, isOpen } = disclosure

  const modalBodyHandlerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const target: HTMLDivElement = e.target as HTMLDivElement
    const token = target.dataset['componentToken']

    if (tokenID === token) {
      onClose()
    }
  }

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset="scale" variant="globalModal">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent>
          <ModalBody onClick={e => modalBodyHandlerClick(e)} data-component-token={tokenID}>
            <Flex
              data-component="modal-content-holder"
              overflowX="hidden"
              overflowY="hidden"
              flexDirection="column"
              borderRadius="s16"
              paddingBottom="s16"
              maxWidth="100%"
              {...rest}
            >
              {/* Content Header */}
              {headerComponent}

              {/* Content Header End*/}
              <Box
                data-component="modal-content-body"
                overflowX="hidden"
                overflowY="auto"
                h="100%"
                px="s16"
                paddingBottom="s36"
              >
                {/* Content Body */}
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                  {children}
                </Flex>
                {/* Content Body End*/}
              </Box>

              {/* Content Footer */}
              {footerComponent}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default GlobalModal
