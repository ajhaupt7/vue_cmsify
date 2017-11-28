<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Vue CMSify
      </h1>
      <h3 class="subtitle">
        Template for building Vue CMS projects w/ Nuxt + Nuxtent + Netlify
      </h3>
      <h4>Assembled by Andrew Haupt</h4>
      <div class="recent-posts">
        <div v-for="post in posts" :key="post.date" class="row post mb-5 justify-content-center">
          <div class="col-sm-10">
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
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/').getAll()
    }
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.subtitle {
  font-weight: 300;
  font-size: 32px;
  line-height: 48px;
  color: $text-color;
  padding: 15px 30px;
  width: 80%;
  min-width: 250px;
  display: block;
  margin: auto;
}

.links {
  padding-top: 15px;
}

.recent-posts {
  border-top: 1px solid $text-color;
  width: 80%;
  min-width: 250px;
  display: block;
  padding: 30px 0;
  margin: 30px auto 0;
  text-align: left;
  .created-at {
    margin-bottom: 10px;
  }
}
</style>
