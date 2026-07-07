import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { authApi } from '../api/client'

export default function GoogleSignInButton({ onError }) {
  const navigate = useNavigate()

  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await authApi.google(credentialResponse.credential)
      localStorage.setItem('token', res.data.token)
      navigate('/')
    } catch (err) {
      onError?.(err.response?.data?.message || 'Google sign-in failed')
    }
  }

  return (
    <div className="flex justify-center my-4">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => onError?.('Google sign-in failed')}
        theme="filled_black"
        shape="pill"
        text="continue_with"
      />
    </div>
  )
}
