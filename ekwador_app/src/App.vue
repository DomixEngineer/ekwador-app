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
@font-face {
  font-family: 'lato';
  src: url('./assets/fonts/lato/Lato-Thin.ttf');
  font-weight: 100;
}

@font-face {
  font-family: 'lato';
  src: url('./assets/fonts/lato/Lato-Light.ttf');
  font-weight: 300;
}

@font-face {
  font-family: 'lato';
  src: url('./assets/fonts/lato/Lato-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'lato';
  src: url('./assets/fonts/lato/Lato-Bold.ttf');
  font-weight: 700;
}

@font-face {
  font-family: 'lato';
  src: url('./assets/fonts/lato/Lato-Black.ttf');
  font-weight: 900;
}

html, body {
  padding: 0;
  margin: 0;
  background-color: #182c61;
}
.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
