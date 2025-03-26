import axios from 'axios'

export default defineNuxtPlugin(({ $axios }) => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      ...(process.client && localStorage.getItem('token')
            ? { Authorization: `Bearer ${localStorage.getItem('token')}` }
            : {})
    },
  })

  return {
    provide: {
      axios: axiosInstance,
    },
  }
})