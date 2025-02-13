<template>
  <div class="theme-switcher">
    <label>
      <input type="radio" name="theme" value="light" v-model="selectedTheme" />
      {{ $t("light") }}
    </label>

    <label>
      <input type="radio" name="theme" value="dark" v-model="selectedTheme" />
      {{ $t("dark") }}
    </label>

    <label>
      <input type="radio" name="theme" value="system" v-model="selectedTheme" />
      {{ $t("system") }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const selectedTheme = ref<"light" | "dark" | "system">("system");

// Проставляємо тему при завантаженні компонента
onMounted(() => {
  const savedTheme = localStorage.getItem("theme") as
    | "light"
    | "dark"
    | "system"
    | null;
  if (savedTheme) {
    selectedTheme.value = savedTheme;
    applyTheme(savedTheme);
  } else {
    applyTheme("system");
  }
});

// Слідкуємо за зміною теми і застосовуємо її
watch(selectedTheme, (newTheme) => {
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});

// Функція зміни теми
function applyTheme(theme: "light" | "dark" | "system") {
  const root = document.documentElement;

  if (theme === "system") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    root.classList.toggle("dark", prefersDark);
  } else {
    root.classList.toggle("dark", theme === "dark");
  }
}
</script>

<style scoped>
.theme-switcher {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input[type="radio"] {
  margin-right: 8px;
}
</style>
