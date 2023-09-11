import React from 'react'

import { Checkbox } from '@chakra-ui/react'

import { useInputProps } from '../../utils/formUtils'

const InputCheckbox: React.FC<
  ProjectForms.Input.ComponentProps & {
    children?: React.ReactNode | Array<React.ReactNode>
  }
> = props => {
  const { children } = props
  const inputProps = useInputProps(props)
  const { form, fieldSettings, inputRef, outputValue } = inputProps

  if (!fieldSettings || !form) return null

  const { register } = form
  const registration = register(fieldSettings.name, fieldSettings.options)
  const [_, setOutputValue] = outputValue

  return (
    <Checkbox
      size="sm"
      colorScheme="red"
      {...registration}
      ref={element => {
        registration.ref(element)

        if (inputRef) {
          inputRef.current = element
        }

        setOutputValue(element?.value || '')
      }}
      onChange={event => {
        registration.onChange(event)

        if (inputRef) {
          inputRef.current = event.currentTarget
        }

        setOutputValue(event.currentTarget?.value || '')
      }}
    >
      {children}
    </Checkbox>
  )
}
export default InputCheckbox
