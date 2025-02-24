<script setup>
definePageMeta({
    title: "Post",
    description: "Post page",
});

import { useI18n } from "vue-i18n";
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const { t } = useI18n();


const { data: post, pending } = useAsyncData(`post-${postId}`, async () => {
    return await $fetch(`/api/posts/${postId}`);
});
</script>

<template>
    <div class="post-page">
        <div class="post-page__title">
            <h1>{{ t("post") }}</h1>
            <div class="post-page__title-bottom"></div>
        </div>
        <div class="post-page__post">
            <SkeletonPost v-if="pending" />
            <PostCard v-else :post="post" :user="post.user" />
        </div>
    </div>
</template>

<style lang="scss"></style>
