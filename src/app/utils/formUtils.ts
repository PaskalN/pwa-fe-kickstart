import { useRef, useState } from 'react'

import { FieldValues, FormState, UseFormMethods } from 'react-hook-form'
export const inputColorScheme = (formState: FormState<FieldValues>, fieldName: string): string => {
  const errorState = formState.errors?.[fieldName]
  const dirtyField = formState.dirtyFields?.[fieldName]

  const invalid = 'invalid'
  const valid = 'valid'
  const empty = 'default'

  // Error States
  if (!!errorState?.type) {
    return invalid
  }

  // Dirty Field
  if (dirtyField) {
    return valid
  }

  return empty
}

export const useInputProps = (
  props: ProjectForms.Input.ComponentProps
): {
  form: UseFormMethods<FieldValues>
  fieldSettings?: ProjectForms.Input.Settings
  inputRef?: React.MutableRefObject<HTMLInputElement | null>
  outputValue: [string, React.Dispatch<React.SetStateAction<string>>]
  placeholder?: string
  input: React.MutableRefObject<HTMLInputElement | null>
  outputValueAux: [string, React.Dispatch<React.SetStateAction<string>>]
  name: string
  onChange: (_ev?: React.ChangeEvent<HTMLInputElement>) => void
} => {
  const { form = null, fieldSettings, inputRef, outputValue, placeholder = '', name = '', onChange = () => {} } = props
  const input = useRef<HTMLInputElement | null>(null)
  const outputValueAux = useState<string>('')

  const output = outputValue || outputValueAux

  return {
    form,
    name,
    fieldSettings,
    inputRef,
    placeholder,
    input,
    onChange,
    outputValueAux,
    outputValue: output
  }
}
