import React from 'react'

import { FormLabel, Text } from '@chakra-ui/react'
import { FieldValues, UseFormMethods } from 'react-hook-form'

import InputCheckbox from './inputCheckbox'
import InputLabel from './inputLabel'
import InputPassword from './inputPassword'
import InputPhoneSimple from './inputPhoneSimple'
import InputText from './inputText'

const FormWrapper: React.FC<{
  fieldSettings?: ProjectForms.Input.Settings
  children?: React.ReactNode | Array<React.ReactNode>
}> = props => {
  const { children, fieldSettings } = props

  if (!fieldSettings) return null

  if (!fieldSettings.label) {
    return <>{children}</>
  }

  return (
    <FormLabel htmlFor={fieldSettings.name}>
      <InputLabel required={fieldSettings.options.required} text={fieldSettings.label} />
      {children}
    </FormLabel>
  )
}

const FormInput: React.FC<{
  children?: React.ReactNode | Array<React.ReactNode>
  form: UseFormMethods<FieldValues>
  fieldSettings?: ProjectForms.Input.Settings
  type?: string
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
  outputValue?: [string, React.Dispatch<React.SetStateAction<string>>]
  placeholder?: string
  name?: string
  onChange?: (_ev?: React.ChangeEvent<HTMLInputElement>) => void
}> = props => {
  const {
    children,
    name = '',
    form = null,
    placeholder = '',
    fieldSettings,
    type = 'text',
    inputRef,
    outputValue,
    onChange = () => {}
  } = props

  const inputType = fieldSettings?.type || type

  if (!fieldSettings || !form) return null

  if (['text', 'email'].includes(inputType)) {
    return (
      <FormWrapper fieldSettings={fieldSettings}>
        <InputText
          form={form}
          fieldSettings={fieldSettings}
          inputRef={inputRef}
          outputValue={outputValue}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
        />
      </FormWrapper>
    )
  }

  if (['password'].includes(inputType)) {
    return (
      <FormWrapper fieldSettings={fieldSettings}>
        <InputPassword
          name={name}
          form={form}
          fieldSettings={fieldSettings}
          inputRef={inputRef}
          outputValue={outputValue}
          placeholder={placeholder}
          onChange={onChange}
        />
      </FormWrapper>
    )
  }

  if (['checkbox'].includes(inputType)) {
    return (
      <InputCheckbox
        name={name}
        form={form}
        fieldSettings={fieldSettings}
        inputRef={inputRef}
        outputValue={outputValue}
        onChange={onChange}
      >
        <Text variant="default" size="f_body_M">
          {children}
        </Text>
      </InputCheckbox>
    )
  }

  if (['phone_simple'].includes(inputType)) {
    return (
      <FormWrapper fieldSettings={fieldSettings}>
        <InputPhoneSimple
          name={name}
          form={form}
          fieldSettings={fieldSettings}
          inputRef={inputRef}
          outputValue={outputValue}
          placeholder={placeholder}
          onChange={onChange}
        />
      </FormWrapper>
    )
  }

  return (
    <FormWrapper fieldSettings={fieldSettings}>
      <InputText
        name={name}
        form={form}
        fieldSettings={fieldSettings}
        inputRef={inputRef}
        outputValue={outputValue}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FormWrapper>
  )
}
export default FormInput
