import React, { useEffect, useState } from 'react'

import { VStack } from '@chakra-ui/react'

import { FieldValues, UseFormReturn } from 'react-hook-form'

import ValidationBullet from '../validationBullet'

const PasswordValidator: React.FC<{
  inputValue?: string
  form: UseFormReturn<FieldValues, unknown, undefined>
}> = props => {
  const { inputValue, form } = props

  const [statusBulletOne, _setStatusBulletOne] = useState<number>(0)
  const [statusBulletTwo, _setStatusBulletTwo] = useState<number>(0)
  const [statusBulletThree, _setStatusBulletThree] = useState<number>(0)
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  useEffect(() => {
    if (inputValue) {
      setIsTouched(true)
    }
  }, [inputValue])

  useEffect(() => {
    if (!!form.formState.submitCount && !submitted) {
      setSubmitted(true)
    }
  }, [form.formState.submitCount])

  useEffect(() => {
    const value = inputValue || ''

    if (!isTouched && !value && !submitted) return

    if (value?.length > 7) {
      _setStatusBulletOne(1)
    } else {
      _setStatusBulletOne(2)
    }

    if (/(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
      _setStatusBulletTwo(1)
    } else {
      _setStatusBulletTwo(2)
    }

    if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value)) {
      _setStatusBulletThree(1)
    } else {
      _setStatusBulletThree(2)
    }
  }, [inputValue, isTouched, submitted])

  return (
    <VStack alignItems="stretch" gap="s4">
      <ValidationBullet message="8 Characters" status={statusBulletOne} />
      <ValidationBullet message="At least 1 upper case and 1 lower case letter" status={statusBulletTwo} />
      <ValidationBullet message="At least 1 Special Character (e.g. , S ! % #)" status={statusBulletThree} />
    </VStack>
  )
}
export default PasswordValidator
