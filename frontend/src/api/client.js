import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

// Attach JWT token to every request if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export const authApi = {
  login: (email, password) => api.post('/auth/login', { email, password }),
  register: (name, email, password) =>
    api.post('/auth/register', { name, email, password }),
  google: (credential) => api.post('/auth/google', { credential }),
}

export const courseApi = {
  getAll: () => api.get('/courses'),
}

export default api
