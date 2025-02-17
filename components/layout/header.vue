<template>
  <header class="header">
    <Logo />
    <nav class="menu">
      <li class="menu__item">
        <NuxtLink to="/" class="menu__link"
          ><Icon name="fluent:home-24-regular" class="menu__item--icon"
        /></NuxtLink>
      </li>
      <li class="menu__item">
        <NuxtLink to="/" class="menu__link"
          ><Icon name="fluent:search-24-regular" class="menu__item--icon"
        /></NuxtLink>
      </li>
      <li class="menu__item">
        <button class="menu__button">
          <Icon name="fluent:add-24-regular" class="menu__item--icon" />
        </button>
      </li>
      <li class="menu__item">
        <NuxtLink to="/" class="menu__link"
          ><Icon name="fluent:heart-24-regular" class="menu__item--icon"
        /></NuxtLink>
      </li>
      <li class="menu__item">
        <NuxtLink to="/" class="menu__link"
          ><Icon name="fluent:person-24-regular" class="menu__item--icon"
        /></NuxtLink>
      </li>
    </nav>
    <div class="burgerToggle" @click="showBurger = !showBurger">
      <Icon name="fluent:list-24-regular" class="menu__item--icon" />
    </div>

    <!-- Burger Menu -->
    <BurgerMenu v-if="showBurger" ref="menuRef" />
  </header>
</template>

<script setup lang="ts">
import Logo from "../components/layout/logo.vue";
import BurgerMenu from "../components/layout/burgerMenu.vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

const showBurger = ref(false);
const menuRef = ref<HTMLElement | null>(null);

onClickOutside(menuRef, () => {
  showBurger.value = false;
});
</script>

<style lang="scss">
.header {
  position: fixed;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 100px;
  width: 100%;
  height: 100%;

  padding: 10px;

  background-color: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.05);

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__item {
      list-style: none;

      &--icon {
        font-size: 25px;
        color: rgb(184, 184, 184);
      }
    }
    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px 0;
      list-style: none;
      padding: 0;
      padding: 10px 20px;
      border-radius: 15px;
      transition: all 0.3s ease;

      &:hover {
        background-color: rgba(0, 0, 0, 0.04);
      }
    }
    &__button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 20px;
      border-radius: 15px;
      border: none;
      background-color: rgba(0, 0, 0, 0.04);
      transition: all 0.3s ease;
      outline: none;
      &:hover {
        cursor: pointer;
        .menu__item--icon {
          color: black;
        }
      }
    }
  }
}
</style>
