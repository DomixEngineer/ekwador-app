<template>
  <navbar></navbar>
  <router-view v-slot="{ Component }">
    <transition name="route">
      <div :key="$route.fullPath">
        <component :is="Component" />
      </div>
    </transition>
  </router-view>
  <app-footer></app-footer>
</template>

<script>
import './assets/main.scss'
import navbar from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    navbar,
    AppFooter
  }
}
</script>