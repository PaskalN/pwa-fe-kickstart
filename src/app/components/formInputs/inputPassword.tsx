import React, { useState } from 'react'

import { Button, Flex, Input, Text } from '@chakra-ui/react'

import { inputColorScheme, useInputProps } from '../../utils/formUtils'

const InputPassword: React.FC<ProjectForms.Input.ComponentProps> = props => {
  const inputProps = useInputProps(props)
  const { form, fieldSettings, inputRef, outputValue, placeholder, input } = inputProps

  if (!fieldSettings || !form) return null

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { formState, register } = form
  const registration = register(fieldSettings.name, fieldSettings.options)
  const [_, setOutputValue] = outputValue
  const placeholderValue = placeholder || fieldSettings.placeholder || ''

  return (
    <Flex position="relative">
      <Input
        variant="default"
        size="lg"
        type={!showPassword ? 'password' : 'text'}
        id={fieldSettings.type}
        placeholder={placeholderValue}
        colorScheme={inputColorScheme(formState, fieldSettings.name)}
        {...registration}
        paddingRight="s100"
        ref={element => {
          registration.ref(element)
          input.current = element
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

          if (!event.currentTarget.value) {
            setShowPassword(false)
          }

          setOutputValue(event.currentTarget?.value || '')
        }}
      />

      <Button
        position="absolute"
        variant="default"
        size="input"
        zIndex="10"
        right="0"
        bottom="0"
        onClick={() => {
          if (!!input.current?.value) {
            setShowPassword(!showPassword)
          }
        }}
      >
        <Text as="span" variant="default" size="f_body_XS" className="td-ul" color="neutral.80">
          {!showPassword ? 'Show' : 'Hide'}
        </Text>
      </Button>
    </Flex>
  )
}
export default InputPassword
