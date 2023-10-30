import React, { createContext, useContext, useState } from 'react'

import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, FlexProps } from '@chakra-ui/react'

import { GlobalModalContextType } from '.'

const GlobalDrawerContext = createContext<GlobalModalContextType>(null)

export const useGlobalDrawer = (): GlobalModalContextType => useContext(GlobalDrawerContext)

const GlobalDrawer: React.FC<
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

  const { onClose, isOpen } = disclosure

  const animationState = useState<boolean>(false)
  const className = useState<string>('')

  const [, setAnimationState] = animationState
  const [classValue] = className

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
      setAnimationState(true)
    } else {
      setAnimationState(false)
    }
  }

  return (
    <>
      <GlobalDrawerContext.Provider value={{ animationState, className }}>
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} variant="clear">
          <DrawerOverlay onAnimationComplete={onAnimationCompleteHandler} />
          <DrawerContent className={`${classValue} drawer-all-visible`}>
            <DrawerBody {...boxProps}>
              <Flex {...rest}>
                {/* Content Header */}
                {headerComponent}

                {/* Content Body */}
                {children}

                {/* Content Footer */}
                {footerComponent}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </GlobalDrawerContext.Provider>
    </>
  )
}

export default GlobalDrawer
