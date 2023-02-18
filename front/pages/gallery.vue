<template>
  <section class = "section-three">
    <div class = "container">
      <div class = "gallery">
        <a :href = item.videoLink v-for="(item, index) in workGalleryList" :key="index">
          <div class = "single-img">
            <img :src ="require(`~/assets/images/${item.pictureName}`)" :alt = item.name>
            <div class = "single-img-content">
              <h3>{{ item.name }}</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { GalleryPicture } from "~/model/GalleryPicture";

export default {
  name: "GalleryPage",
  data() {
    return {
      title: 'Gallery',
      workGalleryList: [
        new GalleryPicture("Обои для IPhone free", "gallery1.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Люблю ШВЕЕПС", "gallery2.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Голуби летом", "gallery3.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Наклеил на окно типо на море", "gallery4.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Нига?", "gallery5.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Лови волну", "gallery6.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Честно спиздил, но если кто спросит, сам сделал", "gallery7.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Теперь на работе не покормят(", "gallery8.jpg", "http://localhost:3000/gallery"),
        new GalleryPicture("Ебаать кораблики", "gallery9.jpg", "http://localhost:3000/gallery"),
      ]
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Gallery page',
          name: 'Gallery page',
          content: 'My portfolio',
        }
      ]
    }
  }
};
</script>
