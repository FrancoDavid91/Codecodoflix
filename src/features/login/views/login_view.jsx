import React from 'react'
import { useState } from 'react'
import { useAuth } from '../../../core/auth/hook/use_auth'

const LoginView = () => {
  const { login } = useAuth()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {

    setIsLoading(true)

    try {
      e.preventDefault()
      const form = e.target 
      const formData = new FormData(form)
      const { email, password } = Object.fromEntries(formData)
     //const { email, password } = Object.fromEntries(new formData(e.target)) <--- Alternativa
  
      form.reset()

      await login(email, password)
      
    } catch (error) {
      setError(error.response.data.msg)
    } finally{
      setIsLoading(false)
    }
  }
  
  return (
    <div>
      <h1>Codecodoflix</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="e-mail" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default LoginView