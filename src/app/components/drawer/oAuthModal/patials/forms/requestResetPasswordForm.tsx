import React, { useState } from 'react'

import { Button, Heading, Text, VStack } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import FormInput from '../../../../formInputs/formInput'
import FormAlert from '../alert'

const RequestResetPasswordForm: React.FC<{
  formStateSetter?: React.Dispatch<React.SetStateAction<number>> | (() => void)
}> = props => {
  const { formStateSetter = () => {} } = props
  const form = useForm()
  const { handleSubmit } = form
  const emailValue = form.getValues().email

  const errorState = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  const fields = {
    email: {
      name: 'email',
      label: 'Email',
      options: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      }
    }
  }

  if (success) {
    return (
      <VStack gap="s16" alignItems="stretch">
        <VStack px="s8" alignItems="stretch" gap="s16">
          <Heading variant="default" size="f_T1_XS" className="tt-uc ta-c">
            Password reset requested
          </Heading>
        </VStack>

        <VStack bg="white" padding="s16" gap="s24" borderRadius="s16" alignItems="stretch">
          <FormAlert
            message="Password reset email was not able to be sent. Please revise the email address or contact our customer service if you need further help."
            state={errorState}
          />

          <VStack gap="s30">
            <Text variant="default" size="f_body_M">
              Please check your email. A reset link has been sent to {emailValue} . It might take a few minutes to reach
              your inbox.
            </Text>

            <Text variant="default" size="f_body_M">
              Please open the link in the email to reset your password.
            </Text>
          </VStack>

          <VStack gap="s16" alignItems="stretch">
            <Button variant="default" size="lgb" colorScheme="default" onClick={() => formStateSetter(0)}>
              Sign In
            </Button>
          </VStack>
        </VStack>
      </VStack>
    )
  }

  return (
    <VStack gap="s16" alignItems="stretch">
      <VStack px="s8" alignItems="stretch" gap="s16">
        <Heading variant="default" size="f_T1_XS" className="tt-uc ta-c">
          Password reset
        </Heading>
        <Text variant="default" size="f_body_M">
          Or return to{' '}
          <Text
            as="span"
            variant="default"
            size="f_body_M"
            className="td-ul"
            cursor="pointer"
            onClick={() => formStateSetter(0)}
          >
            Sign In
          </Text>
        </Text>
      </VStack>

      <VStack bg="white" padding="s16" gap="s24" borderRadius="s16" alignItems="stretch">
        <FormAlert
          message="Password reset email was not able to be sent. Please revise the email address or contact our customer service if you need further help."
          state={errorState}
        />
        <Text variant="default" size="f_body_M">
          Enter the email address associated with your account, and you will receive an email to complete the reset
          process.
        </Text>
        {/* Form */}
        <form
          id="request-reset-password"
          onSubmit={handleSubmit((data: unknown) => {
            console.log(data)
            setSuccess(true)
          })}
        >
          <VStack gap="s24" alignItems="stretch">
            false
            <FormInput form={form} fieldSettings={fields.email} type="email" />
            <VStack gap="s16" alignItems="stretch">
              <Button type="submit" variant="default" size="lgb" colorScheme="default">
                Send Reset Password Email
              </Button>
            </VStack>
          </VStack>
        </form>
      </VStack>
    </VStack>
  )
}
export default RequestResetPasswordForm
