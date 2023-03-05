import { defineStore } from 'pinia'
import axios from 'axios'
import toast from '../../helper/toast.js'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    movies: [],
    genres: [],
    maxPages: 0,
    isLoading: false
  }),
  getters: {},
  actions: {
    async fetchMoviesLength(size, filter) {
      try {
        let queryParams = {}
        if (filter) {
          queryParams.filter = filter
        }
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/moviesMaxLength',
          params: queryParams
        })
        console.log(Math.floor(data.message / size))
        this.maxPages = Math.floor(data.message / size)
      } catch (error) {
        toast('Error fetch movies length')
      }
    },

    async fetchMovies(page, size, filter) {
      try {
        let queryParams = {
          page: page,
          size: size
        }
        if (filter) {
          queryParams.filter = filter
        }
        this.isLoading = true
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/movies',
          params: queryParams
        })
        this.movies = data
        toast('Success get movies')
        this.fetchMoviesLength(size, filter)
        this.isLoading = false
      } catch (error) {
        console.log(error)
        toast('Error')
        this.isLoading = false
      }
    },

    async fetchGenres() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/genres'
        })
        this.genres = data
        toast('Success get genres')
        this.isLoading = false
      } catch (error) {
        console.log(error)
        toast('Error')
        this.isLoading = false
      }
    }
  }
})
