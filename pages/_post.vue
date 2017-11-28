<template>
  <div>
    <h1>{{ post.title }}</h1>
    <section v-html="post.body" />
  </div>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/').get(route.path)
    }
  }
}
</script>
