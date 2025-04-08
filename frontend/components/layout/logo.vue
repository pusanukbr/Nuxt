<template>
  <div>
    <NuxtLink to="/">
      <SvgoLogoIcon alt="Logo" class="logo__icon" />
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="scss">
.logo {
  &__icon {
    font-size: 60px;
    color: var(--navigation-icon);
    transition: color 0.3s;
    &:hover {
      color: var(--primary-icon);
    }
  }
}
</style>
