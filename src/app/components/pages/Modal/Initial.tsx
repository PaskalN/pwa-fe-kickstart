import React from 'react'

import { Image, useDisclosure } from '@chakra-ui/react'

import { DisclosureContext } from '../../context'

import Header from '../../header'

import ZoomImage from '../../zoomImage'
import ZoomPinchZoom from '../../zoomPinchPan'

const ModalPage: React.FC<{}> = () => {
  const globalDisclosure = {
    OAUTH: useDisclosure(),
    GLOBAL_MODAL: useDisclosure()
  }

  return (
    <DisclosureContext.Provider value={globalDisclosure}>
      <Header />

      <ZoomImage
        w="700px"
        h="758px"
        src="https://images.mcmworldwide.com/i/mcmworldwide/MWTCSSX01J8001_01"
        alt=""
        title=""
      />

      <ZoomPinchZoom w="50vw" h="900px" minScaleFactor={0.1} maxScaleFactor={1}>
        <Image src="https://images.mcmworldwide.com/i/mcmworldwide/MWTCSSX01J8001_01" />
      </ZoomPinchZoom>
    </DisclosureContext.Provider>
  )
}

export default ModalPage
