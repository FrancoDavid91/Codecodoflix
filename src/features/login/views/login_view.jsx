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
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='container-login'>
      <div className='login-box'>
        <img src="/../../../public/tituloImagen.png" alt="Título codecodoflix" />

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="e-mail" />
          <input type="password" name="password" placeholder="Password" />
          <button className='btn btn-open' type="submit">Iniciar Sesión</button>
        </form>

      </div>
    </div>
  )
}

export default LoginView