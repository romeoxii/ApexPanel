import apiClient from './client.js'

export const getAllUsers = async () => {
  return apiClient.get('/users')
}

export const getUserById = async (id) => {
  return apiClient.get(`/users/${id}`)
}
