import React from 'react'
import LoginForm from '../components/LoginForm'
import { useNavigate } from 'react-router-dom'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const handleLogin = (email: string, password: string) => {
    // TODO: 调用后端接口登录
    console.log(email, password)
    navigate('/documents')
  }

  return <LoginForm onSubmit={handleLogin} />
}

export default LoginPage
