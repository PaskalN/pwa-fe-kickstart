declare namespace ProjectForms {
  namespace Input {
    type Declaration = Record<string, Settings>

    interface ComponentProps {
      form: UseFormReturn<FieldValues, unknown, undefined>
      fieldSettings?: ProjectForms.Input.Settings
      inputRef?: React.MutableRefObject<HTMLInputElement | null>
      outputValue?: [string, React.Dispatch<React.SetStateAction<string>>]
      placeholder?: string
      name: string
      onChange: (_ev?: React.ChangeEvent<HTMLInputElement>) => void
    }

    interface Settings {
      name: string
      type?: string
      label?: string
      placeholder?: string
      options: RegisterOptions<FieldValues, string>
      styleOptions?: {
        variant?: string
        size?: string
        colorScheme?: string
      }
    }
  }
}
