<script>
import { useBookmarksStore } from '../stores/bookmarks.js'
import { mapActions, mapState } from 'pinia'
import MovieCard from '../components/MovieCard.vue'

export default {
  name: 'BookmarkPage',
  data() {
    return {
      page: 1,
      size: 4,
      filter: null
    }
  },
  computed: {
    ...mapState(useBookmarksStore, ['bookmarks'])
  },
  methods: {
    ...mapActions(useBookmarksStore, ['fetchBookmarks'])
  },
  created() {
    this.fetchBookmarks()
  },
  components: {
    MovieCard
  }
}
</script>

<template>
  <div class="container">
    <div class="card mt-3 bg-yellow">
      <div class="card-body">
        <div class="card bg-green">
          <div class="card-body">
            <h3>My Bookmarks</h3>
          </div>
        </div>

        <LoadingModal class="text-center" v-if="isLoading" />

        <div class="d-flex flex-wrap justify-content-center text-center mt-3">
          <MovieCard
            v-for="(bookmark, index) in bookmarks"
            :key="bookmark.id"
            :movie="bookmark['Movie']"
            :bookmarkId="bookmark.id"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <div class="card mt-3 bg-yellow text-white">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="text-center">
            <h2><span class="badge bg-success">My Bookmarks</span></h2>
          </div>
          <div>
            <div class="d-flex flex-wrap justify-content-center text-center mt-3">
              <MovieCard
                v-for="(bookmark, index) in bookmarks"
                :key="bookmark.id"
                :movie="bookmark['Movie']"
                :bookmarkId="bookmark.id"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
