<template>
  <div>
    <InfoBlock />
    <InstagramBlock />
  </div>
</template>

<script>
import Vue from "vue";
import InfoBlock from "~/components/InfoBlock.vue";
import InstagramBlock from "~/components/InstagramBlock.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: { InstagramBlock, InfoBlock },
  data() {
    return {
      title: 'Home'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'Home page',
          name: 'Home page',
          content: 'My web site',
        }
      ]
    }
  }
})
</script>
