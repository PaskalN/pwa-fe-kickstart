import React, { createContext, useContext, useState } from 'react'

import { Flex, FlexProps, Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'

import { generateID } from '../../utils/global-utils'

export type GlobalModalContextType = {
  animationState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  className?: [string, React.Dispatch<React.SetStateAction<string>>]
} | null

const GlobalModalContext = createContext<GlobalModalContextType>(null)

export const useGlobalModal = (): GlobalModalContextType => useContext(GlobalModalContext)

const GlobalModal: React.FC<
  {
    children: React.ReactNode | Array<React.ReactNode>
    disclosure: ProjectModal.Disclosure
    headerComponent?: React.ReactNode
    footerComponent?: React.ReactNode
    offsetX?: string
    offsetY?: string
    offset?: string
  } & FlexProps
> = props => {
  const { disclosure, children, headerComponent, footerComponent, offset, offsetY, offsetX, ...rest } = props
  const tokenID = generateID(6)

  const { onClose, isOpen } = disclosure

  const modalBodyHandlerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const target: HTMLDivElement = e.target as HTMLDivElement
    const token = target.dataset['componentToken']

    if (tokenID === token) {
      onClose()
    }
  }

  const animationState = useState<boolean>(false)

  const [, setAnimationState] = animationState

  const boxPropsOffset = {
    ...(offset ? { paddingLeft: offset, paddingRight: offset, paddingBottom: offset, paddingTop: offset } : {})
  }

  const boxPropsOffsetX = {
    ...(!offset && offsetX ? { paddingLeft: offsetX, paddingRight: offsetX } : {})
  }

  const boxPropsOffsetY = {
    ...(!offset && offsetY ? { paddingTop: offsetY, paddingBottom: offsetY } : {})
  }

  const boxProps = { ...boxPropsOffset, ...boxPropsOffsetX, ...boxPropsOffsetY }

  const onAnimationCompleteHandler = (e: string) => {
    if (e === 'enter') {
      setTimeout(() => {
        setAnimationState(true)
      }, 300)
    } else {
      setAnimationState(false)
    }
  }

  return (
    <>
      <GlobalModalContext.Provider value={{ animationState }}>
        <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset="scale" variant="globalModal">
          <ModalOverlay backdropFilter="blur(4px)" onAnimationComplete={onAnimationCompleteHandler} />
          <ModalContent>
            <ModalBody onClick={e => modalBodyHandlerClick(e)} data-component-token={tokenID} {...boxProps}>
              <Flex
                data-component="modal-content-holder"
                overflowX="hidden"
                overflowY="hidden"
                flexDirection="column"
                borderRadius="s16"
                maxWidth="100%"
                w="100%"
                h="100%"
                {...rest}
              >
                {/* Content Header */}
                {headerComponent}

                {/* Content Body */}
                {children}

                {/* Content Footer */}
                {footerComponent}
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </GlobalModalContext.Provider>
    </>
  )
}

export default GlobalModal
