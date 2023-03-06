import { defineStore } from 'pinia'
import axios from 'axios'
import toast from '../../helper/toast.js'
import { useRoute } from 'vue-router'

export const useDetailStore = defineStore('detail', {
  state: () => ({
    detailLoading: false,
    clientUrl: 'https://movies-app-customer.web.app/',
    baseUrl: 'https://movies-app-server-production.up.railway.app',
    movie: {
      Author: {
        username: ''
      },
      Genre: {
        name: ''
      }
    },
    QRCode: null,
    route: useRoute()
  }),
  actions: {
    async fetchMovieDetail(id) {
      try {
        this.detailLoading = true
        const { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/movies/' + id
        })
        this.movie = data
        toast('Success get movie detail')
        this.detailLoading = false
      } catch (error) {
        console.log(error)
        toast(error.response.data.message)
        this.detailLoading = false
      }
    },

    async fetchBookmarkDetail(id) {
      try {
        this.detailLoading = true
        const { data } = await axios({
          method: 'GET',
          url: this.baseUrl + '/customers/bookmarks/' + id,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.movie = data.Movie
        toast('Success get bookmark detail')
        this.detailLoading = false
      } catch (error) {
        console.log(error)
        toast(error.response.data.message)
        this.detailLoading = false
      }
    },

    async handleAddBookmark(MovieId) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: this.baseUrl + '/customers/bookmarks/add',
          headers: {
            access_token: localStorage.getItem('access_token')
          },
          data: {
            MovieId: MovieId
          }
        })
        this.router.push('/bookmarks')
        toast('Success add to bookmark')
      } catch (error) {
        console.log(error)
        toast(error.response.data.message)
      }
    },

    async handleDeleteBookmark(BookmarkId) {
      try {
        const { data } = await axios({
          method: 'DELETE',
          url: this.baseUrl + '/customers/bookmarks/' + BookmarkId,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.router.push('/bookmarks')
        toast('Success delete to bookmark')
      } catch (error) {
        console.log(error)
        toast(error.response.data.message)
      }
    },
    async getQRCode() {
      try {
        this.detailLoading = true
        const QR = await axios({
          method: 'POST',
          url: 'https://api.qr-code-generator.com/v1/create?access-token=fVJ5f-cvu9hCsJzOzX9PzeLzZ2SKIEXyr9-sMfh-QPz35rHy-scPolxZxoPiiZUX',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: {
            frame_name: 'no-frame',
            qr_code_text: this.clientUrl + this.route.fullPath,
            image_format: 'SVG',
            qr_code_logo: 'scan-me-square'
          }
        })
        this.QRCode = QR
        this.detailLoading = false
      } catch (error) {
        console.log(error)
        toast('Failed to make QR code')
        this.detailLoading = false
      }
    }
  }
})
