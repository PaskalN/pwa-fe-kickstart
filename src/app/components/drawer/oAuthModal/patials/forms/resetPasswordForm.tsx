import React, { useState } from 'react'

import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import FormInput from '../../../../formInputs/formInput'
import FormAlert from '../alert'

import PasswordValidator from '../validators/passwordValidator'

const ResetPasswordForm: React.FC<{
  formStateSetter?: React.Dispatch<React.SetStateAction<number>> | (() => void)
}> = props => {
  const { formStateSetter = () => {} } = props
  const form = useForm()
  const { handleSubmit } = form
  const passwordOutput = useState<string>('')
  const errorState = useState<boolean>(false)
  const [_, setError] = errorState
  const [passwordOutputValue] = passwordOutput

  const fields = {
    password: {
      name: 'password',
      label: 'Password',
      options: {
        required: true,
        pattern: /((?=.*[a-z]){1,}(?=.*[A-Z]){1,}(?=.*[A-Z]){1,}(?=.*[=!@#$%^&*\\\(\)_+~]){1,})/,
        minLength: 8
      }
    }
  }

  return (
    <VStack gap="s16" alignItems="stretch">
      <VStack px="s8" alignItems="stretch" gap="s16">
        <Heading variant="default" size="f_T1_XS" className="tt-uc ta-c">
          Create new password
        </Heading>
        <Text variant="default" size="f_body_M">
          Please enter new password.
        </Text>
      </VStack>

      <VStack bg="white" padding="s16" gap="s24" borderRadius="s16" alignItems="stretch">
        <FormAlert message="Password does not meet all requirements." state={errorState} />
        {/* Form */}
        <form
          id="reset-password"
          onSubmit={handleSubmit((data: unknown) => {
            console.log(data)
          })}
        >
          <VStack gap="s24" alignItems="stretch">
            <VStack gap="s12" alignItems="stretch">
              <FormInput form={form} fieldSettings={fields.password} outputValue={passwordOutput} type="password" />
              <VStack alignItems="stretch" gap="s4">
                <PasswordValidator inputValue={passwordOutputValue} form={form} />
              </VStack>
            </VStack>

            <VStack gap="s16" alignItems="stretch">
              <Button
                variant="default"
                size="lgb"
                colorScheme="default"
                type="submit"
                onClick={() => {
                  const formState = form.formState
                  const errors = formState.errors

                  if (!(fields.password.name in errors)) return

                  const errorState = errors[fields.password.name]
                  if (errorState) {
                    setError(true)
                  }
                }}
              >
                Save New Password
              </Button>
              <Button
                variant="default"
                size="lgb"
                colorScheme="secondary"
                type="submit"
                onClick={() => formStateSetter(0)}
              >
                Cancel
              </Button>
            </VStack>
          </VStack>
        </form>
      </VStack>
    </VStack>
  )
}
export default ResetPasswordForm
