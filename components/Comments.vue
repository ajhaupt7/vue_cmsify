<template>
<div class="comments">
  <div class="disqus" :class="{ ready: disqusReady }">
    <no-ssr>
      <lazy-component>
        <VueDisqus shortname="yasark-de" :identifier="post.slug" @ready="disqusReady = true"></VueDisqus>
      </lazy-component>
    </no-ssr>
  </div>
</div>
</template>

<script>
import VueDisqus from 'vue-disqus/VueDisqus.vue'
export default {
  props: {
    post: Object
  },
  components: {
    VueDisqus
  },
  data () {
    return {
      disqusReady: false
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  margin-top: 40px;
}
</style>
