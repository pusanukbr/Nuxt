<script setup lang="ts">
import HeaderPage from '../components/headerPage.vue'

const router = useRouter()

definePageMeta({
  title: 'Feed',
  description: 'Feed page'
})

const { data: posts, pending } = await useAsyncData('posts', () => $fetch('/api/posts'))

const routerToPost = (id: number) => {
  router.push(`/post/${id}`)
}
</script>
Ï
<template>
  <HeaderPage title="feed">
    <SkeletonPost v-if="pending" v-for="n in 12" :key="n" />
    <PostCard
      v-else
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :user="post.user"
      @click="routerToPost(post.id)"
    />
  </HeaderPage>
</template>

<style lang="scss"></style>
