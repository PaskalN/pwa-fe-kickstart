import React, { useState } from 'react'

import { Button, Divider, Heading, Text, VStack } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import FormInput from '../../../../formInputs/formInput'
import FormAlert from '../alert'

const LoginForm: React.FC<{
  formStateSetter?: React.Dispatch<React.SetStateAction<number>> | (() => void)
}> = props => {
  const { formStateSetter = () => {} } = props
  const form = useForm()
  const { handleSubmit } = form
  const errorState = useState<boolean>(false)

  const fields = {
    email: {
      name: 'email',
      label: 'Email',
      options: {
        required: true,
        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      }
    },
    password: {
      name: 'password',
      label: 'Password',
      options: {
        required: true
      }
    }
  }

  return (
    <VStack gap="s16" alignItems="stretch">
      <VStack px="s8" alignItems="stretch" gap="s16">
        <Heading variant="default" size="f_T1_XS" className="tt-uc ta-c">
          Sign In
        </Heading>
      </VStack>

      <VStack bg="white" padding="s16" gap="s24" borderRadius="s16" alignItems="stretch">
        <FormAlert
          message="There is no account associated with the entered email address. Please try again."
          state={errorState}
        />

        <Text variant="default" size="f_body_M">
          New to MCM?{' '}
          <Text
            as="span"
            variant="default"
            size="f_body_M"
            className="td-ul"
            cursor="pointer"
            onClick={() => formStateSetter(1)}
          >
            Create an Account
          </Text>
        </Text>

        {/* Form */}
        <form
          id="login"
          onSubmit={handleSubmit((data: unknown) => {
            console.log(data)
          })}
        >
          <VStack gap="s24" alignItems="stretch">
            <FormInput form={form} fieldSettings={fields.email} type="email" />

            <VStack gap="s12" alignItems="stretch">
              <FormInput form={form} fieldSettings={fields.password} type="password" />

              <Text
                as="span"
                variant="default"
                size="f_body_M"
                className="td-ul"
                cursor="pointer"
                onClick={() => formStateSetter(2)}
              >
                Forgot Password?
              </Text>
            </VStack>

            <VStack gap="s8" alignItems="stretch">
              <Button variant="default" size="lgb" colorScheme="default" type="submit">
                Sign In
              </Button>
              <Text as="span" variant="default" size="f_body_M" className="td-ul">
                Privacy Policy
              </Text>
            </VStack>
          </VStack>
        </form>

        <Divider />

        <VStack gap="s24" alignItems="stretch">
          <Button variant="default" size="lgb" colorScheme="secondary">
            Sign In With Facebook
          </Button>
          <Button variant="default" size="lgb" colorScheme="secondary">
            Sign In With Google
          </Button>
        </VStack>
      </VStack>
    </VStack>
  )
}
export default LoginForm
