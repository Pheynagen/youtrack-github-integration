<template>
  <div class="section-two">
    <div class="container">
      <h2>FOLLOW ON INSTAGRAM</h2>
      <span>@sarah_photographer</span>
      <div class="insta-imgs">
        <div v-for="(picture, index) in instagramPhotoList" :key="index">
          <a :href = picture.link target="_blank">
          <img :src ="require(`~/assets/images/${picture.pictureName}`)">
          <div class="icon-overlay flex">
            <i class="fab fa-instagram"></i>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {PictureWithLink} from "~/model/PictureWithLink";

export default {
  name: "InstagramBlock",
  data() {
    return {
      instagramPhotoList: [
        new PictureWithLink("insta-1.jpg", "https://www.instagram.com/"),
        new PictureWithLink("insta-2.jpg", "https://www.instagram.com/"),
        new PictureWithLink("insta-3.jpg", "https://www.instagram.com/"),
        new PictureWithLink("insta-4.jpg", "https://www.instagram.com/"),
      ]
    }
  }
};
</script>
