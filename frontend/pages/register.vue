<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
  layout: 'empty',
  title: 'Register',
  description: 'Register page'
})
</script>

<template>
  <div class="register-page">
    <div class="register-page__main-block">
      <h1 class="register-page__title">{{ t('register') }}</h1>
      <FormRegister />
      <div class="register-page__link">
        {{ t('haveAccount') }}
        <NuxtLink to="/login" class="gradient-text">{{ t('login') }}</NuxtLink>
      </div>
    </div>
    <div class="register-page__motivation">
      <QuoteTyper />
    </div>
  </div>
</template>

<style scoped lang="scss">
.register-page {
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

  &__motivation {
    position: absolute;
    right: 0;
    top: 50%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

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
  }
}
</style>
