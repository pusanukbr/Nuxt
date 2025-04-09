<template>
  <div class="addPostButton">
    <NuxtLink to="/login">
      <button class="addPostButton__button">
        <Icon name="fluent:add-24-regular" class="addPostButton__item--icon" />
      </button>
    </NuxtLink>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss">
.addPostButton {
  position: fixed;
  bottom: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__button {
    background-color: var(--tertiary-bg);
    border-radius: var(--border-radius);
    padding: 20px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--tertiary-text);
    font-size: 25px;
    border: 1px solid var(--border);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
