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
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
@import '~assets/styles/variables.scss';

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: $title-font; /* 1 */
  display: block;
  font-weight: 600;
  font-size: 100px;
  color: $text-color;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 32px;
  line-height: 48px;
  color: $text-color;
  padding: 15px 30px;
}

.links {
  padding-top: 15px;
}
</style>
