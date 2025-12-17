import apiClient from './client.js'

export const createProduct = async (payload) => {
  return apiClient.post('/products', payload)
}

export const getAllProducts = async () => {
  return apiClient.get('/products')
}

export const getProductById = async (id) => {
  return apiClient.get(`/products/${id}`)
}

export const updateProduct = async (id, payload) => {
  return apiClient.put(`/products/${id}`, payload)
}

export const deleteProduct = async (id) => {
  return apiClient.delete(`/products/${id}`)
}
