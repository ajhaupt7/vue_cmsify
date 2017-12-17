<template>
  <div class="profile-image-wrapper">
    <img class="profile-image" src="~/static/bio-photo.jpg" />
  </div>
</template>

<style lang="scss">
.profile-image-wrapper {
  margin: 15px;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  text-align: right;

  .profile-image {
    width: 100%;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
