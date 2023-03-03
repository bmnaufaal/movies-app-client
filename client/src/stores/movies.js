import { defineStore } from 'pinia'
import axios from 'axios'
import toast from '../../helper/toast.js'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    movies: [],
    isLoading: false
  }),
  getters: {},
  actions: {
    async fetchMovies() {
      try {
        this.isLoading = true
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/movies',
        })
        this.movies = data
        toast('Success get data')
        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.isLoading = false
      }
    }
  }
})
