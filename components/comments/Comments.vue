<script setup lang="ts">
const { comment, deep } = defineProps<{
    comment?: Object;
    deep?: Number;
}>();

</script>

<template>
    <div :class="`post-card post-card--deep-${deep}`">
        <div class="post-card__col">
            <UserAvatar :src="comment.user.avatar" />
        </div>
        <div class="post-card__col">
            <p>Глибина: {{ deep }}</p>
            <p>Replies: {{ comment.replies ? comment.replies.length : 0 }}</p>
            <PostHeader :user="comment.user" :createdAt="comment.createdAt" />
            <PostContent :content="comment.content" />
            <PostActions
                :likes="comment.likes || 0"
                :commentsCount="comment.replies.length"
            />
        </div>

    </div>
    <Comments
        v-if="comment.replies.length"
        v-for="reply in comment.replies"
        :key="reply.id"
        :deep="deep + 1"
        :comment="reply"
    />

</template>
