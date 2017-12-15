<template>
  <section class="container">
    <div>
      <h1 class="title">
        yasark
      </h1>
      <h4>- Yasar Kücükkaya</h4>
      <div class="recent-posts">
        <div v-for="post in posts" :key="post.date" class="post">
          <h6 class="created-at" v-html="post.date"></h6>
            <h2>
              <nuxt-link
                class="post-title"
                :to="post.permalink"
              >
                {{ post.title }}
              </nuxt-link>
            </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/').getAll()
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.links {
  padding-top: 15px;
}

.recent-posts {
  margin-top: 20px;
  border-top: 1px solid black;
  width: 80%;
  min-width: 250px;
  display: block;
  // padding: 30px 0;
  // margin: 30px auto 0;
  text-align: left;

  .post {
    border-top: 1px solid black;
    padding: 20px 0;
  }
  .created-at {
    font-size: 16px;
    margin-bottom: 10px;
  }
}
</style>
