<script>
import { useMoviesStore } from '../stores/movies'
import { mapActions, mapState } from 'pinia'
import MovieCard from '../components/MovieCard.vue'

export default {
  name: 'HomePage',
  computed: {
    ...mapState(useMoviesStore, ['movies'])
  },
  methods: {
    ...mapActions(useMoviesStore, ['fetchMovies'])
  },
  created() {
    this.fetchMovies()
  },
  components: {
    MovieCard
  }
}
</script>

<template>
  <div class="container">
    <div class="card mt-3">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div>
            <h3 class="card-title">Home Page</h3>
            <div class="d-flex flex-wrap justify-content-center text-center mt-3">
              <MovieCard v-for="(movie, index) in movies" :key="movie.id" :movie="movie" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
