<template>
    <div class="post-card">
        <PostHeader :user="user" :createdAt="post.createdAt" />
        <PostContent :content="post.content" />
        <PostActions
            :likes="post.likes"
            :commentsCount="post.comments.length"
        />
        <PostComments :comments="post.comments" />
        <PostAddComment @add-comment="handleAddComment" />
    </div>
</template>

<script setup>
defineProps(["post", "user"]);

const handleAddComment = (text) => {
    console.log("Новий коментар:", text);
};
</script>
