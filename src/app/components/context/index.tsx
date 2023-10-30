import { createContext, useContext } from 'react'

export type Disclosure = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
  isControlled: boolean
  getButtonProps: (_props?: unknown) => unknown
  getDisclosureProps: (_props?: unknown) => unknown
}

type DisclosureContext = {
  OAUTH?: Disclosure
  GLOBAL?: Disclosure
}

export const DisclosureContext = createContext<DisclosureContext | null>(null)
DisclosureContext.displayName = 'DisclosureContext'

export const useProjectDisclosure = (): DisclosureContext | null => useContext(DisclosureContext)
