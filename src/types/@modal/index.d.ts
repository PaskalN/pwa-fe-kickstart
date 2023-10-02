declare namespace ProjectModal {
  type Disclosure = {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
    onToggle: () => void
    isControlled: boolean
    getButtonProps: (_props?: unknown) => unknown
    getDisclosureProps: (_props?: unknown) => unknown
  }
}
