// plugins/axios.ts
import type { AxiosInstance } from 'axios'
import axios from 'axios'

export default defineNuxtPlugin(() => {
  const instance: AxiosInstance = axios.create({ baseURL: '/api' })

  return { provide: { axios: instance } }
})
