import React from 'react'

import { Input } from '@chakra-ui/react'

import { inputColorScheme, useInputProps } from '../../utils/formUtils'

const InputPhoneSimple: React.FC<ProjectForms.Input.ComponentProps> = props => {
  const inputProps = useInputProps(props)
  const { form, fieldSettings, inputRef, outputValue, placeholder, name, onChange } = inputProps

  if (!fieldSettings || !form) return null

  const { formState, register } = form
  const placeholderValue = placeholder || fieldSettings.placeholder || ''

  const [_, setOutputValue] = outputValue
  const inputName = name || fieldSettings.name

  return (
    <Input
      name={inputName}
      variant="default"
      size="lg"
      type={fieldSettings.type}
      id={fieldSettings.type}
      placeholder={placeholderValue}
      colorScheme={inputColorScheme(formState, fieldSettings.name)}
      ref={element => {
        register(element, fieldSettings.options)

        if (inputRef) {
          inputRef.current = element
        }

        setOutputValue(element?.value || '')
      }}
      onChange={event => {
        register(event.currentTarget, fieldSettings.options)

        if (inputRef) {
          inputRef.current = event.currentTarget
        }

        setOutputValue(event.currentTarget?.value || '')

        onChange(event)
      }}
    />
  )
}
export default InputPhoneSimple
