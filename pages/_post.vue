<template>
  <section class="container">
    <div class="back"><nuxt-link to="/">Back</nuxt-link></div>
    <h1 class="title typed">{{ post.title }}</h1>
    <section v-html="post.body" />
  </section>
</template>

<script>
export default {
  async asyncData ({ app, route }) {
    return {
      post: await app.$content('/').get(route.path)
    }
  },
  head () {
    return {
      title: this.post.title + ' | yasark.de'
    }
  }
}
</script>

<style lang="scss" scoped>
.back a {
  display: inline-block;
  font-size: 16px;
  padding: 10px;
  width: auto;
  border: 1px solid rgba(0,0,0,0.3);
  margin-top: 5px;

  @media screen and (max-width: 676px) {
    font-size: 22px;
  }
}
.container {
  text-align: left;
  h1 {
    margin-bottom: 15px;
  }
}
</style>

