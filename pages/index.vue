<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="profile-image-wrapper"><ProfileImage /></div>
          <h4 class="title is-2 profile-text">Yasar Kücükkaya</h4>
          <h4 class="subtitle is-4 profile-text">webdev, open source and left activism</h4>
          <SocialBar />
        </div>
      </div>
      <div class="recent-posts">
        <div v-for="post in posts" :key="post.date" class="post draw meet">
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
import SocialBar from '~/components/SocialBar'
export default {
  components: {
    ProfileImage,
    SocialBar
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
@import '~assets/styles/plugins/button_animation.scss';

.profile-image-wrapper {
  margin: 0 auto;
  margin-top: 20px;
}

.profile-text {
  text-align: center;
}

.links {
  padding-top: 15px;
}

.recent-posts {
  display: block;
  margin-top: 20px;
  min-width: 250px;
  text-align: left;

  .created-at {
    font-size: 16px;
    margin-bottom: 10px;
  }
}
</style>
