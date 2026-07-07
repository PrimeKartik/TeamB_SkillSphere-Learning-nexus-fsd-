import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

export default function App() {
  const location = useLocation()

  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/register'

  return (
    <div className="min-h-screen bg-base">
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </div>
  )
}