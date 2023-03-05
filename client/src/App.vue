<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar />
  <div>
    <router-view></router-view>
  </div>
</template>
