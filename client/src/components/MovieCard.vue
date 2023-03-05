<script>
export default {
  name: 'MovieCard',
  props: ['movie', 'bookmarkId']
}
</script>

<template>
  <!-- Movies Card -->
  <div class="card mx-2 my-2 bg-green" style="width: 18rem">
    <img class="card-img-top" :src="movie.imgUrl" v-bind:alt="movie.title" />
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item bg-green">
          <h5 class="card-title">{{ movie.title }}</h5>
        </li>
        <li class="list-group-item bg-green text-white">
          <span class="ms-1 badge text-bg-success">{{ movie.Genre.name }}</span>
          <span class="ms-1 badge text-bg-success">{{ movie.Author.username }}</span>
          <span class="ms-1 badge text-bg-success">{{ movie.rating }}</span>
        </li>
        <li class="list-group-item bg-green" style="text-align: justify; text-justify: inter-word">
          {{ movie.synopsis }}
        </li>
      </ul>
    </div>
    <div class="card-footer">
      <router-link :to="{ path: `/movies/${movie.id}` }" class="btn btn-success" v-if="!bookmarkId"
        >Detail</router-link
      >
      <router-link
        :to="{ path: `/bookmarks/${bookmarkId}` }"
        class="btn btn-success"
        v-if="bookmarkId"
        >Detail</router-link
      >
      <!-- <button
        class="btn btn-danger ms-1"
        v-if="page === 'bookmarkPage'"
        @click.prevent="handleDeleteBookmark(bookmark.id)"
      >
        Delete
      </button> -->
    </div>
  </div>
  <!-- End Of Movies Card -->
</template>
