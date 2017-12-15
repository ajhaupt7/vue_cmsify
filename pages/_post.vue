<template>
  <section class="container">
    <div class="back"><nuxt-link to="/">Back</nuxt-link></div>
    <h1 class="title">{{ post.title }}</h1>
    <section v-html="post.body" />
  </section>
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

<style lang="scss" scoped>
.back a {
  font-size: 16px;
  padding: 10px 0;
  display: block;
  width: auto;
}
.container {
  text-align: left;
  h1 {
    margin-bottom: 15px;
  }
}
</style>

