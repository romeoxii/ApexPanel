import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { login, signup } from '@/api/authServices.js'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'

export const useUserStore = defineStore('user', () => {
  const user = ref({})
  const userToken = ref('')
  const userRole = ref('')
  const isAuthenticated = computed(() => userToken.value !== '')

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

      const decoded = jwtDecode(data.token)

      if (decoded) {
        user.value = {
          id: decoded.id,
          email: decoded.email,
          role: decoded.role,
        }
      }

      localStorage.setItem('authToken', data.token)
      userToken.value = localStorage.getItem('authToken', data.token)
      userRole.value = user.value.role

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
    router.push('/auth/login')
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
