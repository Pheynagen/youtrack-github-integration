<template>
  <header class="header">
    <Navbar />
    <About />
  </header>
</template>
<script>
import About from "~/components/About";
import Navbar from "~/components/Navbar";

export default {
  name: "MyHeaderComponent",
  components: { About, Navbar }
};
</script>
