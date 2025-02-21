<template>
    <div class="feed-page">
        <div class="feed-page__title">
            <h1>{{ t("feed") }}</h1>
            <div class="feed-page__title-bottom"></div>
        </div>
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

        /* border-bottom: 1px solid var(--border); */

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

        padding: 20px;

        border: 1px solid var(--border);
        border-top: 0;
        border-radius: 20px;

        background-color: var(--secondary-bg);
    }
}
</style>
