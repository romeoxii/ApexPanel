import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login, signup } from './api/authServices.js'
import { useRouter } from 'vue-router'
import jwtDecode from 'jwt-decode'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const userToken = ref('')
  const userRole = ref('')
  const isAuthenticated = computed(() => userToken.value !== '')

  // Optional: set user info if backend returns it
  const setUser = (userData) => {
    user.value = userData
  }

  const signupUser = async (email, password) => {
    try {
      const data = await signup(email, password)

      if (data) {
        return data
      }
    } catch (error) {
      console.log('signup failed', error)
      throw error
    }
  }
  const loginUser = async (email, password) => {
    try {
      const data = await login(email, password)

      // Optional: store user info if returned by backend
      if (data.user) setUser(data.user)
      userToken.value = localStorage.SetItem('authToken', data.token)
      userRole.value = data.user.role

      return data
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const router = useRouter()
  const logoutUser = () => {
    userToken.value = ''
    user.value = {}
    localStorage.removeItem('authToken')
    router.push('/login')
  }

  const hydrateAuth = () => {
    const token = localStorage.getItem('authToken')
    if (!token) return

    const decoded = jwtDecode(token)

    user.value = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role,
    }

    userToken.value = token
  }

  return {
    user,
    userToken,
    userRole,
    isAuthenticated,
    signupUser,
    loginUser,
    logoutUser,
    setUser,
    hydrateAuth,
  }
})
