<script>
export default {
  name: 'MovieCard',
  props: ['movie']
}
</script>

<template>
  <!-- Movies Card -->
  <div class="card mx-2 my-2" style="width: 18rem">
    <img class="card-img-top" :src="movie.imgUrl" v-bind:alt="movie.title" />
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <h5 class="card-title">{{ movie.title }}</h5>
        </li>
        <li class="list-group-item">
          <span class="ms-1 badge text-bg-primary">{{ movie.Genre.name }}</span>
          <span class="ms-1 badge text-bg-primary">{{ movie.Author.username }}</span>
          <span class="ms-1 badge text-bg-dark">{{ movie.rating }}</span>
        </li>
        <li class="list-group-item" style="text-align: justify; text-justify: inter-word">
          {{ movie.synopsis }}
        </li>
      </ul>
    </div>
    <div class="card-footer">
      <a class="btn btn-primary ms-1" :href="movie.trailerUrl" target="_blank">Trailer</a>
      <a class="btn btn-primary ms-1">Detail</a>
    </div>
  </div>
  <!-- End Of Movies Card -->
</template>
