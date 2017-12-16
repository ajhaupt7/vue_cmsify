<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>

export default {
  mounted () {
    var TinyTyper = require('tinytyper')
    const el = document.querySelector('.typed')
    const options = {
      staticCursor: false
    }
    const instance = new TinyTyper(el, options)
    console.log(instance)

    instance.animate()
  }
}
</script>

<style lang="scss">
@import '~assets/styles/normalize.scss';
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

</style>
