<script>
import { useMoviesStore } from '../stores/movies'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'MoviesPage',
  computed: {
    ...mapState(useMoviesStore, ['movies'])
  },
  methods: {
    ...mapActions(useMoviesStore, ['fetchMovies'])
  },
  created() {
    this.fetchMovies()
  }
}
</script>

<template>
  <div>Movies Page</div>
</template>
