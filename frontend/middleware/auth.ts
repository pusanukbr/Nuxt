import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useAuthStore } from '../store/auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore()

  if ((to.path === '/login' || to.path === '/register') && auth.isAuthenticated) {
    return navigateTo('/')
  }
})
