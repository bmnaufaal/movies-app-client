<script>
import { useMoviesStore } from '../stores/movies'
import { mapActions, mapState } from 'pinia'
import MovieCard from '../components/MovieCard.vue'
import LoadingModal from '../components/LoadingModal.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      page: 1,
      size: 4,
      selectedGenre: ''
    }
  },
  computed: {
    ...mapState(useMoviesStore, ['movies', 'genres', 'isLoading', 'maxPages'])
  },
  watch: {
    page() {
      this.fetchMovies(this.page, this.size, this.selectedGenre)
    },
    selectedGenre() {
      this.fetchMovies(this.page, this.size, this.selectedGenre)
    }
  },
  methods: {
    ...mapActions(useMoviesStore, ['fetchMovies', 'fetchGenres']),
    changePage(page) {
      this.page = page
    }
  },
  created() {
    this.fetchGenres()
    this.fetchMovies(this.page, this.size, this.selectedGenre)
  },
  components: {
    MovieCard,
    LoadingModal
  }
}
</script>

<template>
  <div class="container">
    <div class="card mt-3 bg-yellow">
      <div class="card-body">
        <div class="card bg-green">
          <div class="card-body">
            <h3>Home Page</h3>

            <!-- Filter Section -->
            <select class="form-select" aria-label="Default select example" v-model="selectedGenre">
              <option value="" disabled selected>Filter by genre</option>
              <option :value="genre.id" v-for="(genre, index) in genres" :key="genre.id">
                {{ genre.name }}
              </option>
            </select>
            <!-- End of filter section -->
          </div>
        </div>

        <LoadingModal class="text-center" v-if="isLoading" />

        <!-- Movie Card -->
        <div class="d-flex flex-wrap justify-content-center text-center mt-3">
          <MovieCard v-for="(movie, index) in movies" :key="movie.id" :movie="movie" />
        </div>
        <!-- End of movie card -->

        <!-- Pagination  -->
        <nav>
          <ul class="pagination justify-content-center mt-3">
            <li :class="page === 1 || page === 0 ? 'page-item disabled' : 'page-item'">
              <a class="page-link" href="#" @click.prevent="changePage(page - 1)">Previous</a>
            </li>
            <li
              v-for="(item, index) in maxPages"
              :key="index"
              :class="page === index + 1 ? 'page-item active' : 'page-item'"
            >
              <a class="page-link" href="#" @click.prevent="changePage(index + 1)">{{
                index + 1
              }}</a>
            </li>
            <li :class="page === maxPages || maxPages === 0 ? 'page-item disabled' : 'page-item'">
              <a class="page-link" href="#" @click.prevent="changePage(page + 1)">Next</a>
            </li>
          </ul>
        </nav>
        <!-- End of pagination -->
      </div>
    </div>
  </div>
</template>
