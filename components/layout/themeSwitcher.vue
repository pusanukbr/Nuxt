<template>
  <div class="switcher">
    <span class="switcher__bg" :style="`left: ${position}px`"></span>
    <label class="switcher__item">
      <input type="radio" name="theme" value="light" v-model="selectedTheme" />
      <Icon name="fluent:weather-sunny-24-regular" />
    </label>

    <label class="switcher__item">
      <input type="radio" name="theme" value="dark" v-model="selectedTheme" />
      <Icon name="fluent:weather-moon-24-regular" />
    </label>

    <label class="switcher__item">
      <input type="radio" name="theme" value="system" v-model="selectedTheme" />
      {{ $t("auto") }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const selectedTheme = ref<"light" | "dark" | "system">("system");
const position = ref(0);

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
  position.value = theme === "system" ? 125 : theme === "light" ? 5 : 65;
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

<style lang="scss">
.switcher {
  position: relative;
  display: flex;

  background-color: #fff;
  box-shadow: inset 0 0 5px 1px rgba(0, 0, 0, .1);
  border-radius: 15px;

  &__bg {
    display: block;
    position: absolute;
    top: 5px;
    width: 50px;
    height: 25px;
    
    padding: 10px 15px;

    border-radius: 10px;

    background-color: #ccc;

    transition: left .3s cubic-bezier(.38,.3,0,.31);

    z-index: 0;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 35px;

    cursor: pointer;


    z-index: 1;
  }
}

input[type="radio"] {
  margin-right: 8px;
  display: none;
}

.dark {
  label {
    color: black
  }
}
</style>
