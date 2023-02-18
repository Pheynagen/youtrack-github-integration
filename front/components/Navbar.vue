<template>
  <div class="nav-section">
    <div class="brand-and-navBtn">
                    <span class="brand-name">
                        SARAHLAB
                    </span>
      <span class="navBtn flex"  v-on:click="showNav()">
                        <i class="fas fa-bars"></i>
                    </span>
    </div>

    <!-- navigation menu -->
    <nav class="top-nav" :class="[isShow ? 'showNav' : '']">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/gallery">Gallery</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
    <span class="search-icon">
                    <i class="fas fa-search"></i>
                </span>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showNav() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
