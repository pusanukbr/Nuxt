import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  
  const axiosInstance = axios.create({
    baseURL: process.server ? config.apiBase : config.public.apiBase,
    timeout: 10000,
    withCredentials: true,
  })

  return {
    provide: {
      axios: axiosInstance,
    },
  }
})