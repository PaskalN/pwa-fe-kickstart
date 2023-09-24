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
  const { form, fieldSettings, inputRef, outputValue, name, onChange } = inputProps

  if (!fieldSettings || !form) return null

  const { register } = form
  const [_, setOutputValue] = outputValue

  const inputName = name || fieldSettings.name

  return (
    <Checkbox
      name={inputName}
      size="sm"
      colorScheme="red"
      ref={element => {
        register(element, fieldSettings.options)

        if (inputRef) {
          inputRef.current = element
        }

        setOutputValue(element?.value || '')
      }}
      onChange={event => {
        register(event.target, fieldSettings.options)

        if (inputRef) {
          inputRef.current = event.currentTarget
        }

        setOutputValue(event.currentTarget?.value || '')

        onChange(event)
      }}
    >
      {children}
    </Checkbox>
  )
}
export default InputCheckbox
