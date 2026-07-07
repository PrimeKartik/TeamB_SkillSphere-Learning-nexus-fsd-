import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { GraduationCap } from 'lucide-react'
import { authApi } from '../api/client'
import GoogleSignInButton from '../components/GoogleSignInButton'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await authApi.register(name, email, password)
      localStorage.setItem('token', res.data.token)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create account')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center">
              <GraduationCap size={20} className="text-white" />
            </div>

            <div>
              <p className="text-white font-bold">SkillSphere</p>
              <p className="text-muted text-xs">Learning Nexus</p>
            </div>
          </Link>

          <Link
            to="/"
            className="text-primary text-sm font-medium hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Register Form */}
      <div className="flex items-center justify-center px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="card-glow rounded-2xl p-8 w-full max-w-sm"
        >
          <h1 className="text-white text-2xl font-bold mb-1">
            Create your account
          </h1>

          <p className="text-muted text-sm mb-6">
            Start learning without limits
          </p>

          {error && (
            <p className="text-red-400 text-xs mb-4">
              {error}
            </p>
          )}

          <label className="text-muted text-xs">Full Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 mt-1 bg-base/60 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-primary"
            placeholder="Jane Doe"
          />

          <label className="text-muted text-xs">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 mt-1 bg-base/60 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-primary"
            placeholder="you@example.com"
          />

          <label className="text-muted text-xs">Password</label>
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 mt-1 bg-base/60 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-primary"
            placeholder="At least 6 characters"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-full bg-brand-gradient text-white font-semibold text-sm hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-muted text-xs">or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <GoogleSignInButton onError={setError} />

          <p className="text-muted text-xs text-center mt-4">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary font-medium"
            >
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}