<script>
import Navbar from './components/Navbar.vue'
import LoadingModal from './components/LoadingModal.vue'
import { useGlobalsStore } from './stores/globals.js'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'App',
  components: {
    Navbar,
    LoadingModal
  },
  computed: {
    ...mapState(useGlobalsStore, ['page', 'isLoading'])
  }
}
</script>

<template>
  <Navbar />
  <!-- <LoadingModal v-if="isLoading === true" /> -->
  <div>
    <router-view></router-view>
  </div>
</template>
