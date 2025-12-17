import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Example: Attach token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data, // Return only data
  (error) => {
    if (error.response) {
      console.error(`API Error: ${error.response.status}`, error.response.data)
      if (error.response.status === 401) {
        localStorage.removeItem('authToken')
      }
    } else if (error.request) {
      console.error('No response from server', error.request)
    } else {
      console.error('Request setup error', error.message)
    }
    return Promise.reject(error)
  },
)

export default apiClient
