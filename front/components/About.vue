<template>
  <div class = "container about">
    <div class = "about-content">
      <div class = "about-img flex">
        <img src = "@/assets/images/about-img.jpg" alt = "photographer img">
      </div>
      <h2>I'm Sarah Doe</h2>
      <h3>Photographer | Traveller</h3>
      <blockquote>
        "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever ... It remembers little things, long after you have forgotten everything."
        <span>-Aaron Siskind</span>
      </blockquote>
    </div>

    <div class = "social-icons">
      <ul>
        <li v-for="(item, index) in iconInfoList" :key="index">
          <a :href = item.link><i :class = item.icon></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { IconInfo } from "~/model/IconInfo";

export default {
  name: "AboutComponent",
  data() {
    return {
      iconInfoList: [
        new IconInfo("http://localhost:3000/", "fab fa-facebook"),
        new IconInfo("http://localhost:3000/", "fab fa-twitter"),
        new IconInfo("http://localhost:3000/", "fab fa-instagram"),
        new IconInfo("http://localhost:3000/", "fab fa-pinterest"),
      ]
    }
  }
};
</script>
