<!-- layouts/default.vue -->
<template>
  <div class="main">
    <header class="header">
      <div class="logo">
        <NuxtLink to="/" class="logo__link"
          ><Icon name="my-icon:logo-happy" title="Logo" class="logo__icon"
        /></NuxtLink>
      </div>
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
      <div class="burger">
        <NuxtLink to="/"
          ><Icon name="fluent:list-24-regular" class="menu__item--icon"
        /></NuxtLink>
      </div>
      <ul class="burgerMenu">
        <li class="burgerMenu__item">
          <button>{{ $t("theme") }}</button>
          <ul class="themeToggle">
            <li>
              <button>{{ $t("light") }}</button>
            </li>
            <li>
              <button>{{ $t("dark") }}</button>
            </li>
            <li>
              <button>{{ $t("system") }}</button>
            </li>
          </ul>
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
    </header>

    <div class="page">
      <slot />
    </div>

    <div class="login">
      <NuxtLink to="/login">
        <button class="login__button">{{ $t("login") }}</button>
      </NuxtLink>
    </div>

    <footer class="footer">
      <p>{{ $t("year", { year: currentYear }) }}</p>
      <ul>
        <li>
          <a href="#">{{ $t("terms") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("privacy") }}</a>
        </li>
        <li>
          <a href="#">{{ $t("cookie") }}</a>
        </li>
        <li>
          <a>{{ $t("report") }}</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.page {
  max-width: calc((100% - 100px) / 2);
  width: 100%;
}
.login {
  position: fixed;
  top: 50px;
  right: 50px;
  &__button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: black;
    transition: all 0.3s ease;
    color: white;
    outline: none;
    cursor: pointer;
  }
}

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
}

.themeToggle {
  display: none;
}
.burgerMenu {
  display: none;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;

  &__icon {
    font-size: 65px;
    transition: all 0.3s ease;
    color: rgb(184, 184, 184);
  }
  &:hover {
    .logo__icon {
      transform: scale(1.1);
    }
  }
}

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
      // background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
      .menu__item--icon {
        color: black;
      }
    }
  }
}

.footer {
  padding-left: 100px;
}
</style>
