<!-- layouts/default.vue -->
<template>
    <div class="main">
        <!-- Header -->
        <Header />

        <div class="main__page">
            <div class="content">
                <div class="content__title">
                    <div class="content__back"></div>
                    <h1 v-html="title" />
                    <div class="content__title-bottom" />
                </div>
                <div class="content__posts">
                    <slot />
                </div>
            </div>
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

const title = useState("layoutTitle", () => "Default Title");
</script>

<style lang="scss">
.main {
    display: flex;
    flex-direction: column;

    min-height: 100vh;

    &__page {
        display: flex;
        justify-content: center;
        flex-grow: 1;
        width: 100%;

        padding-left: 100px;
    }

    .content {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        width: 640px;
        height: 100%;

        padding-bottom: 20px;

        &__title {
            position: sticky;
            top: 0;
            right: 0;

            width: 100%;

            padding: 10px 0;

            background-color: var(--primary-bg);

            text-align: center;

            z-index: 100;

            &::before {
                content: "";
                position: absolute;
                bottom: -20px;
                left: 0;

                width: 20px;
                height: 20px;

                background: transparent;

                border-top: 1px solid var(--border);
                border-top-left-radius: 20px;
                box-shadow: -6px -6px var(--primary-bg);

                z-index: 10;
            }
            &::after {
                content: "";
                position: absolute;
                bottom: -20px;
                right: 0;

                width: 20px;
                height: 20px;

                background: transparent;

                border-top: 1px solid var(--border);
                border-top-right-radius: 20px;
                box-shadow: 6px -6px var(--primary-bg);

                z-index: 10;
            }
            &-bottom {
                position: absolute;
                bottom: 0;
                left: 20px;

                width: calc(100% - 40px);
                height: 1px;

                background-color: var(--border);
            }
        }
        &__posts {
            position: relative;

            display: flex;
            flex-direction: column;

            width: 100%;
            height: 100%;

            border: 1px solid var(--border);
            border-top: 0;
            border-radius: 20px;

            background-color: var(--secondary-bg);
        }
    }
}
</style>
