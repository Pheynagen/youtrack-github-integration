<template>
  <div id="app">
    <MyHeader />
    <nuxt />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "~/components/MyHeader";
import MyFooter from "~/components/MyFooter";

export default {
  name: "DefaultLayout",
  components: {
    MyHeader,
    MyFooter
  },
  head() {
    return {
      title: `ValerKino - ${this.title}`,
      meta: [
        {
          hid: 'Contact page',
          name: 'Contact page',
          content: 'Home page description'
        }
      ]
    }
  }
};
</script>
