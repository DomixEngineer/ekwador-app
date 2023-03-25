<template>
  <navbar></navbar>
  <router-view></router-view>
  <app-footer></app-footer>
</template>

<script>
import navbar from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'
// import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    // Home,
    navbar,
    AppFooter
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

@font-face {
  font-family: 'cascade';
  src: url('./assets/fonts/cascade/Cascade.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'sui-generis';
  src: url('./assets/fonts/sui-generis/sui-generis.otf');
  font-weight: 400;
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
