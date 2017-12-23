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
        <div v-for="post in posts" :key="post.datetime" class="post draw meet">
          <nuxt-link
            class="link"
            :to="post.permalink"
          >
            <h6 class="created-at" v-html="parseDateAgo(post.datetime)" v-bind:title="parseDate(post.datetime)"></h6>
            <h2>
              <div class="post-title typed">{{ post.title }}</div>
            </h2>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProfileImage from '~/components/ProfileImage'
import SocialBar from '~/components/SocialBar'
import timeago from 'timeago.js'
import tinydate from 'tinydate'
export default {
  components: {
    ProfileImage,
    SocialBar
  },
  async asyncData ({ app }) {
    return {
      posts: (await app.$content('/').getAll()).sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
    }
  },
  methods: {
    parseDateAgo: (date) => {
      var timeagoInstance = timeago()
      return timeagoInstance.format(date)
    },
    parseDate: (date) => {
      const parsedDate = new Date(date)
      const stamp = tinydate('{DD}.{MM}.{YYYY} {HH}:{mm}:{ss}')
      return stamp(parsedDate)
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

  .link {
    pointer-events: all;
    display: block;
  }

  .post {
    @media all and (max-width: 678px) {
      margin: 0;
      padding: 5px;
    }
  }
}
</style>
