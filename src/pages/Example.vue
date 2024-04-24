<script>
import { fetchPost } from '@/queries/posts'
export default {
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    const userRes = await fetchPost()
    this.posts = userRes
  }
}
</script>

<template>
  <main class="container mx-auto">
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id" class="card bg-primary my-4 p-4">
        {{ post.title }}
      </li>
    </ul>
  </main>
</template>
