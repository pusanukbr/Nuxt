<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
definePageMeta({
  layout: 'empty',
  middleware: ['auth']
})
</script>

<template>
  <div class="login-page">
    <div class="login-page__main-block">
      <h1 class="login-page__title">{{ t('login') }}</h1>
      <FormLogin />
      <div class="login-page__link">
        {{ t('noAccount') }}
        <NuxtLink to="/register" class="gradient-text">{{ t('register') }}</NuxtLink>
      </div>
    </div>
    <div class="login-page__img"></div>
    <div class="login-page__img-bg"></div>
  </div>
</template>

<style lang="scss">
.login-page {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
  height: 100%;

  &__main-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50%;
    height: 100vh;
  }
  &__title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &__img {
    position: absolute;
    right: 0;
    top: 50%;

    width: 50%;
    height: 95%;

    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    background: linear-gradient(
      0deg,
      #fbad27,
      #ff9254,
      #ff7b80,
      #ff73ad,
      #fc79d5,
      #cf87f1,
      #9694fd,
      #4e9df7
    );
    transform: translateY(-50%);
    overflow: hidden;

    filter: blur(10px);

    &-bg {
      position: absolute;

      right: 0;
      top: 50%;

      width: 45%;
      height: 90%;

      background-image: url('../assets/img/bg_2.jpeg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      border-top-left-radius: 30px;

      transform: translateY(-50%);
    }
  }
}
</style>
