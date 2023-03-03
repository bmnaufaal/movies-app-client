import { defineStore } from 'pinia'
import axios from 'axios'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    movies: []
  }),
  getters: {},
  actions: {
    async fetchMovies() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/movies',
          headers: {
            // access_token: localStorage.getItem('access_token')
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTY3NzgwNzEyN30.JdUOHRFAj57f9aR_nRDd0Yq6g89s-7K3nzkRJrAQHHw'
          }
        })
        this.movies = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
