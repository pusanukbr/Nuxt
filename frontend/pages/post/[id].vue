<script setup lang="ts">
definePageMeta({
    title: "Post",
    description: "Post page",
    middleware: ["track-previous"],
});

import HeaderPage from "../../components/headerPage.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
const { t } = useI18n();

const router = useRoute();
const postId = router.params.id;
const previousPage: string = useState("previousPath");
const backLink: string =
    previousPage.value === router.path ? "/" : previousPage;


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
            <div class="page-post__activity">
                <div class="page-post__activity--wrapper">
                    <span class="page-post__activity--answer">Відповіді</span>
                    <div class="page-post__activity--watch">
                        <span>Переглянути дії <Icon name="" /></span>
                    </div>
                </div>
            </div>
            <div
                class="page-post__comment"
                v-if="post?.comments?.length > 0"
                v-for="comment in post.comments"
                :key="comment.id"
            >
                <Comments :comment="comment" />
            </div>
        </div>
    </HeaderPage>
</template>


<style lang="scss">
.page-post {
    display: flex;
    flex-direction: column;

    flex-grow: 1;

    height: 100%;

    &__activity {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        width: 100%;

        padding: 0 24px;

        font-size: 14px;

        &--wrapper {
            display: flex;

            width: 100%;

            padding: 24px 0;

            border-top: 1px solid var(--border);
        }

        &--answer {
            font-weight: 600;
            color: var(--primery-text);
        }

        &--watch {
            display: flex;
            justify-content: flex-end;

            width: 100%;

            color: var(--secondary-text);

            span {
                cursor: pointer;
            }
        }
    }

    &__comment {
        padding: 0 24px;
    }
}
</style>
