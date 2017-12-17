<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="profile-image-wrapper"><ProfileImage /></div>
          <h4 class="profile-text">Yasar Kücükkaya</h4>
        </div>
      </div>
      <div class="recent-posts">
        <div v-for="post in posts" :key="post.date" class="post">
          <h6 class="created-at" v-html="post.date"></h6>
          <h2>
            <nuxt-link
              class="post-title typed"
              :to="post.permalink"
            >
            <div class="typed">{{ post.title }}</div>
            </nuxt-link>
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileImage from '~/components/ProfileImage'
export default {
  components: {
    ProfileImage
  },
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/').getAll()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables.scss';

.profile-image-wrapper {
  margin: 0 auto;
  margin-top: 20px;
}

.profile-text {
  text-align: center;
  margin-top: 20px
}

.links {
  padding-top: 15px;
}

.recent-posts {
  display: block;
  margin-top: 20px;
  min-width: 250px;
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
