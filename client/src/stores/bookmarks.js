import { defineStore } from 'pinia'
import axios from 'axios'
import toast from '../../helper/toast.js'

export const useBookmarksStore = defineStore('bookmarks', {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    bookmarks: [],
    isLoading: false
  }),
  getters: {},
  actions: {
    async fetchBookmarksLength() {
      try {
        this.isLoading = true
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/bookmarks',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.bookmarks = data
        toast('Success get my bookmarks')
        this.isLoading = false
      } catch (error) {
        console.log(error)
        toast(error.response.data.message)
        this.isLoading = false
      }
    },
    async fetchBookmarks() {
      try {
        this.isLoading = true
        let { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/bookmarks',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.bookmarks = data
        toast('Success get data')
        this.isLoading = false
      } catch (error) {
        console.log(error)
        toast(error.response.data.message)
        this.isLoading = false
      }
    }
  }
})
