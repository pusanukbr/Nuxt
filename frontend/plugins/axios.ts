import axios from 'axios'

export default defineNuxtPlugin(({ $axios }) => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const token = localStorage.getItem('token');

  if (token) {
    $axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }
  return {
    provide: {
      axios: axiosInstance,
    },
  }
})