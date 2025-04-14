<script setup lang="ts">
import LoginButton from '../components/layout/loginButton.vue'
import Header from '../components/layout/header.vue'
import { useI18n } from 'vue-i18n'
import AddPostButton from '../components/layout/addPostButton.vue'
import { useAuthStore } from '../store/auth'
import AppLoader from '../components/AppLoader.vue'
const globalLoading = useState('globalLoading')

const authStore = useAuthStore()

const { t } = useI18n()
</script>

<template>
  <div class="main">
    <AppLoader class="app-loader" :class="{ hidden: !globalLoading }" />
    <!-- Header -->
    <Header />

    <div class="main__page">
      <slot />
    </div>

    <!-- Login Button -->
    <LoginButton v-if="!authStore.isAuthenticated" />

    <!-- Add post -->
    <AddPostButton v-if="authStore.isAuthenticated" />
  </div>
</template>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  &__page {
    display: flex;
    justify-content: center;
    flex-grow: 1;

    width: 100%;
    height: auto;

    padding-left: 100px;
  }
}
.app-loader.hidden {
  display: none;
}
</style>
