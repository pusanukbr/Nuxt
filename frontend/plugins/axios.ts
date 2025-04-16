import axios from 'axios'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const axiosInstance = axios.create({
    baseURL: process.server ? config.apiBase : config.public.apiBase,
    timeout: 10000,
    withCredentials: true
  })

  // 👉 якщо SSR — підставляй куки вручну
  if (process.server) {
    const headers = useRequestHeaders(['cookie'])
    if (headers.cookie) {
      axiosInstance.defaults.headers.common.cookie = headers.cookie
    }
  }

  return {
    provide: {
      axios: axiosInstance
    }
  }
})
