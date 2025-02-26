<template>
    <div class="post-card" @click.prevent="routerToPost">
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
        </div>
    </div>
</template>

<script setup lang="ts">
const { post, user } = defineProps<{
    post?: Object;
    user?: Object;
}>();
const router = useRouter();


const routerToPost = () => {
    if(!post) {
        console.log("Already on post page");
        return;
    }
    router.push(`/post/${post.id}`);
};

</script>

<style lang="scss">
.post-card {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid var(--border);

    cursor: pointer;

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
