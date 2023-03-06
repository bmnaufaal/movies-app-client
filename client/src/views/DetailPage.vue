<script>
import { useDetailStore } from '../stores/detail'
import { useLoginStore } from '../stores/login.js'
import { mapActions, mapState } from 'pinia'
import LoadingButton from '../components/LoadingButton.vue'

export default {
  name: 'DetailPage',
  computed: {
    ...mapState(useLoginStore, ['isLoggedIn']),
    ...mapState(useDetailStore, ['movie', 'bookmark', 'QRCode', 'detailLoading'])
  },
  methods: {
    ...mapActions(useDetailStore, [
      'fetchMovieDetail',
      'fetchBookmarkDetail',
      'handleAddBookmark',
      'handleDeleteBookmark',
      'getQRCode'
    ])
  },
  created() {
    if (this.$route.path.includes('movies')) {
      this.fetchMovieDetail(this.$route.params.id)
      this.getQRCode()
    } else if (this.$route.path.includes('bookmarks')) {
      this.fetchBookmarkDetail(this.$route.params.id)
      this.getQRCode()
    }
  },
  components: {
    LoadingButton
  }
}
</script>

<template>
  <div class="container py-5">
    <LoadingButton v-if="detailLoading" />
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card border-success bg-green">
          <img :src="movie.imgUrl" :alt="movie.title" class="card-img-top" />
          <div class="card-body">
            <div class="text-center">
              <h5 class="card-title">{{ movie.title }}</h5>
              <span class="badge text-bg-success">{{ movie.Author.username }}</span>
              <span class="badge text-bg-success ms-1">{{ movie.Genre.name }}</span>
              <span class="badge text-bg-success ms-1">{{ movie.rating }}</span>
              <p class="text-muted mb-4 mt-4">{{ movie.synopsis }}</p>
            </div>
            <g v-html="QRCode.data"></g>
            <div class="d-flex justify-content-between total font-weight-bold mt-4">
              <span>
                <button
                  class="btn btn-success"
                  @click.prevent="handleAddBookmark(movie.id)"
                  v-if="isLoggedIn && this.$route.path.includes('movies')"
                >
                  Add to bookmark
                </button>
                <a class="btn btn-success ms-1" :href="movie.trailerUrl" target="_blank">Trailer</a>
                <button
                  class="btn btn-danger ms-1"
                  @click.prevent="handleDeleteBookmark(this.$route.params.id)"
                  v-if="isLoggedIn && this.$route.path.includes('bookmarks')"
                >
                  Delete from bookmark
                </button> </span
              ><span
                ><router-link class="btn btn-secondary ms-1" :to="{ name: 'home' }"
                  >Back</router-link
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="card m-3">
    <div class="row">
      <div class="col">
        <img :src="movie.imgUrl" class="img-fluid rounded-start" :alt="movie.title" />
      </div>
      <div class="col">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">
            {{ movie.synopsis }}
          </p>
          <button
            class="btn btn-dark"
            @click.prevent="handleAddBookmark(movie.id)"
            v-if="isLoggedIn && this.$route.path.includes('movies')"
          >
            Add to bookmark
          </button>
          <button
            class="btn btn-danger"
            @click.prevent="handleDeleteBookmark(this.$route.params.id)"
            v-if="isLoggedIn && this.$route.path.includes('bookmarks')"
          >
            Delete from bookmark
          </button>
          <a class="btn btn-dark ms-1" :href="movie.trailerUrl" target="_blank">Trailer</a>
          <router-link class="btn btn-secondary ms-1" :to="{ name: 'home' }">Back</router-link>
        </div>
      </div>
    </div>
  </div> -->
</template>
