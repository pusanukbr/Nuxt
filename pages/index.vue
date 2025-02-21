<template>
    <div class="feed-page">
        <h1 class="feed-page__title">{{ t("feed") }}</h1>
        <div class="feed-page__posts">
            <PostCard
                v-for="post in posts"
                :key="post.id"
                :post="post"
                :user="post.user"
            />
        </div>
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { data: posts } = await useFetch("/api/posts");

const { t } = useI18n();
</script>

<style lang="scss">
.feed-page {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 640px;

    &__title {
        position: sticky;
        top: 0;
        right: 0;

        width: 100%;

        background-color: var(--primary-bg);

        text-align: center;

        z-index: 100;

        &::before {
            content: "";
            position: absolute;
            bottom: -20px;
            left: -1px;
            width: 20px;
            height: 20px;
            background: transparent;
            z-index: 10;
            border-top-left-radius: 20px;
            box-shadow: -6px -6px var(--primary-bg);
        }
        &::after {
            content: "";
            position: absolute;
            bottom: -20px;
            right: -1px;
            width: 20px;
            height: 20px;
            background: transparent;
            z-index: 10;
            border-top-right-radius: 20px;
            box-shadow: 6px -6px var(--primary-bg);
        }
    }
    &__posts {
        position: relative;

        display: flex;
        flex-direction: column;

        width: 100%;

        padding: 20px;

        /* border: 1px solid red; */
        border-radius: 20px;

        background-color: var(--primary-bg);
    }
}
</style>
