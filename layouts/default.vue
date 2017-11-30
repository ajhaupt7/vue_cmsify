<template>
  <div>
    <nuxt/>
  </div>
</template>

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
  background-image: linear-gradient(to right bottom, #e56440, #f44c55, #fc2e71, #fa0b94, #eb12bc);
  color: $text-color;
}

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
  font-size: 80px;
  color: $text-color;
  letter-spacing: 1px;
}

a {
  color: white;
}

</style>
