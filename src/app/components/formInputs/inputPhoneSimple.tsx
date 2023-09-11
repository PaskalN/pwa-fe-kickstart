import React from 'react'

import { Input } from '@chakra-ui/react'

import { inputColorScheme, useInputProps } from '../../utils/formUtils'

const InputPhoneSimple: React.FC<ProjectForms.Input.ComponentProps> = props => {
  const inputProps = useInputProps(props)
  const { form, fieldSettings, inputRef, outputValue, placeholder } = inputProps

  if (!fieldSettings || !form) return null

  const { formState, register } = form
  const placeholderValue = placeholder || fieldSettings.placeholder || ''
  const registration = register(fieldSettings.name, fieldSettings.options)
  const [_, setOutputValue] = outputValue

  return (
    <Input
      variant="default"
      size="lg"
      type={fieldSettings.type}
      id={fieldSettings.type}
      placeholder={placeholderValue}
      colorScheme={inputColorScheme(formState, fieldSettings.name)}
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
    />
  )
}
export default InputPhoneSimple
