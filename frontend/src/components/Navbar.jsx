import { GraduationCap } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <nav className="sticky top-0 z-50 bg-base/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-brand-gradient flex items-center justify-center">
            <GraduationCap size={20} className="text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-bold text-sm">SkillSphere</p>
            <p className="text-muted text-[10px]">Learning Nexus</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#home" className="text-white font-medium">Home</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#about" className="hover:text-white transition">About Us</a>
          <a href="#courses" className="hover:text-white transition">Courses</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          {isLoggedIn ? (
            <button onClick={logout} className="px-4 py-2 rounded-lg text-sm text-white border border-white/20 hover:bg-white/10 transition">
              Log Out
            </button>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 rounded-lg text-sm text-white border border-white/20 hover:bg-white/10 transition">
                Log In
              </Link>
              <Link to="/register" className="px-4 py-2 rounded-lg text-sm text-white font-medium bg-brand-gradient hover:opacity-90 transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
