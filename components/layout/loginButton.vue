<template>
  <div class="login">
    <NuxtLink to="/login">
      <button class="login__button">{{ $t("login") }}</button>
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style lang="scss">
.login {
  position: fixed;
  top: 20px;
  right: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .login__button {
    width: 100px;
    height: 30px;

    outline: none;
    border: 0;
    border-radius: 5px;
    background-color: #000;

    color: #fff;
    font-size: 14px;
    font-weight: 700;

    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
}
</style>
