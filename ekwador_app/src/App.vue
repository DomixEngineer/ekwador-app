<template>
  <Home />
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
