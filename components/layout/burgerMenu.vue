<template>
  <div class="burger">
    <ul class="burger__list">
      <li class="burger__item">
        <span @click="openSwitcher">{{ $t("theme") }}</span>
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
  </div>
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
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  background-color: white;

  overflow: hidden;

  &__list {
    display: flex;
    flex-direction: column;

    padding: 15px;
  }
}
</style>
