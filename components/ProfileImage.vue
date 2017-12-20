<template>
  <div class="profile-image-wrapper">
    <img class="profile-image" alt='Profile Image' src="~/static/bio-photo.jpg" />
  </div>
</template>

<style lang="scss"scoped>
.profile-image-wrapper {
  border-radius: 100%;
  width: 150px;
  height: 150px;
  overflow: hidden;

  .profile-image {
    width: 100%;
  }
}
</style>
