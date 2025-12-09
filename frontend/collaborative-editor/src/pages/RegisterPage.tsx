import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'

const RegisterPage: React.FC = () => {
  const navigate = useNavigate()

  const handleRegister = (email: string, password: string) => {
    // TODO: 调用后端接口注册
    console.log(email, password)
    navigate('/documents')
  }

  return <RegisterForm onSubmit={handleRegister} />
}

export default RegisterPage
