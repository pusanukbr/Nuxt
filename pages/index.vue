<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

definePageMeta({
    title: "Feed",
    description: "Feed page",
});

const { data: posts, pending } = useAsyncData("posts", async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000)); // Імітація затримки
    return await $fetch("/api/posts");
});
</script>

<template>
    <div class="content">
        <div class="content__title">
            <div class="content__back"></div>
            <h1>{{ t("feed") }}</h1>
            <div class="content__title-bottom" />
        </div>
        <div class="content__posts">
            <SkeletonPost v-if="pending" v-for="n in 12" :key="n" />
            <PostCard
                v-else
                v-for="post in posts"
                :key="post.id"
                :post="post"
                :user="post.user"
            />
        </div>
    </div>
</template>

<style lang="scss"></style>
