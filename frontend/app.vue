<script setup lang="ts">
import { onMounted } from 'vue'
import { useThemeStore } from './store/theme'
import { useI18n } from 'vue-i18n'
import { useAuthStore } from './store/auth'

const themeStore = useThemeStore()
const { t } = useI18n()

// Використовуємо стор для авторизації
const authStore = useAuthStore()

onMounted(() => {
  // Підтягуємо тему в стейт з localStorage, якщо ще не зробили
  themeStore.theme = (localStorage.getItem('theme') || 'system') as 'light' | 'dark' | 'system'

  // Відстеження системної теми в реальному часі
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (themeStore.theme === 'system') {
      themeStore.applyTheme('system')
    }
  })

  // Підтягуємо користувача, якщо він авторизований
  // authStore.fetchUser()
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
