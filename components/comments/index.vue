<script setup lang="ts">
const { commmets, user } = defineProps<{
    commmets?: Object;
    user?: Object;
}>();
</script>

<template>
    <div class="post-card" @click="routerToPost">
        <div class="post-card__col">
            <UserAvatar :src="user.avatar" />
        </div>
        <div class="post-card__col">
            <PostHeader :user="user" :createdAt="comments.createdAt" />
            <PostContent :content="comments.content" />
            <PostActions
                :likes="comments.likes"
                :commentsCount="comments.replies.length"
            />
        </div>
    </div>
</template>
