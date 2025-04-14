import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  
  const axiosInstance = axios.create({
    baseURL: process.server ? config.apiBase : config.public.apiBase,
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