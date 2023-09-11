import React, { useState } from 'react'

import { Button, Divider, Heading, Text, VStack } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'

import FormInput from '../../../../formInputs/formInput'
import FormAlert from '../alert'
import PasswordValidator from '../validators/passwordValidator'

const RegisterForm: React.FC<{
  formStateSetter?: React.Dispatch<React.SetStateAction<number>> | (() => void)
}> = props => {
  const { formStateSetter = () => {} } = props
  const form = useForm()
  const { handleSubmit } = form
  const passwordOutput = useState<string>('')
  const [passwordOutputValue, _] = passwordOutput
  const errorState = useState<boolean>(false)

  const fields = {
    firstName: {
      name: 'firstName',
      label: 'First Name',
      placeholder: 'Test',
      options: {
        required: true
      }
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name',
      options: {
        required: true
      }
    },
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
        required: true,
        pattern: /((?=.*[a-z]){1,}(?=.*[A-Z]){1,}(?=.*[A-Z]){1,}(?=.*[=!@#$%^&*\\\(\)_+~]){1,})/,
        minLength: 8
      }
    },
    phone: {
      name: 'phone',
      label: 'Phone Number',
      options: {}
    },
    optIn: {
      name: 'optIn',
      options: {}
    }
  }

  return (
    <VStack gap="s16" alignItems="stretch">
      <VStack px="s8" alignItems="stretch" gap="s16">
        <Heading variant="default" size="f_T1_XS" className="tt-uc ta-c">
          Create an account
        </Heading>
        <Text variant="default" size="f_body_M">
          Already have an account?{' '}
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
        <FormAlert message="There is an existing account with the same email address." state={errorState} />

        <Text variant="default" size="f_body_XS">
          Fields marked with asterisk (*) are required.
        </Text>

        {/* Form */}
        <form
          id="registration"
          onSubmit={handleSubmit((data: unknown) => {
            console.log(data)
          })}
        >
          <VStack gap="s24" alignItems="stretch">
            <FormInput form={form} fieldSettings={fields.firstName} type="text" />

            <FormInput form={form} fieldSettings={fields.lastName} type="text" />

            <FormInput form={form} fieldSettings={fields.email} type="email" />

            <VStack gap="s12" alignItems="stretch">
              <FormInput form={form} fieldSettings={fields.password} type="password" outputValue={passwordOutput} />

              <PasswordValidator inputValue={passwordOutputValue} form={form} />
            </VStack>

            <VStack gap="s0" alignItems="stretch">
              <FormInput form={form} fieldSettings={fields.phone} type="phone_simple" placeholder="(__) ___-____" />
            </VStack>

            <VStack gap="s0" alignItems="stretch">
              <FormInput form={form} fieldSettings={fields.optIn} type="checkbox">
                Sign me up for MCM Newsletter. (You can unsubscribe at any time)
              </FormInput>
            </VStack>

            <VStack gap="s16" alignItems="stretch">
              <Button variant="default" size="lgb" colorScheme="default" type="submit">
                Create an Account
              </Button>
              <Text as="span" variant="default" size="f_body_M">
                By clicking "Create an Account," I agree to the Terms of Use and that my personal information will be
                used as described in the Privacy Policy.
              </Text>
            </VStack>
          </VStack>
        </form>

        <Divider />

        <VStack gap="s24" alignItems="stretch">
          <Button variant="default" size="lgb" colorScheme="secondary">
            Sign Up With Facebook
          </Button>
          <Button variant="default" size="lgb" colorScheme="secondary">
            Sign Up With Google
          </Button>
        </VStack>
      </VStack>
    </VStack>
  )
}
export default RegisterForm
