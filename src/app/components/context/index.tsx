import { createContext, useContext } from 'react'

type DisclosureContext = {
  OAUTH?: ProjectModal.Disclosure
  GLOBAL_MODAL?: ProjectModal.Disclosure
}

export const DisclosureContext = createContext<DisclosureContext | null>(null)
DisclosureContext.displayName = 'DisclosureContext'

export const useProjectDisclosure = (): DisclosureContext | null => useContext(DisclosureContext)
