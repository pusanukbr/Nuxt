<template>
  <div class="login">
    <NuxtLink to="/login">
      <button class="login__button gradient-button">{{ t('login') }} jv g ch</button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss">
.login {
  position: fixed;
  top: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.gradient-button {
  background: linear-gradient(
    90deg,
    #fbad27,
    #ff9254,
    #ff7b80,
    #ff73ad,
    #fc79d5,
    #cf87f1,
    #9694fd,
    #4e9df7
  );
  background-size: 100% 100%;
  color: white;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.gradient-button:hover {
  background-position: right center;
  transform: scale(1.05);
  filter: brightness(1.1);
}
</style>
