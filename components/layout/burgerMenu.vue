<template>
  <ul class="burger">
    <li class="burger__item">
      <button>{{ $t("theme") }}</button>
      <!-- Theme Switcher -->
      <ThemeSwitcher />
    </li>
    <li class="burgerMenu__item">
      <NuxtLink to="insights">{{ $t("insights") }}</NuxtLink>
    </li>
    <li class="burgerMenu__item">
      <NuxtLink to="settings">{{ $t("settings") }}</NuxtLink>
    </li>
    <li class="burgerMenu__item">
      <button>{{ $t("report") }}</button>
    </li>
    <li class="burgerMenu__item">
      <button>{{ $t("logout") }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/theme";
import { storeToRefs } from "pinia";

import ThemeSwitcher from "./ThemeSwitcher.vue";

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);

const setTheme = (mode: "light" | "dark" | "system") => {
  themeStore.setTheme(mode);
};
</script>

<style lang="scss">
.burger {
  //   display: none;
  &__theme {
    // display: none;
  }
}
</style>
