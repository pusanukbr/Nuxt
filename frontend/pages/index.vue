<script setup lang="ts">
import HeaderPage from '../components/headerPage.vue'
import { usePostStore } from "../store/post";
import { onMounted } from 'vue'

definePageMeta({
  title: 'Feed',
  description: 'Feed page',
})

const router = useRouter()

const postStore = usePostStore()

onMounted(() => {
  // Fetch posts when the component is mounted
  postStore.fetchPost()
})

const pending = computed(() => postStore.pending);
const posts = computed(() => postStore.posts);


const routerToPost = (id: number) => {
  router.push(`/post/${id}`)
}

</script>

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
