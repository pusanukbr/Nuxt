<!-- layouts/default.vue -->
<template>
  <div class="main">
    <!-- Header -->
    <Header />

    <div class="page">
      <slot />
    </div>

    <!-- Login Button -->
    <LoginButton />

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/layout/footer.vue";
import LoginButton from "../components/layout/loginButton.vue";
import Header from "../components/layout/header.vue";

const currentYear = new Date().getFullYear();
</script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
}
.page {
  max-width: calc((100% - 100px) / 2);
  width: 100%;

  margin: 0 auto;
}
</style>
