<template>
  <div class='social-bar'>
    <a class='icon' href='https://github.com/yashha'><Github /></a>
    <a class='icon' href='https://github-profile-summary.com/user/yashha'><GithubProfile /></a>
  </div>
</template>

<script>
import Github from '~/components/icons/Github'
import GithubProfile from '~/components/icons/GithubProfile'

export default {
  components: {
    Github,
    GithubProfile
  }
}
</script>

<style lang="scss" scoped>
  .social-bar {
    text-align: center;
    
    .icon {
      display: inline-block;
      margin: 0 30px;
    }
  }
</style>