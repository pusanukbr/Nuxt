<template>
  <Transition name="fade">
    <div v-if="loading" class="app-loader">
      <span class="loader-spinner" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
const loading = useState<boolean>('globalLoading', () => false)
</script>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
