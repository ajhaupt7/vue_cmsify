<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="profile-image-wrapper"><ProfileImage /></div>
          <h1 class="title center">Yasar Kücükkaya</h1>
          <div class="subtitle center">webdev, open source and left activism</div>
          <SocialBar />
        </div>
      </div>
      <div class="recent-posts">
        <div v-for="post in posts" :key="post.datetime" class="post draw meet">
          <nuxt-link
            class="link"
            :to="post.permalink"
          >
            <div class="created-at" v-html="parseDateAgo(post.datetime)" v-bind:title="parseDate(post.datetime)"></div>
            <div>
              <div class="post-title typed">{{ post.title }}</div>
            </div>
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
    const [postsRes, projectsRes] = await Promise.all([
      (await app.$content('/posts').getAll()).sort((a, b) => new Date(b.datetime) - new Date(a.datetime)),
      await app.$content('/projects').getAll()
    ])
    return {
      posts: postsRes,
      projects: projectsRes
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

.center {
  text-align: center;
}

.title {
  font-size: 2.5rem;
  color: #363636;
}
.subtitle {
  font-size: 1.5rem;
  color: #4a4a4a;
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
    font-weight: 400;

    a {
      text-decoration: none;
    }
    @media all and (max-width: 678px) {
      margin: 0;
      padding: 5px;
    }
  }
}
</style>
