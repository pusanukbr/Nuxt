<template>
    <div class="comment-thread">
        <PostComment :comment="comment" />
        <div v-if="comment.replies && comment.replies.length" class="replies">
            <CommentThread
                v-for="reply in comment.replies"
                :key="reply.id"
                :comment="reply"
            />
        </div>
    </div>
</template>

<script setup>
defineProps(["comment"]);
</script>

<style scoped>
.replies {
    margin-left: 20px;
    border-left: 2px solid #eee;
    padding-left: 10px;
}
</style>
