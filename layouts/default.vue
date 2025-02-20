<!-- layouts/default.vue -->
<template>
    <div class="main">
        <!-- Header -->
        <Header />

        <div class="main__page">
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
</script>

<style lang="scss">
.main {
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    &__page {
        flex-grow: 1;
        max-width: calc((100% - 100px) / 2);
        width: 100%;

        margin: 0 auto;

        text-align: center;
    }
}
.dark {
    .main {
        background-color: #000;
        color: white;
    }
}
</style>
