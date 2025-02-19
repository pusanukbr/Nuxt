<template>
  <div class="login">
    <NuxtLink to="/login">
      <button class="login__button">{{ t("login") }}</button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style lang="scss">
.login {
  position: fixed;
  top: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__button {
    width: 100px;
    height: 30px;

    outline: none;
    border: 0;
    border-radius: 5px;
    background-color: #000;

    color: #fff;
    font-size: 14px;
    font-weight: 700;

    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
}
.dark .login__button {
  background-color: #fff;
  color: #000;
}
</style>
