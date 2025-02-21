<template>
    <div class="post-card">
        <div class="post-card__col">
            <UserAvatar :src="user.avatar" />
        </div>
        <div class="post-card__col">
            <PostHeader :user="user" :createdAt="post.createdAt" />
            <PostContent :content="post.content" />
            <PostActions
                :likes="post.likes"
                :commentsCount="post.comments.length"
            />
            <!-- <PostComments :comments="post.comments" />
            <PostAddComment @add-comment="handleAddComment" /> -->
        </div>
    </div>
</template>

<script setup>
defineProps(["post", "user"]);

const handleAddComment = (text) => {
    console.log("Новий коментар:", text);
};
</script>

<style lang="scss">
.post-card {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid var(--border);

    &:last-child {
        border-bottom: none;
    }

    &__col {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
    }
}
</style>
