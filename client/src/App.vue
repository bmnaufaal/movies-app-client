<script>
import Navbar from './views/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar />

  <router-view></router-view>
</template>
