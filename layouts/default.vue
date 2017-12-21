<template>
  <div>
    <nuxt/>
  </div>
</template>

<style lang="scss">
// @import '~assets/styles/normalize.scss';
</style>

<style lang="sass">
 @import "bulma/sass/utilities/_all";
 @import "bulma/sass/base/_all";
 @import "bulma/sass/elements/title";
 @import "bulma/sass/grid/columns";
</style>


<style lang="scss">
@import '~assets/styles/variables.scss';

html {
  font-family: $body-font;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  @media screen and (max-width: 678px) {
    padding: 10px;
  }
}

p, a {
  font-size: 22px;
}

.typed {
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: .15em; /* Adjust as needed */
  animation:
    typing 3.5s steps(40, end);
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.title {
  font-family: $title-font; /* 1 */
  display: block;
  margin: 0;
  margin-top: 20px;
  font-weight: 600;
  font-size: 48px;
  letter-spacing: 1px;
}

a {
  color: black;
  transition: all 300ms ease-in-out;

  &:hover {
    color: red;
  }
}

.page-enter-active,
.page-leave-active {
    transition: all .4s cubic-bezier(0.165, 0.840, 0.440, 1.000);
}

.page-enter,
.page-leave-active {
    opacity: 0;
    transform: scale(0.95);
    transform-origin: 50% 50%;
}
</style>
