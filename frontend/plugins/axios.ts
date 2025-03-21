import axios from 'axios'

export default defineNuxtPlugin(() => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:8000/frontend',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return {
    provide: {
      axios: axiosInstance,
    },
  }
})