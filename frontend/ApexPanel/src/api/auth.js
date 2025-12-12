import axios from 'axios'

const API_URL = 'http://localhost:5000/api/auth'
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password })

    return response.data
  } catch (error) {
    console.error('Login error:', error.response?.data || error.message)
    throw error // so you can handle it in your UI
  }
}
