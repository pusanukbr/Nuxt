<script setup lang="ts">
import HeaderPage from "../../components/headerPage.vue";

definePageMeta({
    title: "Post",
    description: "Post page",
    middleware: ["track-previous"],
});

import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const router = useRoute();
const postId = router.params.id;
const previousPage: string = useState("previousPath");
const backLink: string =
    previousPage.value === router.path ? "/" : previousPage;
const { t } = useI18n();

const { data: post, pending } = useAsyncData(`post-${postId}`, async () => {
    return await $fetch(`/api/posts/${postId}`);
});
</script>

<template>
    <HeaderPage title="postTitle" :back-link="backLink">
        <div class="page-post">
            <div class="page-post__post">
                <SkeletonPost v-if="pending" />
                <PagePostCard v-else :post="post" :user="post.user" />
            </div>
            <div class="page-post__activity"></div>
            <div class="page-post__comment"></div>
        </div>
    </HeaderPage>
</template>

<style lang="scss">
.page-post {
    display: flex;
    flex-direction: column;

    flex-grow: 1;

    height: 100%;
}
</style>
