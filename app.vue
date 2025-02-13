<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useThemeStore } from "@/store/theme";

const themeStore = useThemeStore();

onMounted(() => {
  // Підтягуємо тему в стейт з localStorage, якщо ще не зробили
  themeStore.theme = (localStorage.getItem("theme") || "system") as
    | "light"
    | "dark"
    | "system";

  // Відстеження системної теми в реальному часі
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (themeStore.theme === "system") {
        themeStore.applyTheme("system");
      }
    });
});
</script>
