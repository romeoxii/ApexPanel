import apiClient from './client.js'

export const signup = async (email, password) => {
  return apiClient.post('/auth/signup', { email, password })
}

export const login = async (email, password) => {
  return apiClient.post('/auth/login', { email, password })
}
