// store/auth.ts
import { defineStore } from 'pinia'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [], // За замовчуванням користувач не авторизований
    pending: false
  }),
  actions: {
    async fetchPost() {
      const { $axios, $errorLog } = useNuxtApp()
      this.pending = true

      try {
        const response = await $axios.get('/posts')
        this.posts = response.data.reverse()
        this.pending = false
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async createPost(content: string) {
      const { $axios, $errorLog } = useNuxtApp()
      this.pending = true

      try {
        const response = await $axios.post('/posts/createPost', { content })
        this.posts.unshift(response.data)
        this.pending = false
      } catch (error) {
        $errorLog(error)
      }
    },

    async deletePost(postId: string) {
      const { $axios, $errorLog } = useNuxtApp()
      this.pending = true

      try {
        await $axios.delete(`/posts/deletePost/${postId}`)
        this.posts = this.posts.filter((post) => post.id !== postId)
        this.pending = false
      } catch (error) {
        $errorLog(error)
      }
    },

    async updatePost(postId: string, content: string) {
      const { $axios, $errorLog } = useNuxtApp()
      this.pending = true

      try {
        const response = await $axios.put(`/posts/updatePost/${postId}`, { content })
        const index = this.posts.findIndex((post) => post.id === postId)
        if (index !== -1) {
          this.posts[index] = response.data
        }
        this.pending = false
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostById(postId: string) {
      const { $axios, $errorLog } = useNuxtApp()
      try {
        const response = await $axios.get(`/posts/${postId}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByUserId(userId: string) {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get(`/posts/getPostsByUserId/${userId}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByTag(tag: string) {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get(`/posts/getPostsByTag/${tag}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },
    async fetchPostsByDate(date: string) {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get(`/posts/getPostsByDate/${date}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },
    async fetchPostsByDateRange(startDate: string, endDate: string) {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get(`/posts/getPostsByDateRange/${startDate}/${endDate}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByKeyword(keyword: string) {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get(`/posts/getPostsByKeyword/${keyword}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByCategory(category: string) {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get(`/posts/getPostsByCategory/${category}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByLocation(location: string) {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get(`/posts/getPostsByLocation/${location}`)
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByPopularity() {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get('/posts/getPostsByPopularity')
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByComments() {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get('/posts/getPostsByComments')
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByLikes() {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get('/posts/getPostsByLikes')
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByShares() {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get('/posts/getPostsByShares')
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByViews() {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get('/posts/getPostsByViews')
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    },

    async fetchPostsByReactions() {
      const { $axios, $errorLog } = useNuxtApp()

      try {
        const response = await $axios.get('/posts/getPostsByReactions')
        return response.data
      } catch (error) {
        $errorLog(error)
      }
    }
  }
})
