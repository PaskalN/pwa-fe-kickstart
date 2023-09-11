import React, { useState } from 'react'

import LoginForm from './forms/loginForm'
import RegisterForm from './forms/registerForm'
import RequestResetPasswordForm from './forms/requestResetPasswordForm'
import ResetPasswordForm from './forms/resetPasswordForm'

const OAuthContent: React.FC<{}> = () => {
  const [formState, setFormState] = useState<number>(3)

  if (formState === 0) return <LoginForm formStateSetter={setFormState} />
  if (formState === 1) return <RegisterForm formStateSetter={setFormState} />
  if (formState === 2) return <RequestResetPasswordForm formStateSetter={setFormState} />
  if (formState === 3) return <ResetPasswordForm formStateSetter={setFormState} />

  return null
}
export default OAuthContent
