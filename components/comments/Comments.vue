<script setup lang="ts">
const { comment } = defineProps<{
    comment: Object;
}>();

const hideReplies = ref(true);
</script>

<template>
    <div class="comment">
        <div class="comment__content">
            <div v-if="comment.replies.length" class="comment__border"></div>
            <div class="comment__content-col">
                <UserAvatar :src="comment.user.avatar" />
            </div>
            <div class="comment__content-col">
                <PostHeader
                    :user="comment.user"
                    :createdAt="comment.createdAt"
                />
                <PostContent :content="comment.text" />
                <PostActions
                    :likes="comment?.likes"
                    :commentsCount="comment.replies.length"
                />
            </div>
        </div>
        <div v-if="comment.replies.length" class="comment__replies-wrapp">
            <div
                class="comment__replies-info"
                v-if="hideReplies"
                @click="hideReplies = !hideReplies"
            >
                Show replies {{ comment.replies.langth }}
            </div>
            <div
                class="comment__replies"
                v-else
                v-for="replie in comment.replies"
                :key="replie.id"
            >
                <Comments :comment="replie" />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.comment {
    border: 1px solid red;
    &__content {
        position: relative;
        display: flex;
        gap: 10px;
    }

    &__content-col {
    }

    &__replies-wrapp {
        padding-left: 30px;
    }
}
</style>
