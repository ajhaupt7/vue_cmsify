<template>
  <div class='social-bar'>
    <a class='icon' title='GitHub' href='https://github.com/yashha'><Github /></a>
    <a class='icon' title='GitHub Profile Summary' href='https://github-profile-summary.com/user/yashha'><GithubProfile /></a>
    <a class='icon' title='Twitter' href='https://twitter.com/yashha2'><Twitter /></a>
  </div>
</template>

<script>
import Github from '~/components/icons/Github'
import GithubProfile from '~/components/icons/GithubProfile'
import Twitter from '~/components/icons/Twitter'

export default {
  components: {
    Github,
    GithubProfile,
    Twitter
  }
}
</script>

<style lang="scss" scoped>
  .social-bar {
    text-align: center;

    .icon {
      display: inline-block;
      margin: 0 30px;
      transition: all 0.3s ease-out;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
</style>
