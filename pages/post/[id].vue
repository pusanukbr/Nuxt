<script setup lang="ts">
definePageMeta({
    title: "Post",
    description: "Post page",
    middleware: ['track-previous']
});

import {useI18n} from "vue-i18n";
import {useRoute} from 'vue-router';

const router = useRoute();
const postId = router.params.id;
const previousPage: String = useState('previousPath');

const {t} = useI18n();

const title = useState("layoutTitle");
title.value = t("postTitle");

const {data: post, pending} = useAsyncData(`post-${postId}`, async () => {
    return await $fetch(`/api/posts/${postId}`);
});
</script>

<template>
    <SkeletonPost v-if="pending"/>
    <PostCard v-else :post="post" :user="post.user"/>

</template>

<style lang="scss"></style>
