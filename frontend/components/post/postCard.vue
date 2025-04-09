<script setup lang="ts">
import { useAuthStore } from '../../store/auth'

const authStore = useAuthStore()

const { post, user } = defineProps<{
  post?: object
  user?: object
}>()
const router = useRouter()

const routerToPost = () => {
  router.push(`/post/${post.id}`)
}
</script>

<template>
  <div class="post-card">
    <div class="post-card__col">
      <UserAvatar :src="user.avatar" />
    </div>
    <div class="post-card__col">
      <PostHeader :user="user" :createdAt="post.createdAt" />
      <PostContent :content="post.content" />
      <PostActions
        v-if="authStore.isAuthenticated"
        :likes="post.likes"
        :commentsCount="post.comments.length"
        @openComments="routerToPost"
      />
    </div>
  </div>
</template>

<style lang="scss">
.post-card {
  display: flex;
  gap: 1rem;

  width: 100%;

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
